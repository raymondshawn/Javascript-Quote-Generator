const data = () => {
  const response = fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
  return response;
};

let quotes;

data()
  .then((response) => {
    console.log("first then response");
    quotes = response;
    return response;
  })
  .then(() => {
    console.log("second then finished");
  });

setTimeout(() => {
  const author = document.getElementById("author");
  const quote = document.getElementById("quote");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    const text = quotes[randomNumber].text;
    const auth = quotes[randomNumber].author;
    quote.textContent = text;
    author.textContent = auth;
  });
}, 1000);
