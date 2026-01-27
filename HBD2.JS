function firstpage(){
    window.location.href="HBD3.html"
}

// blow

setTimeout(() => {
    document.querySelector('.flame').classList.add('blow');
},5000);

// GOKI

document.addEventListener("DOMContentLoaded", 
    function(){
        const el = document.querySelector(".GOKI");
        if(!el){
            console.log("GOKI class not found da!");
            return;
        }

    const text = "click any heart pic to see the magic";
    const speed = 250;

el.style.position="absolute";
el.style.right="515px";
el.style.bottom="40px";
el.style.fontSize="40px";
el.style.color="red";
el.style.fontFamily="pacifico";

let g = 0;

function typeWriter(){
    if(g < text.length) {
        const char= text.charAt(g);
        el.innerHTML += (char === " ") ? "&nbsp;" : char;
        g++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
    
});

// KRIS

document.addEventListener("DOMContentLoaded", 
    function(){
        const el = document.querySelector(".KRIS");
        if(!el){
            console.log("KRIS class not found da!");
            return;
        }

    const text = "Porukiii";
    const speed = 300;

el.style.position="absolute";
el.style.right="300px";
el.style.bottom="285px";
el.style.fontSize="30px";
el.style.color="red";
el.style.fontFamily="'Dancing Script',cursive";
el.style.color="brown"

let g = 0;

function typeWriter(){
    if(g < text.length) {
        const char= text.charAt(g);
        el.innerHTML += (char === " ") ? "&nbsp;" : char;
        g++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
    
});



// VANI

document.addEventListener("DOMContentLoaded", 
    function(){
        const el = document.querySelector(".VANI");
        if(!el){
            console.log("class not found da!");
            return;
        }

    const text = "Porukiii";
    const speed = 300;

el.style.position="absolute";
el.style.left="320px";
el.style.bottom="285px";
el.style.fontSize="30px";
el.style.color="red";
el.style.fontFamily="'Dancing Script',cursive";
el.style.color="brown"

let g = 0;

function typeWriter(){
    if(g < text.length) {
        const char= text.charAt(g);
        el.innerHTML += (char === " ") ? "&nbsp;" : char;
        g++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
    
});

function goleft(){
    window.location.href="HBD4.html";
}

function goright(){
    window.location.href="HBD3.html";
}

function bottomLeft(){
  window.location.href = "HBD3.html";
}

function bottomRight(){
  window.location.href = "HBD4.html";
}
