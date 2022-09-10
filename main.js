var lastRefresh = new Date();
refresh();

function updateLastRefreshMinutes() {
    const minutesUpdate = Math.floor((new Date() - lastRefresh) / 60000);
    setLastRefreshMinutes(minutesUpdate);
}

setInterval(updateLastRefreshMinutes, 10000);

function setLastRefreshMinutes(minutes) {
    document.getElementById("minutes").innerText = minutes;
}

function refresh() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague?unitGroup=metric&key=HM8R4AF86T3WWYHWYVHAL539N', true);
    request.onload = function () {
        const forecast = JSON.parse(this.response);

        const description = forecast.description;
        document.getElementById("description").innerText = description;
        const temperature = forecast.currentConditions.temp;
        document.getElementById("temperature").innerText = temperature;
        const feelslike = forecast.currentConditions.feelslike;
        document.getElementById("feelslike").innerText = feelslike;
        const humidity = forecast.currentConditions.humidity;
        document.getElementById("humidity").innerText = humidity;
        const pressure = forecast.currentConditions.pressure;
        document.getElementById("pressure").innerText = pressure;
        const uvindex = forecast.currentConditions.uvindex;
        document.getElementById("uvindex").innerText = uvindex;
        lastRefresh = new Date();
        updateLastRefreshMinutes();

    }

    request.send();
}

setInterval(refresh, 300000);