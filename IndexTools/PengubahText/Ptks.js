document.title="Dutivul";

const sectionSpech = document.getElementById('TextTs');
const textArea = document.getElementById('TextArea');

let ButtonSpech = document.createElement('button');
ButtonSpech.innerHTML = "Generate";
ButtonSpech.style.padding = "8px 16px";
ButtonSpech.style.cursor = "pointer";

sectionSpech.append(ButtonSpech);

textArea.value = "";

ButtonSpech.addEventListener('click', () => {
  const ValueTextArea = textArea.value;

  if (ValueTextArea) {
    // Inisialisasi objek SpeechSynthesisUtterance
    let Suara = new SpeechSynthesisUtterance();
    Suara.text = ValueTextArea;

    // Buat sintesis suara
    window.speechSynthesis.speak(Suara);

    // Tunggu hingga sintesis selesai
    Suara.onend = () => {
      // Konversi sintesis suara ke MP3 dengan bantuan MediaRecorder API (peramban tergantung pada dukungannya)
      const mediaRecorder = new MediaRecorder(new Blob([new SpeechSynthesisUtterance().text], { type: 'audio/wav' }));

      mediaRecorder.ondataavailable = (e) => {
        const audioBlob = e.data;
        const audioUrl = URL.createObjectURL(audioBlob);

        // Buat tautan unduh
        const downloadLink = document.createElement('a');
        downloadLink.href = audioUrl;
        downloadLink.download = 'speech.mp3';
        downloadLink.innerHTML = 'Unduh MP3';

        // Tambahkan tautan unduh ke dokumen
        sectionSpech.appendChild(downloadLink);
      };

      mediaRecorder.start();
      mediaRecorder.stop();
    };
  }
});

const DivSearchTools = document.getElementById('SearchTools');
const InputSearchTools = document.getElementById('inputSearch');

InputSearchTools.classList.add('inputSearchTools');