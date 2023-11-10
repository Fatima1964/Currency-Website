// notepad.js

// Wait for the DOM (Document Object Model) to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
    // Load saved notes from local storage when the page loads
    loadNotes();

    // Get a reference to the "Save" button and add a click event listener
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', saveNote);

    // Get a reference to the textarea for entering notes and add an input event listener
    const noteText = document.getElementById('note-text');
    noteText.addEventListener('input', () => {
        // Enable the "Save Note" button when there is text in the textarea
        saveButton.disabled = noteText.value.trim() === '';
    });
});

// Function to load and display saved notes
function loadNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    // Retrieve saved notes from local storage
    const savedNotes = getSavedNotes();
    
    // Iterate through saved notes and create elements for display
    savedNotes.forEach((note, index) => {
        const noteElement = createNoteElement(note, index);
        notesList.appendChild(noteElement);
    });
}

// Function to save a new note
function saveNote() {
    const noteText = document.getElementById('note-text');
    const newNote = noteText.value.trim();

    if (newNote === '') {
        return; // Don't save empty notes
    }

    // Retrieve existing saved notes, add the new note, and save them
    const savedNotes = getSavedNotes();
    savedNotes.push(newNote);
    saveNotes(savedNotes);
    
    // Clear the input field and reload the notes to update the list
    noteText.value = '';
    loadNotes();
}

// Function to retrieve saved notes from local storage
function getSavedNotes() {
    const savedNotesJSON = localStorage.getItem('notes');
    return savedNotesJSON ? JSON.parse(savedNotesJSON) : [];
}

// Function to save notes to local storage
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to create a display element for a note
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

// Function to delete a note
function deleteNote(index) {
    const savedNotes = getSavedNotes();
    savedNotes.splice(index, 1);
    saveNotes(savedNotes);
    
    // Reload the notes to update the list after deleting a note
    loadNotes();
}
