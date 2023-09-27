class BooksService{
    static getBooks(page=1){
        return fetch('https://gutendex.com/books/?page='+ page)
        .then(res=>res.json())
    }
    static searchBooks(searchText){
        return fetch('https://gutendex.com/books/?search='+ searchText)
        .then(res=>res.json())
    }

}