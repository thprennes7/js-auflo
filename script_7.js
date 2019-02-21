const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function asTheyAllBeTaken(bookList) {
	let x = 0;
	bookList.forEach(book => {
		if (book['rented'] == 0)
			x = 1;
	})
	if (x == 0)
		console.log('yes');
	else
		console.log('no');
}

function mostRented(bookList) {
	bookList.sort(function(a, b){return b.rented - a.rented});
	console.log(bookList[0]);
}
function lessRented(bookList) {
	bookList.sort(function(a, b){return a.rented - b.rented});
	console.log(bookList[0]);
}

function idThatIWant(bookList, id) {
	let bookSelected = 'non'
	bookList.forEach(book => {
		if (book.id == id)
			console.log(bookSelected = book.title);

	})
}
function deleteThatIWant(bookList, id) {

}
function sortThemAll(bookList) {
	bookList.sort(bookList['title']);
	console.log(bookList);
}
console.log("<-----------------Script_7----------------->");
idThatIWant(books, 873495);
sortThemAll(books);
