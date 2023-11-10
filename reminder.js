document.addEventListener('DOMContentLoaded', () => {
    const setReminderButton = document.getElementById("set-reminder");
    const reminderDateInput = document.getElementById("reminder-date");

    setReminderButton.addEventListener("click", () => {
        const reminderDate = new Date(reminderDateInput.value);

        if (reminderDate > new Date()) {
            const timeRemaining = reminderDate - new Date();

            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    const savedNotes = getSavedNotes();

                    if (savedNotes.length > 0) {
                        displayNotificationAfterDelay(savedNotes, timeRemaining);
                    } else {
                        alert("No notes to remind you about.");
                    }
                }
            });
        } else {
            alert("Please select a future date and time for your reminder.");
        }
    });

    function displayNotificationAfterDelay(savedNotes, timeRemaining) {
        const message = savedNotes.join('\n');

        setTimeout(() => {
            displayNotification("Reminder", message);
            console.log("Reminder Message:", message);
        }, timeRemaining);
    }

    function displayNotification(title, message) {
        if ('Notification' in window) {
            new Notification(title, { body: message });
        } else {
            alert("Your browser does not support desktop notifications.");
        }
    }

    function getSavedNotes() {
        const savedNotesJSON = localStorage.getItem('notes');
        return savedNotesJSON ? JSON.parse(savedNotesJSON) : [];
    }
});
