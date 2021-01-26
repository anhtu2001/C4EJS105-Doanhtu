//bai 1
// a = document.getElementById('a');
// b = document.getElementById('b');
// c = document.getElementById('c');
// let count = 0;
// b.addEventListener('click', () => {
//     count++;
//     d.innerHTML = count;
// })
// a.addEventListener('click', () => {
//     count--;
//     d.innerHTML = count;
// })

//bai 2
// a = document.getElementById('a');
// b = document.getElementById('b');
// nhapvao = document.getElementById('nhapvao');
// zero = document.getElementById('zero');
// let time = 0;
// a.addEventListener('click', () => {
//     if(nhapvao.value == '' || nhapvao.value <= 0) {
//         alert('vui long nhap so lai');
//     } else {
//         a.disabled = true;
//         b.disabled = false;
//         time = nhapvao.value;
//         zero.innerHTML = time
//         let dunglai = setInterval(() =>{
//             time--;
//             zero.innerHTML = time;
//             if(time == 0) {
//                 clearInterval(dunglai);
//                 zero.innerHTML = 'Time up';
//                 a.disabled = false;
//                 b.disabled = true;
//             };
//         }, 1000);
//         b.addEventListener('click', () => {
//         a.disabled = false;
//         b.disabled = true;
//         clearInterval(dunglai);
//         zero.innerHTML = 'Stop!!!';
//     });
// }
// });

//bai 3
// const quote = document.getElementById('quote');
// const author = document.getElementById('author');
// const reload = document.getElementById('reload');

// function show_quote() {
//     random_quote = data[Math.floor(Math.random() * data.length)];
//     quote.innerHTML = random_quote.quoteText;
//     author.innerHTML = random_quote.quoteAuthor;
// };

// show_quote();
// reload.addEventListener('click', show_quote)

//bai 4
Newproject = document.getElementById('new_project');
Newtask = document.getElementById('new_task');
Newtime = document.getElementById('new_time');
add = document.getElementById('add_btn');
clear = document.getElementById('clear_btn');
body = document.getElementById('body');
let timeSheetData = [{
    project: 'Learn front-end',
    task: 'Learn HTML',
    time_spent: '6'
}, {
    project: 'Learn front-end',
    task: 'Learn CSS',
    time_spent: '8'
}, {
    project: 'Learn front-end',
    task: 'Learn JS Variables and Data types',
    time_spent: '6'
}, {
    project: 'Learn git',
    task: 'Learn git basics',
    time_spent: '2'
}];
let update1 = 0;
let update2;
console.log(body);
function update3() {
    body.innerHTML = '';

for(let b of timeSheetData) {
    body.insertAdjacentHTML('beforeend', `<tr><td>${b.project}</td><td>${b.task}</td><td>${b.time_spent}</td><td><button class = "delete">X</button><button class = "update">U</button></td><tr>`);
};
remove1 = document.getElementsByClassName('delete');
update4 = document.getElementsByClassName('update');
for(let i = 0; i < remove1.length; i++) {
    remove1[i].addEventListener('click', () => {
        timeSheetData.splice(i, 1);
        update3();
    })
}
    for(let i = 0; i < update4.length; i++) {
        update4[i].addEventListener('click', () => {
             update1 = i;
             update2 = false;
            Newproject.value = timeSheetData[i].project;
            Newtask.value = timeSheetData[i].task;
            Newtime.value = timeSheetData[i].time_spent;

        });
    };
}


update3();
console.log(update2);
add.addEventListener('click', () => {
    if(Newproject.value == '' || Newtime.value == '' || Newtask.value == '') {
        alert('vui long nhap day du');
   
   } else if (update2 == false){
       timeSheetData[update1] = {project: Newproject.value, task: Newtask.value, time_spent: Newtime.value};
       console.log(timeSheetData);
       update3();
       Newproject.value = '';
       Newtask.value = '';
       Newtime.value = '';
   } else {
    timeSheetData.push({project: Newproject.value, task: Newtask.value, time_spent: Newtime.value});
    console.log(timeSheetData);
    update3();
    Newproject.value = '';
    Newtask.value = '';
    Newtime.value = '';
   };
}
       );
       clear.addEventListener('click', () => {
           Newtime.value = '';
           Newproject.value = '';
           Newtask.value = '';
       })
    
//bai 5

let startButton = document.getElementById('start_button');
let playContent = document.getElementsByClassName('play_content');

startButton.addEventListener('click', () => {
    document.getElementById('start_content').style.display = 'none';
    document.getElementById('play_content').style.display = 'block';
    document.getElementById('game_setting').style.display = 'block';
    progressBarCountDown(quizzTimeLimit, 100);
    firstQuizz();
});
let firstNumber = document.getElementById('first_number').innerHTML;
let secondNumber = document.getElementById('second_number').innerHTML;
let randomSum = document.getElementById('random_sum').innerHTML;
let quizzTimeLimit = 2500; // 3000 ms = 2.5 s
let id;
// setting box 
// check easybox first

document.getElementById('easy_box').disabled = true;
scorebox = () => {
    if (document.querySelector('#score_box:checked') !== null) {
        document.getElementById('score').style.visibility = 'hidden';
    } else {
        document.getElementById('score').style.visibility = 'visible';
    }
}
timerbox = () => {
    if (document.querySelector('#timer_box:checked') !== null) {
        document.getElementById('full_progress_bar').style.visibility = 'hidden';
    } else {
        document.getElementById('full_progress_bar').style.visibility = 'visible';
    }
}
let preQuizzTimeLimit = quizzTimeLimit;
easybox = () => {
    document.getElementById('hard_box').disabled = false;
    document.getElementById('easy_box').disabled = true;
    document.getElementById('hard_box').checked = false;
    preQuizzTimeLimit = quizzTimeLimit;
    quizzTimeLimit = 2500;
}
hardbox = () => {
    document.getElementById('easy_box').disabled = false;
    document.getElementById('hard_box').disabled = true;
    document.getElementById('easy_box').checked = false;
    preQuizzTimeLimit = quizzTimeLimit;
    quizzTimeLimit = 1200;
}

let currentWidth;
let max_width;
progressBarCountDown = (quizzTimeLimit, width) => {
    max_width = width;
    let element = document.getElementById('progress_bar');
    id = setInterval(() => {
        if (width <= 0) {
            clearInterval(id);
            endgame();
        } else {
            width--;
            currentWidth = width;
            element.style.width = width + '%';
        }
    }, quizzTimeLimit / max_width);
}
let isPause = false;
pauseProgress = () => {
    clearInterval(id);
}

// get pause button
let pauseBtn = document.getElementById('pause_btn');
pauseBtn.addEventListener('click', () => {
    if (pauseBtn.firstChild.className == 'far fa-pause-circle') {
        isPause = true;
        pauseProgress();
        document.getElementById('pause_btn').innerHTML = '<i class="far fa-play-circle"></i>';
    } else {
        isPause = false;
        let quizzTimeLeft = currentWidth * preQuizzTimeLimit / max_width;
        progressBarCountDown(quizzTimeLeft, currentWidth);
        document.getElementById('pause_btn').innerHTML = '<i class="far fa-pause-circle"></i>';
    }
});

let playerAns = 'none';
let trueAnswer;
increaseScore = () => {
    let currentScore = Number(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++currentScore;
}
let falseAudio = new Audio('fail_sound.mp3');
let trueAudio = new Audio('true_sound2.mp3');
firstQuizz = () => {
    let num1 = 1 + Math.floor(Math.random() * 9);
    let num2 = 1 + Math.floor(Math.random() * 9);
    let random_sum = 1 + Math.floor(Math.random() * 18);
    let true_sum = num1 + num2;
    let r_val = [random_sum, true_sum];
    let random_res = r_val[Math.floor(Math.random() * 2)];
    document.getElementById('first_number').innerHTML = num1;
    document.getElementById('second_number').innerHTML = num2;
    document.getElementById('random_sum').innerHTML = random_res;

    if (random_res == true_sum) {
        trueAnswer = true;
    } else trueAnswer = false;
}
endgame = () => {
    document.getElementById('play_content').style.display = 'none';
    document.getElementById('endgame').style.display = 'block';
    document.getElementById('high_score').innerHTML = document.getElementById('score').innerHTML;
}



document.getElementById('wrong').addEventListener('click', () => {
    if (isPause == false) {
        playerAns = false;
        if (trueAnswer == playerAns) {
            trueAudio.play();
            increaseScore();
            clearInterval(id);
            progressBarCountDown(quizzTimeLimit, 100);
            firstQuizz();
        } else {
            falseAudio.play();
            endgame();
        }
    }
});
document.getElementById('right').addEventListener('click', () => {
    if (isPause == false) {
        playerAns = true;
        if (trueAnswer == playerAns) {
            trueAudio.play();
            increaseScore();
            clearInterval(id);
            progressBarCountDown(quizzTimeLimit, 100);
            firstQuizz();
        } else {
            falseAudio.play();
            endgame();
        }
    }

});