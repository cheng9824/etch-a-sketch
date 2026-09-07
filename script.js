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

    while (true) {
        if (size < 1 || size > 100) {
            size = Number(prompt("change your size"))
        } else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createGrid();
            break;
        }
    }
})

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");

        div.classList.add('item');

        container.appendChild(div);

        const items = document.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "grey";
            });
        })
    }
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
    });
})
