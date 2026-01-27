function playmusic(){
    const music = document.getElementById("bgMusic");
    music.play();
}

// Countdown startsA

setInterval(() => {
    const now = new Date();

    document.getElementById("dateTime").innerHTML=now.toDateString()+" | " + now.toLocaleTimeString();
},1000);

let timeleft = 5;

const timer = setInterval(() => {
    document.getElementById("countdown").innerHTML=timeleft ;
    if(timeleft <= 3){
        countdown.style.color = "red";
    }else{
        countdown.style.color = "black";
    }
    
    document.getElementById("countdown").style.fontSize="70px";
    timeleft--;
    if (timeleft < 0) {
        clearInterval(timer);
        window.location.href = "HBD2.html"
    }
}, 1000);

// coundown ends

// pops starts

const wrapper = document.querySelector('.confetti-wrapper');

const colors = ['#ff2e63' , '#ffd700', '#00eaff', '#9b5cff' , '#00ff9d' ];

function startpops(){
for(let i = 0; i < 120; i++){
     const confetti = document.createElement('div');
     confetti.className = 'confetti';

     confetti.style.left = Math.random() * 100 + 'vw';
     confetti.style.top='-20px';
     confetti.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];

     confetti.style.animationDelay = Math.random() * 0.4 +'s';
     confetti.style.transform = 'rotate(${Math.random() * 360}deg)';

     wrapper.appendChild(confetti);

     setTimeout(() => confetti.remove(),3000);
    }
}

setTimeout(startpops, 3000);

// pops ends

// blaster starts

const blastColors  = ['#ff2e63' , '#ffd700', '#00eaff', '#9b5cff' , '#00ff9d' ];

function fireBlaster(side){
    const holder = document.querySelector( side === 'left' ? '.blast-left' : '.blast-right');

    for(let i = 0; i < 90; i++){
        const piece = document.createElement('div');
        piece.className = 'blast-piece';
        piece.style.backgroundColor=blastColors[Math.floor(Math.random() * blastColors.length)];

     piece.style.left = Math.random() * 100 +'%';
     piece.style.bottom ='0px';

     const xMove = side === 'left' ? Math.random() * 450 : -Math.random() * 450;

     const yMove = -Math.random() * 500 - 250;
     piece.style.setProperty('--bx', xMove +'px');
     piece.style.setProperty('--by', yMove +'px');

     holder.appendChild(piece);
      
    setInterval(() => piece.remove(),2600); 
    }
}

setTimeout(() => {
    fireBlaster('left');
    fireBlaster('right');
},3000);
