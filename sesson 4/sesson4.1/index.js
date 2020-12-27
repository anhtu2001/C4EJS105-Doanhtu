//1
//cach 1 let a = {
    //     title: 'The dark night rises',
    //     year: 2012,
    //     rate: 8.4,
    // };
    // console.log('title: ' + a.title);
    // console.log('year: ' + a.year);
    // console.log('rate: ' + a.rate);
//cach 2
// let a = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// for(let b in a) {
//     console.log(`${a}: ${a[b]}`);
// }
//2
// b,
// let a = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     };
// console.log(a['filmer']);

// c 
// let a = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// while(true){
//     let i = prompt('What you want to know?');
// if(i == 'title' || i == 'year' || i == 'rate') {
//     alert(a[i]);
//     break;
// } else if (i == null || i == undefined) {
//     alert('Tam biet');
//     break;
    
//  } else {
//      alert(`'${i}' does not exist our data`);
//      break;
// }
// }

// 3
// a,
// let a = {
//          title: 'The dark night rises',
//          year: 2012,
//          rate: 8.4,
// }
// a['rate'] = 8.7;
// console.log(a['rate']);

// a['rate'] =a['rate'] + 0.5;
// console.log(a['rate']);

// b,
// let a = {
//               title: 'The dark night rises',
//               year: 2012,
//               rate: 8.4,
//      };
//      let i = prompt('What you want to update?');
//      let film = prompt('What is the update?');
//      a[i] = film;
//      console.log('Done.New data:');
//      console.log(a);

// 4
// console.log('Done.');
// let a = {
//                    title: 'The dark night rises',
//                    year: 2012,
//                    rate: 8.4,
//           };
          
//              let i = prompt('What you want to know?');
//           if(i == 'title' || i == 'year' || i == 'rate') {
//                 alert(a[i]);
        
//         } else {
//                  alert(`'${i}' does not exist our data`);
//                  b = prompt ('enter the new data');
//                  a[i] = b;
//                  console.log(a) ;
//             } 
        
        


// 5
// let a = [
//     {
//         title: 'batman',
//         year: 2010,
//         rate: 8.0,
//     },
//     {
//         title: 'spider',
//         year: 2011,
//         rate: 7.0,
//     },
//     {
//         title: 'onpice',
//         year: 2012,
//         rate: 6.0,
//     },
// ];
// // a
// console.log(a);
// //b
// console.log(a[0]);
// //c
// console.log(a[a.length - 1].title);
// //d
//cach 1
// for (let item of a) {
//     console.log('--------------------');
//     for(let s in item) {
//         console.log(`${s}: ${item[s]}`);
//     }

// }
//cach 2
// for (let i = 0; i < a.lenght; i++) {
//     console.log('-----------------------');
//     console.log(`Year: ${a[i].year}`);
//     console.log(`Rate: ${a[i].rate}`);
// }
// //e
// for (let item of a) {
//     item.rate = (item.rate + 0.7).toFixed(2); 
//     console.log(item.rate);
// }
//  6
// let movie = {
//     name:'Attack on titan',
//     year:'2013',
//     rate:'8.8',
//     casts:['Eren','Armin','Mikasa'],
// };
// console.log(movie.name);
// console.log(`Year: ${movie['year']}`);
// console.log(`Rate: ${movie['rate']}`);
// let input = movie.casts.join(' ');
// console.log(`Casts:${input}`);

// let input1 = movie.casts.push('Levi');
// console.log(movie.name);
// console.log(`Year: ${movie['year']}`);
// console.log(`Rate: ${movie['rate']}`);
// let input2 = movie.casts.join(' ');
// console.log(`Casts:${input2}`);

// 7
//a
// let film1 = {
//     title: 'batman',
//          year: 2010,
//          rate: 8.0,
//          cast: 'A',
// };
// let film2 = {
    
//          title: 'spider',
//          year: 2011,
//          rate: 7.0,
//          cast: 'B',
// };
// let film3 = {
//     title: 'onpice',
//          year: 2012,
//          rate: 6.0,
//          cast: 'C',
// };
// let film = [];
// film.push(film1)
// film.push(film2);
// film.push(film3);
// console.log(film)
// //b
// for (let i = o; i < film.length; i++) {
//     console.log(movie[i].title);
//     console.log('Year: ' + movie[i].year);
//     console.log('Rate: ' + movie[i].rate);
//     console.log('Cast: ' + movie[i].cast);
// }
    

