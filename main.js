function displayDateTime() 
{
    const datetimeElement = document.getElementById('datetime-display');
    const currentDateTime = new Date();
    
    // Use toLocaleString() for combined date/time, or toLocaleDateString()/Time() separately
    datetimeElement.textContent = currentDateTime.toLocaleString();
}

// Display immediately on load
displayDateTime();

// Update every second
setInterval(displayDateTime, 1000);

function fontSizeChange() 
{
    const sizeInput = document.getElementById('font-size-input');

    const texTarget = document.querySelector('main');

    texTarget.style.fontSize = sizeInput.value + "px";
}

function backgroundColorChange()
{
    const colorInput = document.getElementById('background-color-input');

    const sectorTarget = document.querySelector('body');

    sectorTarget.style.backgroundColor = colorInput.value;
}

// validation requirements.
// First name — alphabetic only, first letter capitalized
// Last name — same rules
// First and last name cannot be the same
// Phone — format (ddd) ddd-dddd
// Email — must contain @ and .
// Gender — one must be selected
// Comment — at least 10 characters


function validateName(id)
{
    const userName = document.getElementById(id).value;
    const regex = /^[A-Z][a-zA-Z]*$/;

    return regex.test(userName);
}

function validateForm()
{
    validateName('first-name');
    validateName('last-name');
}

function check()
{
    
}