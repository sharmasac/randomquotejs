function getQuote() {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        const quoteElement = document.getElementById('quote');
        const indx = Math.floor(Math.random()*data.length);
        const quote = data[indx].text;
        const author = data[indx].author;
        quoteElement.innerHTML = `
          <p>${quote}</p>
          <p>- ${author}</p>
        `;
      })
      .catch(error => {
        console.log('Error:', error);
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = 'Failed to fetch the quote. Please try again.';
      });
  }