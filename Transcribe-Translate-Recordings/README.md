# Recording Transcription and Translation

This repository contains a Python script to process large audio files. The script performs the following tasks:

1. Splits the audio into smaller chunks.
2. Transcribes the audio chunks into text using OpenAI's Whisper API.
3. Translates the transcription into English using OpenAI's GPT model.
4. Saves the transcription and translation as text files in the same folder as the input audio file.

## Prerequisites

### Software Requirements
- Python 3.8 or higher
- FFmpeg (for audio processing with `pydub`)

### Python Libraries
Install the required Python libraries using pip:
```bash
pip install pydub openai python-dotenv
```

### Environment Variables
Create a `.env` file in the root directory of the repository with the following variables:
```
OPENAI_API_KEY=your_openai_api_key
AUDIO_FILE_PATH=path_to_your_audio_file
```
Replace `your_openai_api_key` with your OpenAI API key and `path_to_your_audio_file` with the full path to the audio file you want to process.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ELEVATE-Project/utils.git
   cd utils/Transcribe-Translate-Recordings

2. Set up the `.env` file as described above.

3. Run the script:
   ```bash
   python transcribe_translate.py
   ```

4. The script will process the audio file, generate transcriptions, translate them into English, and save the results as text files in the same folder as the input audio file.

## Output

- **Transcription File:** `<audio_file_name>_transcription.txt`
- **Translation File:** `<audio_file_name>_translation.txt`

## Notes

- Ensure your `.env` file contains the correct API key and audio file path.
- Adjust the chunk size in the script if necessary for better performance or accuracy.
- Make sure FFmpeg is installed and properly set up in your system.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---



