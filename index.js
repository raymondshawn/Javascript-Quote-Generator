const data = async () => {
  const response = await fetch("https://type.fit/api/quotes");
  return await response.json();
};

data().then((quotes) => {
  console.log("quotes", quotes);
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
});
