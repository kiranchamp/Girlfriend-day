window.onload = () => {

    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 2500);

};

function scrollToSection() {

    document.querySelector("#story").scrollIntoView({
        behavior: "smooth"
    });

}

const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

let play = false;

btn.onclick = () => {

    if (!play) {

        music.play();
        btn.innerHTML = "⏸️";
        play = true;

    } else {

        music.pause();
        btn.innerHTML = "🎵";
        play = false;

    }

};

const startDate = new Date("2022-04-20");
const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days").innerHTML =
days + " Beautiful Days Together ❤️";

const text = `

My Dearest PAPA ❤️

Happy Girlfriend Day ❤️

Today isn't just another day...

It's another reminder of how lucky I am to have you.

Ever since 20 April 2022,
life has never been the same.

Thank you for your love.

Thank you for your care.

Thank you for your patience.

Thank you for believing in me.

You make my ordinary days extraordinary.

You are my happiness.

You are my peace.

You are my safe place.

No matter what happens in life...

I promise to respect you.

I promise to support you.

I promise to make you smile.

I promise to choose YOU...

again...

and again...

every single day.

Happy Girlfriend Day ❤️

Forever Yours,

Kiran ❤️

`;

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 35);

    }

}
const reasons = [

"Because your smile makes my day brighter. ❤️",
"Because you always believe in me.",
"Because your hugs feel like home.",
"Because you make ordinary moments magical.",
"Because your laugh is my favorite sound.",
"Because you support me in everything.",
"Because you understand me.",
"Because your kindness inspires me.",
"Because life is beautiful with you.",
"Because you're simply YOU ❤️"

];

const list = document.getElementById("reasonList");

for (let i = 1; i <= 100; i++) {

    const li = document.createElement("li");

    li.innerHTML = i + ". " + reasons[(i - 1) % reasons.length];

    list.appendChild(li);

}

function heart() {

    const h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "❤️";

    h.style.left = Math.random() * 100 + "vw";

    h.style.fontSize = (20 + Math.random() * 30) + "px";

    document.querySelector(".hearts").appendChild(h);

    setTimeout(() => {

        h.remove();

    }, 8000);

}

setInterval(heart, 220);document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("div");

    dot.className = "heart";

    dot.innerHTML = "❤️";

    dot.style.left = e.pageX + "px";

    dot.style.top = e.pageY + "px";

    dot.style.fontSize = "12px";

    document.querySelector(".hearts").appendChild(dot);

    setTimeout(() => {

        dot.remove();

    }, 1200);

});

setTimeout(() => {

    const message = document.createElement("div");

    message.innerHTML = `
        <div style="
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.75);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:99999;
            padding:20px;
        ">
            <div style="
                background:white;
                color:#ff2f8d;
                max-width:420px;
                width:90%;
                border-radius:20px;
                padding:30px;
                text-align:center;
                font-family:Poppins,sans-serif;
                box-shadow:0 10px 30px rgba(0,0,0,.3);
            ">
                <h2>❤️ Happy Girlfriend Day ❤️</h2>
                <p style="margin-top:15px;line-height:1.8;">
                    Dear <b>PAPA</b>,<br><br>
                    Thank you for making my life beautiful.<br>
                    Every day with you is my favorite day.<br><br>
                    I promise to choose you,
                    today, tomorrow,
                    and forever.
                </p>
                <h3 style="margin-top:20px;">
                    Forever Yours,<br>
                    Kiran ❤️
                </h3>
                <button onclick="this.closest('div').parentElement.remove()"
                style="
                    margin-top:20px;
                    background:#ff2f8d;
                    color:white;
                    border:none;
                    padding:12px 25px;
                    border-radius:30px;
                    cursor:pointer;
                ">
                    I Love You ❤️
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(message);

}, 12000);
typing();
