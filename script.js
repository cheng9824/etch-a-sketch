const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");

    div.classList.add('item');

    container.appendChild(div);
}

const button = document.querySelector("button");
let size;

button.addEventListener("click", () => {
    size = Number(prompt("Change your size"));

    if (size < 1 || size > 100) {
        size = Number(prompt("change your size"))
    } else {
        container.removeChild(div);
        createGrid();
    }
})

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");

        div.classList.add('item');

        container.appendChild(div);
    }
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
    });
})
