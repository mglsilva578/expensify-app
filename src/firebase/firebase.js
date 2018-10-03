import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{firebase, googleAuthProvider, database as default};





// FIREBASE COURSE _____________________
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());

// });
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 9423423432
// });


// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 9423423432
// });


// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1095100,
//     createdAt: 9423423432
// });
// const notes = [{
//     id: '12',
//     title: 'first note!',
//     body: 'This is my note'
// },{
//     id: '761ase',
//     title: 'Another note',
//     body: 'this my note'
// }];
// database.ref('notes').set(notes);

// const firebaseNotes = {
//     notes: {
//         dasda: {
//             title: 'first note!',
//             body: 'This is my note'
//         },
//         kdsadas:{
//             title: 'Another note',
//             body: 'this my note'
//         }
//     }
// };
// database.ref('notes').push({
//     title: 'first note!',
//     body: 'This is my note'
// });
// database.ref().set({
//     name:'Miguel Silva',
//     age: 27,
//     location: {
//         city: 'Lisbon',
//         country: 'Portugal'
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('this failed.', e);
// });

// database.ref('name')
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log('error')
// });

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// });

// setTimeout(()=>{
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(()=>{
//     database.ref('age').off(onValueChange);
// }, 7000);



// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10000);
// data.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(()=>{
//     console.log('Data is saved');
// }).catch(()=>{
//     console.log('this failed', e);
// });

// database.ref().update({
//     name: 'Mike',
//     age: 23,
//     'location/city': 'New York'
// });


// database.ref().remove().then(()=>{}).catch((e)=>{
//     console.log('failed');
// });



