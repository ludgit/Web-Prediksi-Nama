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
    } else {
        ubahGender = "Perempuan";
        genderMale.style.display = 'none'
        genderFemale.style.display = 'inline'
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
