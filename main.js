const base_api = "https://genderapi.io/api";
const api = "659a7e7fcbee3b71df05dc23";

function showResult(name, gender, probability) {
    const predictionElement = document.getElementById("prediction");
    let genderMale = document.getElementById("male")
    let genderFemale = document.getElementById("female")
    let probabilityPercentage = probability;
    let ubahGender;

    genderMale.style.display = 'none';
    genderFemale.style.display = 'none';
    
    if (gender == "male") {
        ubahGender = "Laki-Laki";
        genderMale.style.display = 'inline'
        genderFemale.style.display = 'none'
    } else if (gender == "female") {
        ubahGender = "Perempuan";
        genderMale.style.display = 'none'
        genderFemale.style.display = 'inline'
    }else{
        genderMale.style.display = 'none'
        genderFemale.style.display = 'none'
        predictionElement.innerHTML = "<strong>Error 404</strong>"
    }


if (probabilityPercentage == 0) {
        let predictionText = `Halo ${inputValue}, Maaf Namamu Tidak Ada di Database.`;
        predictionElement.innerHTML = predictionText;
    } 
    else {
        let predictionText = `Halo <strong class="warnajawab">${name}</strong>, Jenis Kelamin Kamu Kemungkinan Adalah <strong class="warnajawab">${ubahGender}</strong> Dengan Presentase Sebesar <strong class="warnajawab">${probabilityPercentage}%</strong>`;
        predictionElement.innerHTML = predictionText;
    }
}

async function predictFromInput(inputValue) {
    const queryUrl = `${base_api}/?name=${inputValue}&country_id=ID&key=${api}`;
    
    try {
        const response = await fetch(queryUrl);
        const result = await response.json();
        showResult(result.name, result.gender, result.probability);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, display a message, or take appropriate action.
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector("input");
    const buttonElement = document.querySelector("button");

    // Handling button click event
    buttonElement.addEventListener("click", function () {
        const firstName = inputElement.value;
        predictFromInput(firstName);
    });

    // Handling Enter key press event
    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const firstName = inputElement.value;
            predictFromInput(firstName);
        }
    });
});

function updateTime() {
    const now = new Date();
    const daysOfWeek = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu'
    ];
    
    const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ];
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dayOfMonth = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()].toString().padStart(2, '0'); // Menambah 1 karena indeks bulan dimulai dari 0
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `Sekarang Hari ${dayOfWeek}, ${dayOfMonth}/${month}/${year},  Pukul : ${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call to display time immediately
