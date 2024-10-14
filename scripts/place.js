function updateUnits() {
    // update the units in the relevant <td> elements
    document.getElementById('temperature').innerHTML += ' °C';
    document.getElementById('windspeed').innerHTML += ' km/h';
}

function calculateWindChill(temperatureCelsius, windSpeedKM) {
    let windChill = 13.12 + (0.6215 * temperatureCelsius) - (11.37 * (windSpeedKM ** 0.16)) + ((0.3965 * temperatureCelsius) * (windSpeedKM ** 0.16))
    return windChill;
}

function updateWindChill() {
    // grab temperature and windSpeed values from the doc, make them floats to do the calcuations below
    let temperature = parseFloat(document.getElementById('temperature').textContent);
    let windSpeed = parseFloat(document.getElementById('windspeed').textContent);

    let tdWindChill = document.getElementById('windchill');
    tdWindChill.innerHTML = ''; // clear the previous value

    /**
     * Only call calculateWindChill if the following conditions are met
     */

    if (temperature <= 10 && windSpeed > 4.8) {
        let windChillValue = calculateWindChill(temperature, windSpeed);
        tdWindChill.innerHTML = `${windChillValue} °C`; // this will append the unit dynamically to the document
    }
    else {
        tdWindChill.innerHTML = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateWindChill();
    updateUnits();
})



/**
 * Don't need this right now, but here is the function for calculating from degrees F
 * 
 * 
function calculateWindChillFromFahrenheit(temperatureFahrenheit, windSpeedMPH) {
    let windChill = 35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * (windSpeedMPH ** 0.16)) + ((0.4275 * temperatureFahrenheit) * (windSpeedMPH ** 0.16))
    return windChill;
}
*/