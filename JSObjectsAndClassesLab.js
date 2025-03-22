// Person Info
function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };

    return person;
} 
// City
function solve(city) {
    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
// Convert to Object
function solve(jsonString) {
    let obj = JSON.parse(jsonString);
    
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
// Convert to JSON
function solve(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let jsonString = JSON.stringify(person);

    console.log(jsonString);
}
// Phone Book
function solve(input) {
    let phoneBook = {};

    for (let entry of input) {
        let [name, phone] = entry.split(' ');

        phoneBook[name] = phone;
    }

    for (let [name, phone] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${phone}`);
    }
}
// Meetings
function solve(input) {
    let scheduledMeetings = {};

    for (let entry of input) {
        let [weekday, name] = entry.split(' ');

        if (scheduledMeetings[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            scheduledMeetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let [day, name] of Object.entries(scheduledMeetings)) {
        console.log(`${day} -> ${name}`);
    }
}
// Address Book
function solve(input) {
    let addressBook = {};

    input.forEach(entry => {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    });

    Object.keys(addressBook)
        .sort()
        .forEach(name => {
            console.log(`${name} -> ${addressBook[name]}`);
        });
}
// Cats
function createCats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catInfo of input) {
        let [name, age] = catInfo.split(' ');
        age = Number(age);
        let cat = new Cat(name, age);
        cat.meow();
    }
}
// Songs
function songFilter(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let n = input[0];
    let songs = [];

    for (let i = 1; i <= n; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    let filter = input[input.length - 1];

    for (let song of songs) {
        if (filter === 'all' || song.typeList === filter) {
            console.log(song.name);
        }
    }
}