console.log("Client side javascript is loaded.");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", () => {
    const location = search.value;

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch(`http://localhost:5000/weather?address=${location}`)
        .then((res) => res.json())
        .then(({ error, forecast, location, address } = {}) => {
            if (error) return (messageOne.textContent = error);

            messageOne.textContent = location;
            messageTwo.textContent = forecast;
        })
        .catch((err) => {
            messageOne.textContent = err;
        });
});
