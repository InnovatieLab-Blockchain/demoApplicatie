function check() {

    var vraag1 = document.quiz.vraag1.value;




    if (vraag1 == "a") {
    var correct = 1;
    }
    if (vraag1 == "b") {
    var correct = 2;
    }
    if (vraag1 == "c") {
    var correct = 3;
    }
    if (vraag1 == "d") {
    var correct = 4;
    }


    var berichten = ["GYMNASIUM", "VWO", "HAVO", "VMBO"];


    // var pictures = ["img/GYMNASIUM.png", "img/VWO.png", "img/HAVO.png", "img/VMBO.png"];
    var badges = ["img/GYMNASIUM.png", "img/VWO.png", "img/HAVO.png", "img/VMBO.png"];
    var status = ["GYMNASIUM", "VWO", "HAVO", "VMBO"];
    var sc = [ "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 0 + "," + 0 + ")\">Claim je diploma</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 1 + "," + 1 + ")\">Claim je diploma</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 2 + "," + 2 + ")\">Claim je diploma</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 3 + "," + 3 + ")\">Claim je diploma</a>",
    ]
    // var sc = [ "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 0 + "," + 1 + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>"
    //    ];
    console.log("Sc: ", sc)
    var knop = [ sc[0], sc[1], sc[2], sc[3] ]
    var reject = ["<a class=\"btn btn--primary\" onclick=\"redirect\" style=\"background-color:Tomato;\">Weiger je diploma</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je diploma</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je diploma</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je diploma</a>"];

    var range;
    if (correct==4) {
        range = 3;
        updateLoserCounter();
    }
    if (correct==3) {
        range = 2;
        updateMatigCounter();
    }
    if (correct==2) {
        range = 1;
        updateGemiddeldCounter();
    }
    if (correct==1) {
        range = 0;
        updateHeldCounter();
    }




    document.getElementById("after_login").style.display = "inline";
    document.getElementById("after_submit").style.display = "inline";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("bericht").innerHTML = berichten[range];
    document.getElementById("status").innerHTML = status[range];
    // document.getElementById("number_correct").innerHTML = antwoord[optie];
    // document.getElementById("picture").src = pictures[range];
    document.getElementById("badge").src = badges[range];
    document.getElementById("knop").innerHTML = knop[range];
    document.getElementById("reject").innerHTML = reject[range];
    console.log(correct)
    console.log(status[range])
    set_score(correct, status[range]);

}

function readCounter() {
    document.getElementById("VMBO").innerHTML = localStorage.losercount;
    document.getElementById("HAVO").innerHTML = localStorage.matigcount;
    document.getElementById("VWO").innerHTML = localStorage.gemiddeldcount;
    document.getElementById("GYMNASIUM").innerHTML = localStorage.heldcount;
}


function readCounter2() {
    document.getElementById("VMBO2").innerHTML = localStorage.losercount;
    document.getElementById("HAVO2").innerHTML = localStorage.matigcount;
    document.getElementById("VWO2").innerHTML = localStorage.gemiddeldcount;
    document.getElementById("GYMNASIUM2").innerHTML = localStorage.heldcount;
}


function updateLoserCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.losercount) {
            localStorage.losercount = Number(localStorage.losercount) + 1;
        } else {
            localStorage.losercount = 0;
        }
    }
}

function updateMatigCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.matigcount) {
            localStorage.matigcount = Number(localStorage.matigcount) + 1;
        } else {
            localStorage.matigcount = 0;
        }
    }
}

function updateGemiddeldCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.gemiddeldcount) {
            localStorage.gemiddeldcount = Number(localStorage.gemiddeldcount) + 1;
        } else {
            localStorage.gemiddeldcount = 0;
        }
    }
}

function updateHeldCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.heldcount) {
            localStorage.heldcount = Number(localStorage.heldcount) + 1;
        } else {
            localStorage.heldcount = 0;
        }
    }
}

function redirect() {
    location.reload();

}

function scoreBoard() {

    document.getElementById("login").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("scoreboard2").style.display = "inline";
    readCounter2();
}
