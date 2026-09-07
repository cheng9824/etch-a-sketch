const container = document.querySelector("#container");

createGrid(16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let size = Number(prompt("Change your size"));

    while (true) {
        if (size < 1 || size > 100) {
            size = Number(prompt("change your size"))
        } else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createGrid(size);
            break;
        }
    }
})

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");

        div.classList.add('item');
        div.style.width = `${960 / size}px`;
        div.style.height = `${960 / size}px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "grey";
        });

        container.appendChild(div);
    }
}