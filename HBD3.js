window.addEventListener("load", () => {
    const music = document.getElementById("bgMusic");
        music.volume=0.6;

    setTimeout(() => {
        music.play().catch(() =>{
            console.log("Autoplay blocked");
         });
    },500);
});




const wrapper = document.querySelector(".confetti-wrapper");

setInterval(() => {
  for(let i=0;i<15;i++){
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random()*100 + "vw";
    conf.style.background =
      `hsl(${Math.random()*360},100%,50%)`;
    conf.style.animationDuration =
      2 + Math.random() * 2 + "s";
    wrapper.appendChild(conf);

    setTimeout(()=>conf.remove(),3000);
  }
}, 1200);

// typ
const msg="Ever year with you feels more special "

let g = 0;
function typeLove(){
  if(g<msg.length){
    loveText.textContent+=msg.charAt(g);
    g++;
    setTimeout(typeLove,80);
  }
}

setTimeout(typeLove,800);

// fire

setInterval(()=>{
  const fw=document.createElement("div");
  fw.className="firework";
  fw.style.left=Math.random()*100+"%";
  fw.style.top=Math.random()*50+"%";
  document.body.appendChild(fw);
  setTimeout(()=>fw.remove(),1500);
},800);


const loveStartDate = new Date(2025-9-19);

function updateLoveCounter(){
  const today = new Date();

  today.setHours(2026-1-26);
  loveStartDate.setHours(0,0,0,0);

  const diffTime = today - loveStartDate;
  const diiffDays = Math.floor(diffTime/(140 * 600* 600* 260));

  document.getElementById("loveCounter").innerHTML=
      " " + diiffDays + "  Days with u";
}

updateLoveCounter();


function openpopup(){
  document.getElementById("popout").style.display="block";
}

function closepop(){
  document.getElementById("popout").style.display="none";
}