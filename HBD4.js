function playmusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}

function lastpage() {
    window.location.href = "HBD2.html"
}

// letter starts

const text = `❤️ Love You Always ❤️

Nee sirikkum pothu
En world azhagaaguthu 😌`;

let i = 0;
let speed = 90; 

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typeText").innerHTML +=
            text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function openLetter(el) {
    el.classList.toggle("open");

    // first time only typing start
    if (el.classList.contains("open") && i === 0) {
        typeWriter();
    }
}

// letter ends

// button start
// const btn = document.getElementById("myBtn");
// btn.style.transition = "all 0.5s ease";
// btn.onmouseover = () => {
//     btn.style.backgroundColor = "red";
// };

// btn.onmouseout = () => {
//     btn.style.backgroundColor = "aqua";
// };

// btn.style.position = "fixed";
// btn.style.bottom="50px";
// btn.style.left="50px";
// btn.style.width="100px";
// btn.style.height="30px";
// btn.style.borderEndStartRadius="15px";
// btn.style.borderTopLeftRadius="15px";
// btn.style.borderTopRightRadius="15px";
// btn.style.borderEndEndRadius="15px";

// button ends


// pp,ki,mu

const lines = [
    { id: "KI", text: "Happy Birthday 🎉 un day full-aa happiness Nalla health" },
    { id: "MU", text: "Aprm neraya smiles irukanum nu manasara wish panren😊 " },
    { id: "PP", text: "Un life-la neraya happy moments,dreams ellam true aaganu" }

];

let lineIndex = 0;
let charIndex = 0;

function typeline() {
    if (lineIndex < lines.length) {
        const current = lines[lineIndex];
        const element = document.getElementById(current.id);

        if (charIndex < current.text.length) {
            element.innerHTML += current.text.charAt(charIndex);
            charIndex++;

            setTimeout(typeline, speed);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeline, 400)
        }
    }
}

typeline();

// KI
document.getElementById("KI").style.position = "absolute"
document.getElementById("KI").style.right = "400px"
document.getElementById("KI").style.top = "70px"
document.getElementById("KI").style.color = "#0e21ea"
document.getElementById("KI").style.fontSize = "25px"

// MU


document.getElementById("MU").style.position = "absolute"
document.getElementById("MU").style.right = "330px"
document.getElementById("MU").style.top = "105px"
document.getElementById("MU").style.color = "#0e21ea"
document.getElementById("MU").style.fontSize = "25px"

// PP


document.getElementById("PP").style.position = "absolute"
document.getElementById("PP").style.right = "310px"
document.getElementById("PP").style.top = "145px"
document.getElementById("PP").style.color = "#0e21ea"
document.getElementById("PP").style.fontSize = "25px"



// pp,ki,mu

// kris

const contenst = [
    { id: "AS", text: "Nee Romba special nu iniku mattum ila" },
    { id: "SD", text: "Eppovume nyabagam vecuko 🤍" },
    { id: "DF", text: "Have a super beautiful birthday dii" }
];

let contenstIndexx = 0;
let charIndexx = 0;

function typecontent() {
    if (contenstIndexx < contenst.length) {
        const current = contenst[contenstIndexx];
        const element = document.getElementById(current.id);

        if (charIndexx < current.text.length) {
            element.innerHTML += current.text.charAt(charIndexx);
            charIndexx++;

            setTimeout(typecontent, speed);
        } else {
            contenstIndexx++;
            charIndexx = 0;
            setTimeout(typecontent, 400)
        }
    }
}

typecontent();

document.getElementById("AS").style.position = "absolute"
document.getElementById("AS").style.left = "50px"
document.getElementById("AS").style.top = "210px"
document.getElementById("AS").style.color = "#0e21ea"
document.getElementById("AS").style.fontSize = "25px"

document.getElementById("SD").style.position = "absolute"
document.getElementById("SD").style.left = "80px"
document.getElementById("SD").style.top = "250px"
document.getElementById("SD").style.color = "#0e21ea"
document.getElementById("SD").style.fontSize = "25px"

document.getElementById("DF").style.position = "absolute"
document.getElementById("DF").style.left = "90px"
document.getElementById("DF").style.top = "300px"
document.getElementById("DF").style.color = "#0e21ea"
document.getElementById("DF").style.fontSize = "25px"

// kris ends
function goleft() {
    window.location.href = "HBD2.html";
}


document.addEventListener("DOMContentLoaded",
    function() {
        const el = document.querySelector(".KRIS");
        if (!el) {
            console.log("KRIS class not found da!");
            return;
        }

        const text = "click me";
        const speed = 300;

        el.style.position = "absolute";
        el.style.left = "130px";
        el.style.bottom = "25px";
        el.style.fontSize = "30px";
        el.style.color = "red";
        el.style.fontFamily = "'Dancing Script',cursive";
        el.style.color = "gold"

        let g = 0;

        function typeWriter() {
            if (g < text.length) {
                const char = text.charAt(g);
                el.innerHTML += (char === " ") ? "&nbsp;" : char;
                g++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

    });