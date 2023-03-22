let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let undoEl = document.getElementById("undo-btn");
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
};

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
};

function undo() {
    saveEl.textContent = "Previous entries: "
}

// When click undo we want increment to be 0 and previous entries to be nothign