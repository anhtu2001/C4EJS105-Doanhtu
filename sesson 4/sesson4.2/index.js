// 1
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
//    cach1
//   for (let x in product) {
//     console.log(x);
//     }

//     //x co gia tri : name price brand color
//     console.log('Name: ' + product.name); 
//     console.log('Price: ' + product.price);
//     console.log('Brand: ' + product.brand);
//     console.log('Color: ' + product.color);
//cach2
// for(let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`)
//     console.log(`Branf: ${products[i].brand}`)
//     console.log(`Color: ${products[i].color}`)
// }
// // 2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };
//     let {subject, dueDate, assignTo} = task;
//     console.log(`Subject: ${subject}`);
//     console.log(`DueDate: ${dueDate}`);
//     console.log(`AssignTo: ${assignTo}`);
    //3
    // a,  object
    // b,  array
    // c, 
    
    // 4
    //a
//     let keywork ={
//         debug: 'The process of figuring out why your program has a certain error and how to fix it ',
//         done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//         defect: 'The formal word for ‘error’',
//         pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//         ui_ux : 'The short version of Project Manager, the person in charge of the final  result of a project',
//     };
// alert('Hi there, thi is dev dictionary');
// let i = prompt('Enter a keywork');
// for (let a in keywork) {
//     if (i == a) {
//         alert(i + '\n' + keywork[a]);
//         break;
//     } else if(i != a ) {
//         alert(`We could not find your word: ${i}`);
//     }
// }
//b
// let keywork ={
//     debug: 'The process of figuring out why your program has a certain error and how to fix it ',
//     done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     ui_ux : 'The short version of Project Manager, the person in charge of the final  result of a project',
// };
// alert('Hi there, thi is dev dictionary');
//    while(true){
//         let i = prompt('Enter a keywork');
//         if (i === null) {
//             alert('Tam biet');
//             break;
//         }
        
//     for (let a in keywork) {
//         if (i == a) {
//             alert(i + '\n' + keywork[a]);
//             break;
//         } if(i != a ) {
//             alert(`We could not find your word: ${i}`);
//             b = prompt(`We could not find your word: ${i}, leave your explanation`);
//             alert('Done');
//             keywork[i] = b;
//             alert(i + '\n' + keywork[i])
//             break;
        
//         }
//     }
//    }

//    5
//a
let a = [
    {
    name : 'Xiaomi portable charger 20000mah',
    brand: 'xiaomi',
    price: '428',
    color: 'white',
    category: 'charger',
} ,
 {
    name : 'VSmart Active 1',
    brand: 'VSmart',
    price: '5487',
    color: 'black',
    category: 'phone',
},
{
    name : 'Iphone X',
    brand: 'Apple',
    price: '21490',
    color: 'gray',
    category: 'phone',
},
{
    name : 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: '8490',
    color: 'Blue',
    category: 'phone',
},
];

console.log(a);
   //(cach 1)
    for (let b of  a) {
        console.log('----------------------');
        console.log('Name: ' + b.name);
        console.log('Price: ' + b.price);
    }
//(cach 2) 
for (i = 0; i < a.length; i++) {
    console.log(`Name: ${a[i].name}`);
    console.log(`Price: ${a[i].price}`);
    console.log('-------------------');
}
//     //b
    // console.log(a);
    // for (let b of  a) {
    //     console.log('----------------------');
    //     console.log('Name: ' + b.name);
    //     console.log('Price: ' + b.price);
    // }
//     let b  = Number(prompt('Enter product position:'));
//     b = b - 1;
//     for (i = 0; i < a.length; i++) {
//       if (b == i) {
//           console.log('Name: ' + a[i].name);
//           console.log('Price: ' + a[i].price);
//           console.log('Brand: ' + a[i].brand);
//           console.log('Color: ' + a[i].color);
//           console.log('Category: ' + a[i].category);
//           console.log('---------------------------');
//       }
//     }
    //c
    // let c = prompt('Enter your category?');
    // for (let b of a) {
    // if (b.category.toLowerCase() == c.toLowerCase()) {
    //     console.log('---------------');
    //     console.log('Name: ' + b.name);
    //     console.log('Price: ' + b.price);

    // }
    // }
// d
// a[0].providers = ['Phukienzero', 'Dientucccc'];
// a[1].providers = ['Tgdd', 'Ddghn', 'Vhstore'];
// a[2].providers = ['Tgdd'];
// a[3].providers = ['Tgdd'];

// e
// let h =[];
// let e = prompt('Enter provider');
// for (i = 0; i < a.length; i++) {
//     for(let x  = 0; x < a[i].providers.length; x++) {
//         if (a[i].providers[x].toLowerCase() == e.toLowerCase()) {
//              h.push(a[i]);
//         }
//     }
//     }
//     for (i = 0; i < h.length; i++) {
//         console.log('---------------------');
//         console.log('Name: ' + h[i].name);
//         console.log('Brand: ' + h[i].brand);
//         console.log('Price: ' + h[i].price);
//         console.log('Color: ' + h[i].color);
//         console.log('Category: ' + h[i].category);
//         console.log('Providers: ' + h[i].providers);
//     }
    
    //6
    task = [];
    console.log('Hi there, this is your learning tasks to front-end developer carrer:');
    let html = {
        name: 'HTML',
        complete: false,
    };
    let css = {
        name: 'CSS',
        complete: false,
    };
    let nodejs = {
        name: 'Node Package Manager (npm)',
        complete: false,
    };
    let git = {
        name: 'Git',
        complete: false,
    };
    let js = {
        name: 'Basic of JavaScript',
        complete: false,
    }
task.push(html);
task.push(css);
task.push(js);
task.push(nodejs);
task.push(git);
a
console.log(task);
    // for (let b of  task) {
    //     console.log('----------------------');
    //     console.log( b.name);
    //     console.log('complete: ' + b.complete);
    // }
//b+c+d+e
a = prompt('Enter your command');
if (a == 'new') {
    let b = prompt('Enter new task');
     b = {
        name: b,
        complete: false,
    };
    task.push(b);
    for (i = 0; i < task.length; i++) {
        console.log(i + 1 + '.' + task[i].name);
        console.log('complete: ' + task[i].complete);
} 
} else if ( a == 'update') {
    let c = Number(prompt('Enter position:'));
    let d = prompt('Enter new title');
    task[c] = d;
  
        for (i = 0; i < task.length; i++) {
        console.log(i + 1 + '.' + task[i].name);
        console.log('complete: ' + task[i].complete);
        } 
     } else if (a == 'complete') {
    let e = Number(prompt('Enter position:'));
    task[e].name = true;
    for(let i = 0; i < task.length ; i++) {
        console.log(i + 1 + '.' + task[i].name);
        console.log('complete: ' + task[i].complete);
    }

} else if (a == 'delete') {
    let g = Number(prompt('Enter position:'));
    task.splice(g, 1);
    for(let i = 0; i < task.length ; i++) {
        console.log(i + 1 + '.' + task[i].name);
        console.log('complete: ' + task[i].complete);
    }
}


//g 
// for(let i = 0; i < task.length; i++) {
//     console.log(` [X] ${i+1}.${task[i].name}`);
// }
// console.log('-------------------------');
// task[3].complete = true;
// for (let i = 0; i < task.length; i++) {
//     if(task[i].complete == true) {
//         console.log(` [X] ${i+1}.${task[i].name}`);
//     } else {
//         console.log(` [ ] ${i+1}.${task[i].name}`)
//     }
// }

// 15
//a
// console.log(jobData.hits);
// //b
// console.log(jobData.hits[0]);
// //c
// console.log('First job title:');
// console.log(jobData.hits[0].jobTitle);
// //d
// console.log(jobData.hits[0].benefits);
// //e
// for(let i in jobData.hit[0].benefits) {
//     console.log(' - ' + jobData.hit[0].benefits[i].benefitValue);
// }
// //g
// for (let i in jobData.hits) {
//     console.log(jobData.hits[i].jobTitle);
//     for (let j in jobData.hits[i].benefits) {
//         console.log(' - ' +  jobData.hit[i].benefits[j].benefitValue);
//     } 
//     console.log('--------------------');
// }
//h
// for (let i in jobData.hits) {
//     console.log('Title: ' + jobData.hit[i].jobTitle);
//     console.log('Satary: ' + jobData.hit[i].jobSalary);
//     console.log('Location: \n' + ' - ' + jobData.hits[i].location);
//     console.log('Benefits :');
//     for (let j in jobData.hits[i].benefitS) 
//         console.log(' - ' +  jobData.hit[i].benefits[j].benefitValue);
//         console.log('Skills :');
//         for (let j in jobData.hits[i].skills) 
//             console.log(' - ' +  jobData.hit[i].skills[j]);
//         }
   
    // 16
    // let oldData = {
    //     firedRice: {
    //     Price: 30,
    //     vnName: 'Com rang dua bo'
    //     },
    //     noddle: {
    //     price: 20,
    //     vnName: 'My tom chanh'
    //     },
    //     pho: {
    //     price: 35,
    //     vnName: 'Pho bo tai chin'
    //     },
    //     };

    // cach 1     let newData = {};
    //     for (let item in oldData) {
    //         if (item == 'firedRice' || item == 'pho') {
    //             newData[item] = oldData[item];
    //         }
    //     }
    //     console.log(newData);
    // cach 2
    // let {
    //     pho,
    //     ...newData
    // } = oldData;
    // console.log(newData);

    //cach xoa 1 PHAN TU TRONG OBJECT :
    //  let movie ={
    //      name: 'batman',
    //      year: 2010,
    //  }
    //  delete.movie.name (xoa name trong movie);
    //  console.log(movie) 
     //hien ra movie {
        //  year: 2010,
    //  }