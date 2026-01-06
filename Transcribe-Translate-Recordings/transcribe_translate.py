import os
from pydub import AudioSegment
from pydub.utils import make_chunks
import openai
from dotenv import load_dotenv

def split_audio(audio_path, chunk_size_ms=60000):
    """Splits an audio file into chunks."""
    audio = AudioSegment.from_file(audio_path)
    chunks = make_chunks(audio, chunk_size_ms)
    return chunks

def transcribe_audio(chunk, api_key):
    """Transcribes audio using OpenAI Whisper API."""
    # Save the chunk temporarily
    temp_chunk_path = "temp_chunk.mp3"
    chunk.export(temp_chunk_path, format="mp3")

    # Load audio file
    with open(temp_chunk_path, "rb") as audio_file:
        result = openai.Audio.transcribe(
            model="whisper-1",  # Add model name if needed
            file=audio_file
        )

    os.remove(temp_chunk_path)
    return result.get("text", "")

def translate_text(text, target_language="en"):
    """Translates text using OpenAI's GPT model."""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Use the new model instead of text-davinci-003
        messages=[
            {"role": "system", "content": f"Translate the following text to {target_language}: "},
            {"role": "user", "content": text}
        ],
        max_tokens=500
    )
    return response['choices'][0]['message']['content'].strip()

def process_audio_file(audio_path, api_key, chunk_size_ms=60000):
    """Processes an audio file: splits, transcribes, translates, and saves results."""
    # Get audio file directory
    folder_path = os.path.dirname(audio_path)
    base_name = os.path.splitext(os.path.basename(audio_path))[0]

    # Split audio into chunks
    chunks = split_audio(audio_path, chunk_size_ms)

    # Prepare output files
    transcription_file = os.path.join(folder_path, f"{base_name}_transcription.txt")
    translation_file = os.path.join(folder_path, f"{base_name}_translation.txt")

    with open(transcription_file, "w", encoding="utf-8") as trans_file, open(translation_file, "w", encoding="utf-8") as transl_file:
        for i, chunk in enumerate(chunks):
            print(f"Processing chunk {i + 1}/{len(chunks)}...")

            # Transcribe
            transcription = transcribe_audio(chunk, api_key)
            
            # Translate
            translation = translate_text(transcription)

            # Save results
            trans_file.write(f"Chunk {i + 1} Transcription:\n{transcription}\n\n")
            transl_file.write(f"Chunk {i + 1} Translation:\n{translation}\n\n")

    print(f"Transcription and translation saved to {folder_path}")

if __name__ == "__main__":
    # Load environment variables
    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    audio_file_path = os.getenv("AUDIO_FILE_PATH")

    if not api_key:
        print("OPENAI_API_KEY is not set in .env file.")
    elif not audio_file_path:
        print("AUDIO_FILE_PATH is not set in .env file.")
    elif not os.path.exists(audio_file_path):
        print("The specified audio file does not exist.")
    else:
        process_audio_file(audio_file_path, api_key)
