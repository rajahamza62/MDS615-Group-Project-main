document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const musicTitle = document.getElementById('music-title');
    const audioUpload = document.getElementById('audio-upload');

    audioUpload.addEventListener('change', function () {
        const file = audioUpload.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            audioSource.src = fileURL;
            audioPlayer.load();
            musicTitle.textContent = `Now Playing: ${file.name}`;
        }
    });
});
