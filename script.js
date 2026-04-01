const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");
const removeb=document.getElementById("removeBtn");

// Load saved notesz
window.onload = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(text => createNote(text));
};

addBtn.addEventListener("click", () => createNote(""));

function createNote(text) {
    const divv = document.createElement("div");
    divv.classList.add("note");

    const textarea = document.createElement("textarea");
    textarea.value = text;

    const deleteBtn = document.createElement("span");

    deleteBtn.innerText = "❌";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.onclick = () => {
        divv.remove();
        saveNotes();
    };

    textarea.oninput = saveNotes;

    divv.appendChild(deleteBtn);
    divv.appendChild(textarea);
    container.appendChild(divv);

}

removeb.addEventListener("click", remove1);

function remove1() {
    const container = document.getElementById("notesContainer");

   container.lastElementChild?.remove();
   container.lastElementChild?.remove();
   saveNotes();
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll("textarea").forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}