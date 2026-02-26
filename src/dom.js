const renderWeather = (data) => {
    const row = document.getElementById("data-row");
    row.innerHTML = `
                        <td>${data.location}</td>
                        <td>${data.temp}</td>
                        <td>${data.feelsLike || "data not avilable"}</td>
                        <td>${data.humidity}</td>
                        <td>${data.wind}</td>
                        <td>${data.rainProb}</td>
                        <td>${data.description}</td>`
}

const renderError = (error) => {
    console.log(error);
    const errorField = document.getElementById("error-field");
    
    switch(error){
        case "empty":
            errorField.innerText = "Enter location Name";
            break;
        case "min":
            errorField.innerText = "Enter Atleast 3 characters";
            break;
        case "clear":
            errorField.innerText = "";
            break;
        default: errorField.innerText = "enter city name";
    }
}

export { renderError, renderWeather};