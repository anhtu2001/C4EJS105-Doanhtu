//1. 
//a
// let a = Math.random();
// console.log(Math.round(a * 100) / 100);

//b
// let arr = [2,5,6,9,10];
// let x = arr[Math.round(Math.random() * arr.length)]
// console.log(x);
//c+d + e
let questions = [
    {
        question: 'nhen co may chan?',
        answer: ['1','4', '8', '12' ],
        rightchoice: 8,
        },
       

    {
        question: 'day la cai gi?',
        answer: ['but', 'ao', 'quan', 'dep'],
        rightchoice: 'ao',
           
    },
    {
        question: 'ten cua ban la gi?',
        answer: ['tu', 'thanh', 'thuong', 'nam'],
        rightchoice: 'tu',
    },
    {
        question: 'ban o nuoc nao?',
        answer: ['phap', 'my', 'vietnam', 'uc'],
        rightchoice: 'vietnam',
    },
];
n = Math.round(Math.random() * 4);
let a = questions.length;
let b ;
let check;
let point = 0;
for (let i = 0; i < a; i++) {
    while(n >= questions.length) {
        n = Math.round(Math.random() * 4);
    }
    b = questions[n];
}
// cach 1
// let c = prompt(`${b.question}\n${b.answer[0]}\n${b.answer[1]}\n${b.answer[2]}\n${b.answer[3]}`);

// if (c == null || c == undefined) {
//     check = false;
//     break;
// } else if (c == b.rightchoice) {
//         point = point + 1;   
//         questions.splice(n, 1);
//         alert('good');
//     } else {
//         questions.splice(n, 1);
//         alert('wrong');
// }
// }
// if (check == false) {
//     alert('GoodBye!');
// } else {
//     alert('we are out of question');
//     alert(`you answer ${point} out of ${a} questions`)
// }
//cach 2
// let c = prompt(`${b.question}\n${b.answer[0]}\n${b.answer[1]}\n${b.answer[2]}\n${b.answer[3]}`);
// if   (c == null || c == undefined) {
//     alert('goodbye');
//     break;
// }else if (c == b.rightchoice) {
//     point++;   
//     alert('good');
// } else {
//     alert('wrong');
// }
// questions.splice(n, 1);
// }
// alert('we are out of question');
// alert(`you answer ${point} out of ${a} questions`)

// 2.1
// a = ['to', 'be', 'that', 'of', 'elon', 'to', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// console.log(a)
// b = {};
// for(let i = 0; i < a.length; i++) {
//   let  c = a[i];
//   if(b[c]) {
//       b[c] ++;
//   } else {
//       b[c] = 1;
//   }
// }
// console.log(b);

// // 2.2
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand:'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];

// // 2.3
// cach 1
let dell = [];
let hp = [];
let asus = [];
for(let i = 0; i < inventory.length; i++) {
    if(inventory[i].brand == 'Dell') {
        dell.push(inventory[i]);
    } else if (inventory[i].brand == 'HP') {
        hp.push(inventory[i]);
    } else if (inventory[i].brand == 'Asus') {
        asus.push(inventory[i]);
    } 
}
inventoryBybrand.asus = asus;
inventoryBybrand.hp = hp;
inventoryBybrand.dell = dell;
console.log(inventoryBybrand);
cach2
let inventoryBybrand ={};
for(let i of inventory) {
   if(inventoryBybrand[i.brand]){
        inventoryBybrand[i.brand].push(i);
} else {
    inventoryBybrand[i.brand] = [];
    inventoryBybrand[i.brand].push(i);
}
} 
console.log(inventoryBybrand);


// let a = prompt('which brand');
// let b = inventoryBybrand[a.toLocaleLowerCase()];

// let c = '';
// let d = 0;

// for (let i = 0; i < b.length; i++) {
//     c = c + b[i].name + '\n';
//     d = d + b[i].price * b[i].quantity;
// };
// d = d* 1000;
// alert(`there are ${b.length} generation of '${a.toUpperCase()}' in inventory :\n\n${c} \nWith total value: ${d.toLocaleString('vi', { style: 'currency', currency: 'VND'})}`);

