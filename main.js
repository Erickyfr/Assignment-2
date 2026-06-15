function displayDateTime() {
    const datetimeElement = document.getElementById('datetime-display');
    const currentDateTime = new Date();
    
    // Use toLocaleString() for combined date/time, or toLocaleDateString()/Time() separately
    datetimeElement.textContent = currentDateTime.toLocaleString();
}

// Display immediately on load
displayDateTime();

// Update every second
setInterval(displayDateTime, 1000);