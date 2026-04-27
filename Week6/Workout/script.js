const buttons = document.querySelectorAll(".work-btn");
const title = document.getElementById("title");
const list = document.getElementById("exercise-list");
const imageArea = document.getElementById("image-area");
const greeting = document.getElementById("greeting");

// FUNCTION to load workout
function loadWorkout(type) {
    const data = workoutData[type];

    title.textContent = data.title;

    list.innerHTML = "";
    data.moves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        list.appendChild(li);
    });

    imageArea.innerHTML = "";
    data.images.forEach(img => {
        const image = document.createElement("img");
        image.src = `Assets/${img}`;
        imageArea.appendChild(image);
    });
}

// CLICK EVENTS (interaction 1–3)
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        loadWorkout(type);
    });

    // HOVER EVENT (interaction 4)
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// PAGE LOAD EVENT (interaction 5)
window.addEventListener("load", () => {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good morning — time to get moving";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon — stay consistent";
    } else {
        greeting.textContent = "Good evening — finish strong";
    }
});

// BONUS interaction (extra safe)
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});