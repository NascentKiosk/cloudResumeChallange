
/* document.getElementById("counter").innerText = count;
const apiUrl = "https://cloudcvchallange.z1.web.core.windows.net/api/visitorCounter"; */
const apiUrl = "https://cloudresume-b0asefbfczaagrav.norwayeast-01.azurewebsites.net/api/visitorcounter";

async function updateCounter() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById("counter").innerText = data.count;
}

updateCounter();