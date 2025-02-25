// Employees
function employeesList(names) {
    let employees = {};

    for (let name of names) {
        employees[name] = name.length;
    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}
// Towns
function parseTable(input) {
    for (let row of input) {
        let [town, lat, lon] = row.split(' | ');

        let townObject = {
            town: town,
            latitude: Number(lat).toFixed(2),
            longitude: Number(lon).toFixed(2)
        };

        console.log(townObject);
    }
}
// Store Provision
function updateStock(currentStock, delivery) {
    let store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        let quantity = Number(delivery[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity; 
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}
// Movies
function storeMovies(commands) {
    let movies = [];

    for (let command of commands) {
        if (command.startsWith('addMovie ')) {
            let movieName = command.replace('addMovie ', '');
            movies.push({ name: movieName });
        } else if (command.includes(' directedBy ')) {
            let [movieName, director] = command.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(' onDate ')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.filter(m => m.name && m.director && m.date)
          .forEach(m => console.log(JSON.stringify(m)));
}
// Inventory
function registerHeroes(input) {
    let heroes = [];

    for (let entry of input) {
        let [name, level, items] = entry.split(' / ');
        level = Number(level); 
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
// Words Tracker
function countWordsOccurrences(input) {
    let wordsToFind = input[0].split(' ');
    let wordsCount = {}; 

    for (let word of wordsToFind) {
        wordsCount[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        let word = input[i];
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
// Odd Occurrences
function oddOccurrences(input) {
    let words = input.toLowerCase().split(' '); 
    let occurrences = {};

    for (let word of words) {
        occurrences[word] = (occurrences[word] || 0) + 1;
    }

    let result = [];
    for (let word of words) {
        if (occurrences[word] % 2 !== 0 && !result.includes(word)) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}
// Piccolo
function parkingLotManagement(input) {
    let parkingLot = new Set(); 

    for (let entry of input) {
        let [direction, carNumber] = entry.split(', '); 

        if (direction === 'IN') {
            parkingLot.add(carNumber); 
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size > 0) {
        console.log([...parkingLot].sort().join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}
// Make a Dictionary
function dictionaryParser(jsonArray) {
    let dictionary = {};

    for (let jsonString of jsonArray) {
        let parsedObj = JSON.parse(jsonString);
        let term = Object.keys(parsedObj)[0];
        let definition = parsedObj[term];

        dictionary[term] = definition; 
    }

    let sortedTerms = Object.keys(dictionary).sort(); 

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
// Class Vehicle
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}