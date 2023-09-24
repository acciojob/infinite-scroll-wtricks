// Your code with the corrected condition
let itemCount = 1;
const container = document.querySelector("#infi-list");

const createListItems = (count = 0) => {
    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + itemCount++;
        container.appendChild(li);
    }
}

createListItems(10);

container.addEventListener("scroll", (event) => {
    const e = event.target;

    if (e.scrollTop + e.offsetHeight + 100 > e.scrollHeight) {
        createListItems(10);
        //console.log("ADD");
    }
});

