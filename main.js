let page = 1;
function loadBooks(page) {
    BooksService.getBooks(page).then(books => renderPage(books))
}
loadBooks(page);

function renderPage(data) {
    const books = data.results
    const booksContainer = document.getElementById('books-container');
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        console.log(book.title);
        const container = document.createElement('div');
        container.style.backgroundImage = 'url(' + book.formats["image/jpeg"] + ')'
        container.classList.add('b-card');
        const titleContainer = document.createElement('h3');
        const authorsContainer = document.createElement('span');
        const languagesContainer = document.createElement('span');
        const imageContainer = document.createElement('img');

        const titleNode = document.createTextNode(book.title);
        titleContainer.appendChild(titleNode);
        if (book.authors[0]) {
            const authorsNode = document.createTextNode(book.authors[0].name)
            authorsContainer.appendChild(authorsNode);
        }
        const languagesNode = document.createTextNode(book.languages[0]);
        languagesContainer.appendChild(languagesNode);

        booksContainer.appendChild(container);
        container.appendChild(titleContainer);
        container.appendChild(authorsContainer);
        container.appendChild(languagesContainer);
    }
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.addEventListener('click', ()=>{
        page++
        loadBooks(page);
    })
    const btnText = document.createTextNode('ᐅ');
    nextBtn.appendChild(btnText);
    booksContainer.appendChild(nextBtn);
}

function search() {
    const input=document.getElementById("text-search");
    const searchText=input.value;
    document.getElementById('books-container').innerHTML = '';
    BooksService.searchBooks(searchText).then(books => {
        renderPage(books)
    })
}

function clearSearch() {
    console.log('clear')
    const input=document.getElementById("text-search");
    input.value = '';
    page = 1;
    document.getElementById('books-container').innerHTML = '';
    loadBooks(page);
}