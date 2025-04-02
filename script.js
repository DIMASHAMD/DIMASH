function sendMessage() {
    var phoneNumber = "94776938009"; // The phone number to send the message to
    var message = "I LOVE YOU CYBER CHALAH 💗📍"; // Default message

    // Get the value from the textarea, if available
    var userMessage = document.getElementById("message").value;
    if (userMessage.trim() !== "") {
        message = userMessage; // Use user-entered message if any
    }

    // URL encode the message
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
