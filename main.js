console.log('Halo')

const base_api = "https://genderapi.io/api";

function showResult(name, gender, probability) {
    const predictionElement = document.getElementById("prediction")
    let probabilityPercentage = probability;
    let ubahGender;
    if(gender == "male") {
        ubahGender = "Laki-Laki"
    }else{
        ubahGender = "Perempuan"
    }

    if(probabilityPercentage == 0) {
        let predictionText = `Halo ${name}, Maaf Namamu Tidak Ada di Database.`
    
        predictionElement.innerHTML = predictionText

    }else{
        let predictionText = `Halo <strong>${name}</strong>, Jenis Kelamin Kamu Kemungkinan Adalah <strong>${ubahGender}</strong> Dengan Presentase Sebesar <strong>${probabilityPercentage}%</strong>`
    
        predictionElement.innerHTML = predictionText
    }

}

async function predict(event) {
    if(event.key == "Enter") {
        const firstName = event.target.value;
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

        const response = await fetch(queryUrl)
        const result = await response.json();
        showResult(result.name, result.gender, result.probability)
    }
}
