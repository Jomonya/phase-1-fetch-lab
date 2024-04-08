function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(json => {
      console.log(json); // Log the JSON to ensure structure
      renderBooks(json); // Explicitly pass the JSON object to renderBooks
    })
    .catch(error => console.error('Error fetching data:', error)); // Log errors
}

function renderBooks(books) {
  const main = document.querySelector('main');
  if (main) {
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.textContent = book.name; // Assuming 'name' is the correct property
      main.appendChild(h2);
    });
  } else {
    console.error("Couldn't find a <main> element in the document.");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


