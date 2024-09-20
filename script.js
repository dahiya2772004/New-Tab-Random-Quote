const quotes = [
    "Success is not a milestone, it's a never-ending race for perfection.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "You dont have to be great to start, but you need to start to be great",
    "Consistency is what converts average to success",
    "It always seems impossible until it's done.- Nelson Mandela",
    "The only way to do great work is to love what you do. – Steve Jobs"
  ];
  
  function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
  }
  
  displayRandomQuote();
  