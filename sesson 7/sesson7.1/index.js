//1
// 1-d
// 2-a 
// 3-c 
// 4-b
//2
// setInterval(() => {
//     console.log('Hewhaw')
// }, 1000)
// d = document.getElementById("a");
//3
// 3.1 không tồn tại
// 3.2 không tồn tại
//4
// let d = document.getElementsByTagName("li");
// console.log(d[1]);
// for(i = 0; i < 3; i++){
//     console.log(d[i].textContent);
//     //console.log(d[i].inHTML)
// }
//5
// let e = document.getElementsByTagName('div');
// console.log(e[1])
// for(let i = 0; i < e.length;i++ ){
// console.log(e[i])
// };
// let y = document.getElementsByClassName('singer');
// for (let i = 0; i < 4; i++) {
//     console.log(y[i].innerHTML);
//     //console.log(y[i].textContent);
// }
//6
// let d = document.getElementsByClassName('singer');
// for(let i = 0; i < 4; i++) {
//     console.log(d[i]);
// }

// document.getElementsByClassName('singer')[1].remove();
// for (let i = 0; i < 4; i++) {
//   console.log(d[i]);
// }

//7
//7.1
// let btn1 = document.getElementById("button1");
// let btn2 = document.getElementById("button2");
// btn1.addEventListener("click", (e) => {
//     console.log(e.target);
// });
// btn2.addEventListener("click", (e) => {
//     console.log(e.target);
// });
// //7.2

// document.getElementById('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
// });
//8
// setTimeout(()=>{

//     function a(){
//         alert('my name is Tu\nI want a successful career this year');
//     };
//     a();
    
// },1000);
//9

// setTimeout(()=>{

//     function a(c,b){
//         alert('Name: ' + c + '\nMy goal: ' + b);
//     };
//     a('Tu','I want a successful career this year');
// },1000)

//10
// setTimeout(()=>{

//     function a(c,b){
//         if(b == null){
//             alert('Name: ' + c)
//         } else {
//             alert('Name: ' + c + '\nMy goal: ' + b)
//         }
//     }
//     a('Tu')
//     a('Tu','I want a successful career this year')
    
// },1000)
//11
// 11.1 +11.2
// let upperBtn = document.getElementById("a");
// console.log(upperBtn)
// // 11.3
// a.addEventListener('click', () => {
//     console.log('Uper it !!! Just clicked')
// })
// //11.4
// let b = document.getElementById("userName");
// console.log(b);
// 11.5
// a.addEventListener("click", () => {
//     let c = document.getElementById('userName').value;
//     console.log('Upper it !!! Just clicked');
//     console.log("User's name : " + c);
// });
//11.6
// a.addEventListener("click", () => {
//         let c = document.getElementById('userName').value;
//         console.log('Upper it !!! Just clicked');
//         console.log("User's name : " + c);
//         console.log("User name uppercase: " + c.toUpperCase())
//     });
// //11.7
// let b = document.getElementById("result");
// console.log(b);
//11.8
// a.addEventListener("click", () => {
//     let c = document.getElementById('userName').value;
//     console.log('Upper it !!! Just clicked');
//     console.log("User's name : " + c);
//     console.log("User name uppercase: " + c.toUpperCase())
//     document.getElementById("result").innerHTML = c.toUpperCase();    
// })

//12
// //12.1
a = [];
let item = document.getElementsByTagName('td');
for(let i = 0; i < item.length; i++) {
    a.push(item[i].innerHTML);
}
console.log(a)
// //12.2 +12.3
// item_list=document.getElementById('item_list')
// console.log(item_list)
// // 12.4
// for (let i = 0; i < a.length; i++) {
//     item_list.insertAdjacentHTML('afterbegin', `<li>${a[i]}</li>`);
//   }
//   // console.log(item_list)
//   document.getElementById('a').remove()
//   console.log(item_list)
//   let b = document.getElementById('b')
//   for (let i = 0; i < a.length; i++) {
//     b.insertAdjacentHTML('afterbegin', `<li>${a[i]}</li>`);
//   }
//   console.log(b);
  
  
//   let newitem = document.getElementById('Newitem');
//   let add = document.getElementById('add');
//   console.log(newitem);
//   console.log(add);
  //12.7
  // a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
//  add.addEventListener('click', () => {
//         console.log('Add button clicked')})
//   //12.8
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
//   add.addEventListener('click', () => {
//     let h = document.getElementById('Newitem')
//     console.log('Add button clicked')
//     console.log('h')
// })
   //12.9
  //  a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// Newitem=document.getElementById('Newitem')
//    add.addEventListener('click',() => {
//     console.log('Add button clicked')
// let newValue= Newitem.value
// console.log(newValue)   
// if(newValue != ''){
//           a.push(newValue);
//         }
//         console.log(a)
//       });
// 12.10
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// Newitem=document.getElementById('Newitem')
// let itemlist = document.getElementById('itemlist')
// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//     a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }

//   console.log(a);
// });
//12.11
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// itemlist= document.getElementById('itemlist');
// Newitem=document.getElementById('Newitem')
// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//     a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }
//   Newitem.value=''
//   console.log(a);
// });
// //12.12
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// let addButton = ` <button class="remove_btns">Remove</button>`
// for (let i = 0; i < a.length; i++) {
//   itemlist.insertAdjacentHTML('afterbegin', `<li>${a[i]}${addButton}</li>`);
// }
// console.log(itemlist);
// console.log(Newitem);
// console.log(add);      

// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//   a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }

//  Newitem.value = '';

//   console.log(a)
// })
//12.13
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// let addButton = ` <button class="remove_btns">Remove</button>`
// for (let i = 0; i < a.length; i++) {
//   itemlist.insertAdjacentHTML('afterbegin', `<li>${a[i]}${addButton}</li>`);
// }
// console.log(itemlist);
// console.log(Newitem);
// console.log(add);      

// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//   a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }

//  Newitem.value = '';

//   console.log(a)
// })
// let removeButtons = document.getElementsByClassName('remove_btns');
// for(let removeButton of removeButtons){
//   removeButton.addEventListener('click',()=>{
//     console.log('Remove');
//   });
// }
//12.14
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// let addButton = ` <button class="remove_btns">Remove</button>`
// for (let i = 0; i < a.length; i++) {
//   itemlist.insertAdjacentHTML('afterbegin', `<li>${a[i]}${addButton}</li>`);
// }
// console.log(itemlist);
// console.log(Newitem);
// console.log(add);      

// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//   a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }

//  Newitem.value = '';

//   console.log(a)
// })
// let removeButtons = document.getElementsByClassName('remove_btns');
//       for(let i = 0; i < removeButtons.length; i++){
//         removeButtons[i].addEventListener('click',()=>{
//           console.log('Remove');
//           console.log('Item:' + i)
//         });
//       }
//12.15  bài này em tham khảokhảo
// a = [];
// let item = document.getElementsByTagName('td');
// for(let i = 0; i < item.length; i++) {
//     a.push(item[i].innerHTML);
// }
// console.log(a)
// let addButton = ` <button class="remove_btns">Remove</button>`
// for (let i = 0; i < a.length; i++) {
//   itemlist.insertAdjacentHTML('afterbegin', `<li>${a[i]}${addButton}</li>`);
// }
// console.log(itemlist);
// console.log(Newitem);
// console.log(add);      

// add.addEventListener('click',() => {
//   console.log('Add button clicked');
  
//   let newValue = Newitem.value;
//   console.log(newValue);

//   if(newValue != ''){
//   a.push(newValue);
//     itemlist.insertAdjacentHTML('beforeend', `<li>${newValue}</li>`);
//   }

//  Newitem.value = '';

//   console.log(a)
// })
// let removeButtons = document.getElementsByClassName('remove_btns');
// for(let i = 0; i < removeButtons.length; i++){
//   removeButtons[i].addEventListener('click',()=>{
//     console.log('Remove');
//     console.log('Item:' + i);
//    a.splice(i - 1,1);
//     console.log(a);
//   });
// }

//12.16
let items = ['Backpack', 'MiBand watch', 'Ring'];

    console.log(items);

    const list = document.getElementById('itemlist');

   
    function update_list() {
      list.innerHTML = '';
      for (let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li><span>${items[i]} </span><button class="remove_btns">Remove</button></li>`);
      };

     
      const remove_btns = document.getElementsByClassName('remove_btns');
      for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
          items.splice(i, 1);
          console.log(items);
          update_list();
        });
      };
    }

    update_list();
   
    const add = document.getElementById('add');
    const Newitem = document.getElementById('Newitem');

    add.addEventListener('click', () => {
      let new_item = Newitem.value;

      if (new_item == '') {
        alert('no item');
      } else {
        items.push(new_item);
        update_list();
        Newitem.value = '';
        console.log(items);
      };
    });
