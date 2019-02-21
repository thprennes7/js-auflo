const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function bornIn70s(entrepreneursTable) {
	let guysIn70s = [];
	entrepreneursTable.forEach(entrepreneur => {
		if (entrepreneur['year'] >= 1970 && entrepreneur['year'] < 1980) {
			guysIn70s.push(entrepreneur);
		}
	})
	console.log(guysIn70s);
}

function combineName(entrepreneursTable) {
	let guys = [];
	let x = 0;
	entrepreneursTable.forEach(entrepreneur => {
		guys[x] = entrepreneur['first'] + " " + entrepreneur['last'];
		x++;
	})
	console.log(guys)
}

function ages(entrepreneursTable) {
	let x = 0;
	entrepreneursTable.forEach(entrepreneur => {
		entrepreneursTable[x]['age'] = 2019 - entrepreneur['year'];
		x++;
	})
	console.log(entrepreneursTable);
}

function sortLast(entrepreneursTable) {
	entrepreneursTable.sort(function(a, b){return a.last - b.last});
	console.log(entrepreneursTable);
}

sortLast(entrepreneurs);
