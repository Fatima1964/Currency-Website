// notepad.js
document.addEventListener('DOMContentLoaded', () => {
    // Load saved notes from local storage when the page loads
    loadNotes();

    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', saveNote);

    const noteText = document.getElementById('note-text');
    noteText.addEventListener('input', () => {
        // Enable the "Save Note" button when there is text in the textarea
        saveButton.disabled = noteText.value.trim() === '';
    });
});

function loadNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    const savedNotes = getSavedNotes();
    savedNotes.forEach((note, index) => {
        const noteElement = createNoteElement(note, index);
        notesList.appendChild(noteElement);
    });
}

function saveNote() {
    const noteText = document.getElementById('note-text');
    const newNote = noteText.value.trim();

    if (newNote === '') {
        return; // Don't save empty notes
    }

    const savedNotes = getSavedNotes();
    savedNotes.push(newNote);
    saveNotes(savedNotes);
    noteText.value = '';
    loadNotes(); // Reload the notes to update the list
}

function getSavedNotes() {
    const savedNotesJSON = localStorage.getItem('notes');
    return savedNotesJSON ? JSON.parse(savedNotesJSON) : [];
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function createNoteElement(note, index) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteText = document.createElement('p');
    noteText.innerText = note;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteNote(index));

    noteElement.appendChild(noteText);
    noteElement.appendChild(deleteButton);

    return noteElement;
}

function deleteNote(index) {
    const savedNotes = getSavedNotes();
    savedNotes.splice(index, 1);
    saveNotes(savedNotes);
    loadNotes(); // Reload the notes to update the list
}
