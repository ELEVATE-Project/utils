const RedisClientHelper = {};
const { getClient,getKeyPrefix } = require("../../config/redis");


/**
 * Prefix helper
 * Ensures all keys are namespaced
 */
 const prefixKey = (key) => {
  const prefix = getKeyPrefix();
  return prefix ? `${prefix}:${key}` : key;
};

/**
 * @method
 * @name setKey - Sets a key in Redis with optional expiration
 * @param {String} key - Key to save
 * @param {Object | Number | String} value - Data to save
 * @param {Number} expRedis - Expiration in seconds (optional)
 * @returns {Promise<String>} Result status (usually 'OK')
 */
RedisClientHelper.setKey = async (key, value, expRedis) => {
  if (!key) throw new Error("Redis key is required");

  const redisClient = getClient();

  const stringifiedValue = typeof value === 'string' ? value : JSON.stringify(value);

  if (expRedis !== undefined && expRedis !== null) {
    if (typeof expRedis !== 'number') {
      throw new Error("Expiration must be a number representing seconds");
    }
    const finalKey = prefixKey(key);
    await redisClient.set(finalKey, stringifiedValue, 'EX', expRedis);

    // return await redisClient.set(key, stringifiedValue, { EX: expRedis });
  } else {
    const finalKey = prefixKey(key);
    return await redisClient.set(finalKey, stringifiedValue);
  }

};

/**
 * @method
 * @name getKey - Retrieves a value from Redis
 * @param {String} key - Redis key
 * @returns {Promise<Object|null>} Parsed object or null if not found
 */
RedisClientHelper.getKey = async (key) => {
  if (!key) throw new Error("Redis key is required");

  const redisClient = getClient();

  const finalKey = prefixKey(key);
  const data = await redisClient.get(finalKey);
  return data ? JSON.parse(data) : null;
};

/**
 * @method
 * @name deleteKey - Deletes a key from Redis
 * @param {String} key - Redis key
 * @returns {Promise<Number>} 1 if key was deleted, 0 if not found
 */
RedisClientHelper.deleteKey = async (key) => {
  if (!key) throw new Error("Redis key is required");


  const redisClient = getClient();
  const finalKey = prefixKey(key);
  const result = await redisClient.del(finalKey);
  return result;
};


/**
 * @method
 * @name native - Access the raw ioredis instance
 */
 RedisClientHelper.native = () => getClient(); // ← add this

module.exports = RedisClientHelper;
