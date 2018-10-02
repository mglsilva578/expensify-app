// const person = {
//     name: 'Miguel',
//     age: 27,
//     location: {
//         city: 'Lisboa',
//         temp: 27
//     }

// };

// const {name, age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// console.log(`It's ${person.location.temp} in ${person.location.city}.`);


const address = ['1299 S Juniper Street', 'Philadelphia' , 'Pensylvania', '19231'];


const [street, , state, zip = 'new york'] = address;