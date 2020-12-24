// 1
//  let movie = ['The Avenger', 'Kingkong', 'mutants']; 
//     console.log(movie);
// 4
// let a = ['The Avenger', 'Kingkong', 'mutants'];
//  console.log(a);
//  i = prompt(' Nhập tên phim :');
// a.push(i);
// console.log(a);
// 5
// let a = ['The Avenger', 'Kingkong', 'mutants'];
//  console.log(a);
// let b = prompt('tên phim la');
// console.log(a[b]);
// 6
// let a = prompt('nhap ten phim');
// let film =[a];
// console.log(film);
// let i = prompt('nhập tên');
// film.push(i);
// console.log(film);
// 7
// let a = ['The Avenger', 'Kingkong', 'mutants'];
//  console.log(a);
// let n = prompt('Nhập n');
// let i = prompt('Nhập i');
// a.splice(i, n);
// console.log(a);
// 10
//    let a = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
//     for (let i = 0; i < a.length; i++) {
//     console.log(`${i + 1}. ${a[i]}`);
// }
// console.log(' ');
//   }
// 11
// let a = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     //  (a[i] = a[i].toUpperCase(); chuyen thanh chu in hoa)
//     a[i] = a[i].toLowerCase();

// }
// console.log(`${i + 1}. ${a[i]}`);

// usename = prompt('nhap ten cua ban');
// let b = usename.length;       // (cong thuc dem ki tu)
//       if (b <= 15) {
//      alert('ten hop le');
//  } else {
//      alert('ten qua dai');
//  }

// 14
while(true) {
    let answer = prompt('nhen co bao nhieu chan? \n 1. khong co \n 2. 4 chan \n 3. 8 chan \n 4. 12 chan');
    if  ( answer == 1 || answer == 2 || answer == 3 || answer == 4 )  {
        if  ( answer  ==  3 )  {
            alert ( 'Xin chúc mừng! Bạn đã đúng' ) ;
        }  else  {
            alert ( 'Chúc bạn may mắn lần sau' ) ;
        }
        break ;
    }  else  {
        alert ( 'Câu trả lời không hợp lệ, vui lòng nhập 1, 2, 3 hoặc 4' ) ;
    }
}


// bt them
// {
//     let seqNumbers = prompt('Enter sequence of Number, separated by space');
//     let tempArr = seqNumbers.split(' ');
//     let arr = tempArr.map(x => Number(x));
//     // simple bubble sort algorithm
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = 0; j < arr.length - 1 - i; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     // arr.sort((a,b) => a - b); quicksort algorithm in library
//     alert(arr);
//     // filter the array into 2 smaller arrays contain odd or even numbers.
//     let oddArr = arr.filter(x => Number(x) % 2 != 0);
//     let evenArr = arr.filter(x => Number(x) % 2 == 0);
//     // remove duplicate numbers in 2 arrays
//     let length = oddArr.length;
//     for(let i = 1; i < length; ) {
//         if(oddArr[i] == oddArr[i - 1]) {
//             oddArr.splice(i,1);
//             length--;
//         }
//         else {
//             i++;
//         }
//     }
//     // remove duplicate numbers in 2 arrays using temporary array
//     let tempEvenArr = [];
//     tempEvenArr.push(evenArr[0]);
//     for(let i = 1; i < evenArr.length; i++) {
//         if(evenArr[i] != evenArr[i - 1]) {
//             tempEvenArr.push(evenArr[i]);
//         }
//     }
//     alert(oddArr);
//     alert(tempEvenArr);
// }





