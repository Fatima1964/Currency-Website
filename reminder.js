document.addEventListener('DOMContentLoaded', () => {
    const setReminderButton = document.getElementById("set-reminder");
    const reminderDateInput = document.getElementById("reminder-date");

    setReminderButton.addEventListener("click", () => {
        const reminderDate = new Date(reminderDateInput.value);

        if (reminderDate > new Date()) {
            const timeRemaining = reminderDate - new Date();

            // Request permission when the button is clicked
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    // Retrieve saved notes and use them as the notification message
                    const savedNotes = getSavedNotes();
                    const message = savedNotes.join('\n'); // Join notes with line breaks

                    // Display the notification
                    setTimeout(() => {
                        displayNotification("Reminder", message);
                        console.log("Reminder Message:", message);
                        
                    }, timeRemaining);
                }
            });
        } else {
            alert("Please select a future date and time for your reminder.");
        }
    });

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
