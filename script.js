const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const letterContent = document.getElementById("letterContent");
const message = document.getElementById("message");
const ending = document.getElementById("ending");

const loveMessage = `You often tell me that you're only this childish and carefree when you're with me, and that you're not like this around anyone else.

I want you to know that I will always cherish this side of you.

I promise to always make you feel comfortable, loved, and safe, so you never have to hide your inner child when you're with me.

I never want you to lose that beautiful and innocent side of yourself.

I promise I'll always take care of you.

And I love you,`;

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");
    openBtn.style.display = "none";

    setTimeout(() => {

        letterContent.style.display = "block";

        let index = 0;

        function typeWriter() {

            if (index < loveMessage.length) {

                message.textContent += loveMessage.charAt(index);

                index++;

                setTimeout(typeWriter, 35);

            } else {

                ending.textContent 

            }
        }

        typeWriter();

    }, 1200);

});

// Floating hearts animation

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);