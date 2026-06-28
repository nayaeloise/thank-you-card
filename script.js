const card = document.getElementById("card");

card.addEventListener("click", () => {
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
        createSparkles();
    }
});

function createSparkles() {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
}.sparkle{
    position:fixed;
    width:8px;
    height:8px;
    background:#ffd700;
    border-radius:50%;
    animation:sparkle 1s ease-out forwards;
    pointer-events:none;
}

@keyframes sparkle{
    0%{
        transform:scale(0);
        opacity:1;
    }
    100%{
        transform:translateY(-60px) scale(2);
        opacity:0;
    }
}
