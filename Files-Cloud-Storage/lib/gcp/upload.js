'use strict'

const { Storage } = require('@google-cloud/storage')

module.exports = class GcpFileHelper {
	/**
	 * Upload file to GCP
	 * @method
	 * @name uploadFile - Required all parameters*
	 * @param  {filePath} filePath - Stored file path - absolute path.
	 * @param  {string} destFileName - fileName to be saved in google cloud
	 * @param  {string} bucketName - google cloud storage bucket in which file gets saved
	 * @param  {string} gcpProjectId - google cloud storage project id
	 * @param  {string} gcpJsonFilePath - google cloud storage json configuration file absolute path for connectivity
	 * @returns {Promise<JSON>} Uploaded json result.
	 * @see gcpProjectId - Get from gcp console
	 * @see gcpJsonFilePath - Download file from manage storage api key section
	 */
	static async uploadFile({ filePath, destFileName, bucketName, gcpProjectId, gcpJsonFilePath }) {
		if (!filePath) {
			const error = new Error('filePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof filePath !== 'string') {
			const error = new Error('expected filepath as string')
			error.code = 500
			throw error
		}

		if (!destFileName) {
			const error = new Error('destFileName is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!bucketName) {
			const error = new Error('bucketName is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!gcpProjectId) {
			const error = new Error('gcpProjectId is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!gcpJsonFilePath) {
			const error = new Error('gcpJsonFilePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof gcpJsonFilePath !== 'string') {
			const error = new Error('expected gcpJsonFilePath as string')
			error.code = 500
			throw error
		}

		/* Instantiate cloud storage class */
		const storage = new Storage({
			projectId: gcpProjectId,
			keyFilename: gcpJsonFilePath,
		})

		try {
			/* connected to bucket and uploaded file */
			const uploadedFile = await storage.bucket(bucketName).upload(filePath, {
				destination: destFileName,
				metadata: {},
			})
			uploadedFile[0].metadata.accessUrl = `https://storage.googleapis.com/${uploadedFile[0].metadata.bucket}/${uploadedFile[0].metadata.name}`
			return uploadedFile[0].metadata
		} catch (error) {
			throw error
		}
	}

	/**
	 * Get signed url to create, read or delete objects
	 * @method
	 * @name getSignedUrl
	 * @param  {destFilePath} destFilePath - Stored file path - location from bucket - ex - users/profile.png
	 * @param  {string} bucketName - google cloud storage bucket in which action is peformed over file
	 * @param  {string} actionType - signed url usage type - example ('read' | 'write' | 'delete' | 'resumable')
	 * @param  {string} expiry - signed url expiration time - In ms from current time - type number | string | Date
	 * @param  {string} gcpProjectId - google cloud storage project id
	 * @param  {string} gcpJsonFilePath - google cloud storage json configuration file absolute path for connectivity
	 * @param  {string} contentType - content type of file
	 * @returns {Promise<JSON>} Signed url json result.
	 * @see gcpProjectId - Get from gcp console
	 * @see gcpJsonFilePath - Download file from manage storage api key section
	 */
	static async getSignedUrl({
		destFilePath,
		bucketName,
		actionType,
		expiry,
		gcpProjectId,
		gcpJsonFilePath,
		contentType,
	}) {
		if (!destFilePath) {
			const error = new Error('destFilePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof destFilePath !== 'string') {
			const error = new Error('expected destFilePath as string')
			error.code = 500
			throw error
		}

		if (!bucketName) {
			const error = new Error('bucketName is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!actionType) {
			const error = new Error('actionType is not passed in parameter')
			error.code = 500
			throw error
		}

		if (actionType !== 'read' && actionType !== 'write' && actionType !== 'delete' && actionType !== 'resumable') {
			const error = new Error('actionType is invalid')
			error.code = 500
			throw error
		}

		if (!gcpProjectId) {
			const error = new Error('gcpProjectId is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!gcpJsonFilePath) {
			const error = new Error('gcpJsonFilePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof gcpJsonFilePath !== 'string') {
			const error = new Error('expected gcpJsonFilePath as string')
			error.code = 500
			throw error
		}

		if (!contentType) {
			const error = new Error('contentType is not passed in parameter')
			error.code = 500
			throw error
		}

		/* Instantiate cloud storage class */
		const storage = new Storage({
			projectId: gcpProjectId,
			keyFilename: gcpJsonFilePath,
		})

		/* Signed url options */
		let options = {
			action: actionType,
			expires: expiry,
			contentType,
		}

		options = JSON.parse(JSON.stringify(options))

		try {
			/* connected to bucket and instantiated file object to get signed url */
			const signedUrl = await storage.bucket(bucketName).file(destFilePath).getSignedUrl(options)
			return { signedUrl: signedUrl[0], filePath: destFilePath }
		} catch (error) {
			throw error
		}
	}

	/**
	 * Get downloadable url of uploaded object
	 * @method
	 * @name getDownloadableUrl
	 * @param  {destFilePath} destFilePath - Stored file path - location from bucket - ex - users/profile.png
	 * @param  {string} bucketName - google cloud storage bucket in which action is peformed over file
	 * @param  {string} gcpProjectId - google cloud storage project id
	 * @param  {string} gcpJsonFilePath - google cloud storage json configuration file absolute path for connectivity
	 * @returns {Promise<string>} Downloadable url
	 * @see gcpProjectId - Get from gcp console
	 * @see gcpJsonFilePath - Download file from manage storage api key section
	 */
	static async getDownloadableUrl({ destFilePath, bucketName, gcpProjectId, gcpJsonFilePath }) {
		if (!destFilePath) {
			const error = new Error('destFilePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof destFilePath !== 'string') {
			const error = new Error('expected destFilePath as string')
			error.code = 500
			throw error
		}

		if (!bucketName) {
			const error = new Error('bucketName is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!gcpProjectId) {
			const error = new Error('gcpProjectId is not passed in parameter')
			error.code = 500
			throw error
		}

		if (!gcpJsonFilePath) {
			const error = new Error('gcpJsonFilePath is not passed in parameter')
			error.code = 500
			throw error
		}

		if (typeof gcpJsonFilePath !== 'string') {
			const error = new Error('expected gcpJsonFilePath as string')
			error.code = 500
			throw error
		}

		/* Instantiate cloud storage class */
		const storage = new Storage({
			projectId: gcpProjectId,
			keyFilename: gcpJsonFilePath,
		})

		try {
			/* connected to bucket and instantiated file object to prepare downloadable url */
			const fileMetaData = await storage.bucket(bucketName).file(destFilePath).getMetadata()
			const url = new URL(fileMetaData[0].mediaLink)
			const urlParams = url.searchParams
			return `${url.origin}${url.pathname}?alt=${urlParams.get('alt')}`
		} catch (error) {
			throw error
		}
	}

	/**
      * Get downloadable url of uploaded object
      * @method
      * @name getSignedDownloadableUrl
      * @param  {destFilePath} destFilePath     - Stored file path - location from bucket - ex - users/profile.png
      * @param  {string} bucketName             - google cloud storage bucket in which action is peformed over file
      * @param  {string} gcpProjectId           - google cloud storage project id
      * @param  {string} gcpJsonFilePath        - google cloud storage json configuration file absolute path for connectivity
      * @param  {string} expiry                 - downloadable url expiration time - In ms from current time - type number | string | Date
      * @returns {Promise<string>}              - Downloadable url
      * @see gcpProjectId                       - Get from gcp console
      * @see gcpJsonFilePath -                  - Download file from manage storage api key section
    */
    static async getSignedDownloadableUrl({ destFilePath, bucketName, gcpProjectId, gcpJsonFilePath, expiry }) {
        // Ensure all parameters are provided
        if (!destFilePath) {
            const error = new Error('destFilePath is not passed in parameter')
            error.code = 500
            throw error
        }

        if (typeof destFilePath !== 'string') {
            const error = new Error('expected destFilePath as string')
            error.code = 500
            throw error
        }

        if (!bucketName) {
            const error = new Error('bucketName is not passed in parameter')
            error.code = 500
            throw error
        }

        if (!gcpProjectId) {
            const error = new Error('gcpProjectId is not passed in parameter')
            error.code = 500
            throw error
        }

        if (!gcpJsonFilePath) {
            const error = new Error('gcpJsonFilePath is not passed in parameter')
            error.code = 500
            throw error
        }

        if (typeof gcpJsonFilePath !== 'string') {
            const error = new Error('expected gcpJsonFilePath as string')
            error.code = 500
            throw error
        }
		// Set default expiry time to 15 minutes (if expiry is not provided)
		const defaultExpiry = 15 * 60 * 1000 // 15 minutes in milliseconds
		const expires = expiry || (Date.now() + defaultExpiry)
    
        // Instantiate the cloud storage client
        const storage = new Storage({
            projectId: gcpProjectId,
            keyFilename: gcpJsonFilePath
        })
        
        try {
            // Generate a signed URL for downloading the file
            const options = {
                version: 'v4',
                action: 'read',
                expires: expires,
            }
            const [signedUrl] = await storage.bucket(bucketName).file(destFilePath).getSignedUrl(options)
            
            return signedUrl; // Return the signed URL for downloading the file
        } catch (error) {
            throw error
        }
    }

	/**
	 * Delete a folder and its contents from a GCP bucket.
	 * @param {string} bucketName - Google Cloud Storage bucket name.
	 * @param {string} folderPath - Name of the folder to delete.
	 * @param {string} gcpProjectId - Google Cloud Storage project ID.
	 * @param {string} gcpJsonFilePath - Path to the JSON configuration file for connectivity.
	 * @returns {Promise<void>}
	 */
	static async deleteFolder({ bucketName, folderPath, gcpProjectId, gcpJsonFilePath }) {
		if (!bucketName) {
			throw new Error('bucketName is not provided')
		}

		if (!folderPath) {
			throw new Error('folderPath is not provided')
		}

		if (!gcpProjectId) {
			throw new Error('gcpProjectId is not provided')
		}

		if (!gcpJsonFilePath) {
			throw new Error('gcpJsonFilePath is not provided')
		}

		if (typeof gcpJsonFilePath !== 'string') {
			throw new Error('gcpJsonFilePath must be a string')
		}

		try {
			/* Instantiate the cloud storage class */
			const storage = new Storage({
				projectId: gcpProjectId,
				keyFilename: gcpJsonFilePath,
			})

			const folderPathWithSlash = folderPath.endsWith('/') ? folderPath : folderPath + '/'

			const bucket = storage.bucket(bucketName)
			const [files] = await bucket.getFiles({ prefix: folderPathWithSlash })

			// Delete each file and folder in the folder recursively
			const deletePromises = files.map((file) => file.delete())

			await Promise.all(deletePromises)
			return true
		} catch (error) {
			throw error
		}
	}
}
