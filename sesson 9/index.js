//bai1
//1.1
//cach1
// let myPromise = new Promise(function (resolve, reject) {
//     resolve(setTimeout(() => { console.log("Promise ") }, 2000));
// });
// console.log(myPromise);
//cach 2
// let myPromise = new Promise(function (resolve, reject) {
//     resolve(setTimeout(() => { console.log("Promise ") }, 2000));
//     reject(setTimeout(() => {console.log("Promise 1")},2000));
// });
// console.log(myPromise);
//1.2
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Promise 3"), 1000)
//     });

//     let result = await promise;

//     console.log(result);
// }

// f();
//1.3
// let myPromise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error("Promise 4")), 1000);
// });

// myPromise3.then(
//     result => console.log(result),
//     error => console.log(error)
// );

//bai2
//cach 1
// const fetchProm = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// fetchProm.then(connect => {
//     console.log('connected');
//     console.log(connect);
//     const data = connect.json();
//     console.log(data);
// });
//cach 2
// async function load() {
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = await conn.json();
//     return data;
// }
// let x = load();
// console.log(x);

//bai3
 // Get all data
    // axios.get('https://sheetdb.io/api/v1/0bw1giza56c1j')
    // .then( response => {
    //     console.log(response.data);
    // });

    // Get 10 results starting from 20
    // axios.get('https://sheetdb.io/api/v1/58f61be4dda40?limit=2&offset=2')
    // .then( response => {
    //     console.log(response.data);
    // });

    // // Get all data sorted by name in ascending order
    // axios.get('https://sheetdb.io/api/v1/0bw1giza56c1j?sort_by=Brand&sort_order=asc')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/0bw1giza56c1j/keys')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/0bw1giza56c1j/name')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/0bw1giza56c1j/sheets')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/58f61be4dda40/count')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/58f61be4dda40/search?name=Steve&age=22&casesensitive=true')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.get('https://sheetdb.io/api/v1/58f61be4dda40/search_or?name=Steve&age=19&casesensitive=true')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.post('https://sheetdb.io/api/v1/0bw1giza56c1j',{
    //     "data": {"Name": "Keyboad", "Brand": "Vietnam"}
    // }).then( response => {
    //     console.log(response.data);
    // });

    // axios.delete('https://sheetdb.io/api/v1/0bw1giza56c1j/Name/Keyboad')
    // .then( response => {
    //     console.log(response.data);
    // });

    // axios.patch('https://sheetdb.io/api/v1/0bw1giza56c1j/Name/Keyboad',{
    //     "data": {"Name": "Mouse", "Brand": "Hanoi"}
    // }).then( response => {
    //     console.log(response.data);
    // });

  //bai4
//   function random10() {
//     return Math.floor(Math.random() * 15);
// };
// const x = random10();
// console.log(x);
// if (x < 0) {
//     console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
//     console.log('Failed: the number is bigger than 10');
// } else {
//     console.log('Passed, bravo');
// };

 //bai5
//  function getRandom5(a, b) {
//   var c = Math.random() * (b - a) + a;
//   return c;
// }
// const x = getRandom5(4, 16);
// if (x < 4) {
//   console.log(`Failed, x is smaller than ${3}`);
// } else if (x > 16) {
//   console.log(`Failed, x is bigger than ${19}`);
// } else {
//   console.log('Passed!');
// }

 //bai6
//  function tinhtong(x1,y1,x2,y2) {
//    let a = Math.sqrt((x1 + x2) * (x1 - x2) + (y1 + y2) * (y1 - y2));
//    return a;
//  };
//  let x = tinhtong(3, 10, 0, 6);
//  console.log(x);
//  if (x !== 5) {
//   console.log('Failed: the calculation is wrong');
// } else {
//   console.log('Passed, bravo');
// };
//bai7
// async function load() {
//   const conn = await fetch('https://tobitheme.net/api/qod.json');
//   const a = await conn.json();
//   show(a);
// }
// load();

// function show(a){
//   let quote = a.contents.quotes[0].quote;
//   let author = a.contents.quotes[0].author
//   console.log(quote);
//   console.log(author);
//   const main = document.getElementById('main');
//   main.insertAdjacentHTML('beforeend',`
//       <p><b>${quote}</b></p>
//       <p>${author}</p>
//   `);

// }
