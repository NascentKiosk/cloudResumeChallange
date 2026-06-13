const apiUrl =
    "https://cloudresume-b0asefbfczaagrav.norwayeast-01.azurewebsites.net/api/visitorcounter";

async function updateCounter() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log("Counter response:", data);

        document.getElementById("counter").innerText = data.count;
    } catch (error) {
        console.error("Counter error:", error);

        document.getElementById("counter").innerText = "Error";

        const errorElement = document.getElementById("error-message");
        if (errorElement) {
            errorElement.innerText =
                "Unable to load visitor count. Check browser console.";
        }
    }
}

updateCounter();