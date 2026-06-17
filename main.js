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

function hideReturnDate()
{
    const returnDateSection = document.getElementById('return-date-section');
    returnDateSection.style.display = "none";
}

function showReturnDate()
{
    const returnDateSection = document.getElementById('return-date-section');
    returnDateSection.style.display = "block";

}

function showPassengerSection()
{
    const passengerSection = document.getElementById('passenger-section');
    passengerSection.style.display = "block";
}

function validateFlightForm()
{
    const origin = document.getElementById('origin').value.trim();

    const destination = document.getElementById('destination').value.trim();

    const departureDate = document.getElementById('departure-date').value;

    const returnDate = document.getElementById('return-date').value;

    const adultPassenger = document.getElementById('adult-passenger').value;
    const childPassenger = document.getElementById('children-passenger').value;
    const infantPassenger = document.getElementById('infant-passenger').value;

    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    const roundTripSelected = document.getElementById('round-trip').checked;
    const oneWayTripSelected = document.getElementById('one-way-trip').checked;

    // Regex for cities, passenger quantities, and departure date
    const cityRegex = /^(Houston|Dallas|Austin|San Antonio|Fort Worth|El Paso|Arlington|Corpus Christi|Plano|Lubbock|Los Angeles|San Diego|San Francisco|Sacramento|San Jose|Fresno|Long Beach|Oakland|Bakersfield|Anaheim)$/i;
    const passengerRegex = /^[0-4]$/;
    const dateRegex = /^(2024-09-(0[1-9]|[12][0-9]|30)|2024-10-(0[1-9]|[12][0-9]|3[01])|2024-11-(0[1-9]|[12][0-9]|30)|2024-12-01)$/;

    if(!roundTripSelected && !oneWayTripSelected)
    {
        errorMessage.textContent = "Please select a trip type.";
        result.textContent = "";
        return false;
    }

    if(origin === "")
    {
        errorMessage.textContent = "Origin empty, enter a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    if(destination === "")
    {
        errorMessage.textContent = "Destination empty, enter a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    if(!cityRegex.test(origin))
    {
        errorMessage.textContent = "Origin must be a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    if(!cityRegex.test(destination))
    {
        errorMessage.textContent = "Destination must be a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    
    if(departureDate === "")
    {
        errorMessage.textContent = "Please select a departure date.";
        result.textContent = "";
        return false;
    }

    if(!dateRegex.test(departureDate))
    {
        errorMessage.textContent = "Departure date must be between Sep 1, 2024 and Dec 1, 2024.";
        result.textContent = "";
        return false;
    }

    if(roundTripSelected && returnDate === "")
    {
        errorMessage.textContent = "Please select a return date.";
        result.textContent = "";
        return false;
    }

    if(!passengerRegex.test(adultPassenger))
    {
        errorMessage.textContent = "Adult passengers must be between 0 and 4.";
        result.textContent = "";
        return false;
    }

    if(!passengerRegex.test(childPassenger))
    {
        errorMessage.textContent = "Child passengers must be between 0 and 4.";
        result.textContent = "";
        return false;
    }
    if(!passengerRegex.test(infantPassenger))
    {
        errorMessage.textContent = "Infant passengers must be between 0 and 4.";
        result.textContent = "";
        return false;
    }

    if(adultPassenger === "0" && childPassenger === "0" && infantPassenger === "0")
    {
        errorMessage.textContent = "All three passenger categories cannot be 0.";
        result.textContent = "";
        return false;
    }

    errorMessage.textContent = "";

    result.innerHTML = `
                    <p> Trip Type: ${roundTripSelected ? "Round Trip" : "One Way"} </p>

                    <br>
                    <p> Flight Info </p>
                    <p> Origin: ${origin} </p> 
                    <p> Destination: ${destination} </p>
                    <p> Departure Date: ${departureDate} </p>

                    ${roundTripSelected ? ` <p> Return Date: ${returnDate} </p>` : ""}

                    <br>
                    <p> Passenger Quantity </p>
                    <p> Adults: ${adultPassenger} </p>
                    <p> Children: ${childPassenger} </p>
                    <p> Infant: ${infantPassenger}</p>
                    `;



    return false;

}