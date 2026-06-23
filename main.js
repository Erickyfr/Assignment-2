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


function validateName(id)
{
    const userName = document.getElementById(id).value;
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    return nameRegex.test(userName);
}

function validatePhoneNumber()
{
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    return phoneRegex.test(phoneNumber);
}

function validateEmail()
{
    const eMail = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(eMail);
}

function validateComment()
{
    const comMent = document.getElementById('comment').value;
    const commentRegex = /^[\s\S]{10,}$/;

    return commentRegex.test(comMent);
}

function validateContactForm()
{

    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');


    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phonenUmber = document.getElementById('phone-number').value;
    const emAil = document.getElementById('email').value;
    const coMment = document.getElementById('comment').value;

    const maleGender = document.getElementById('gender-male').checked;
    const femaleGender = document.getElementById('gender-female').checked;



    if(!validateName('first-name'))
    {
        errorMessage.textContent = "First name must start with a capital letter and be alphabetic only.";
        result.textContent = "";
        return false;
    }
    if(!validateName('last-name'))
    {
        errorMessage.textContent = "Last name must start with a capital letter and be alphabetic only.";
        result.textContent = "";
        return false;
    }

    if(firstName === lastName)
    {
        errorMessage.textContent = "First and Last name cannot be the same.";
        result.textContent = "";
        return false;
    }

    if(!validatePhoneNumber())
    {
        errorMessage.textContent = "Phone number must use the format (123) 456-7890."
        result.textContent = "";
        return false;
    }

    if(!validateEmail())
    {
        errorMessage.textContent = "Email must have @ and .";
        result.textContent = "";
        return false;
    }

    if(!maleGender && !femaleGender)
    {
        errorMessage.textContent = "Please select a gender";
        result.textContent = "";
        return false;
    }

    if(!validateComment())
    {
        errorMessage.textContent = "Please enter at least 10 characters";
        result.textContent = "";
        return false;
    }

    errorMessage.textContent = "";

    result.innerHTML = `
                    <p> First Name: ${firstName} </p>
                    <p> Last Name: ${lastName} </p>
                    <P> Phone Number: ${phonenUmber} </P>
                    <p> Email: ${emAil}</p>
                    <p> Gender: ${maleGender ? "Male" : "Female"} </p>
                    <p> Comment: ${coMment} </p>
                    `;
                    


    return false;

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

// stays page validation (no regular expression used in this part)

function isValidStayDate(dateValue)
{
    // check in/out must be between Sep 1, 2024 and Dec 1, 2024
    const minDate = new Date("2024-09-01");
    const maxDate = new Date("2024-12-01");
    const theDate = new Date(dateValue);

    return theDate >= minDate && theDate <= maxDate;
}

function isTexasOrCaliforniaCity(cityName)
{
    // same Texas and California cities accepted on the flight page, without using regex
    const cityList = ["houston", "dallas", "austin", "san antonio", "fort worth", "el paso", "arlington", "corpus christi", "plano", "lubbock", "los angeles", "san diego", "san francisco", "sacramento", "san jose", "fresno", "long beach", "oakland", "bakersfield", "anaheim"];

    return cityList.includes(cityName.trim().toLowerCase());
}

function validateStaysForm()
{
    const city = document.getElementById('stay-city').value.trim();
    const checkIn = document.getElementById('check-in-date').value;
    const checkOut = document.getElementById('check-out-date').value;

    const adults = Number(document.getElementById('adult-guest').value);
    const children = Number(document.getElementById('children-guest').value);
    const infants = Number(document.getElementById('infant-guest').value);

    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    if(city === "")
    {
        errorMessage.textContent = "City empty, enter a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    if(!isTexasOrCaliforniaCity(city))
    {
        errorMessage.textContent = "City must be a city in Texas or California.";
        result.textContent = "";
        return false;
    }

    if(checkIn === "")
    {
        errorMessage.textContent = "Please select a check in date.";
        result.textContent = "";
        return false;
    }

    if(!isValidStayDate(checkIn))
    {
        errorMessage.textContent = "Check in date must be between Sep 1, 2024 and Dec 1, 2024.";
        result.textContent = "";
        return false;
    }

    if(checkOut === "")
    {
        errorMessage.textContent = "Please select a check out date.";
        result.textContent = "";
        return false;
    }

    if(!isValidStayDate(checkOut))
    {
        errorMessage.textContent = "Check out date must be between Sep 1, 2024 and Dec 1, 2024.";
        result.textContent = "";
        return false;
    }

    if(new Date(checkOut) <= new Date(checkIn))
    {
        errorMessage.textContent = "Check out date must be after the check in date.";
        result.textContent = "";
        return false;
    }

    if(!Number.isInteger(adults) || !Number.isInteger(children) || !Number.isInteger(infants) || adults < 0 || children < 0 || infants < 0)
    {
        errorMessage.textContent = "Guest counts must be whole numbers of 0 or more.";
        result.textContent = "";
        return false;
    }

    if(adults < 1)
    {
        errorMessage.textContent = "At least one adult is required.";
        result.textContent = "";
        return false;
    }

    // infants can stay with adults, so only adults and children count toward the 2 per room limit
    const numberOfRooms = Math.ceil((adults + children) / 2);

    errorMessage.textContent = "";

    result.innerHTML = `
                    <p> City: ${city} </p>
                    <p> Check In Date: ${checkIn} </p>
                    <p> Check Out Date: ${checkOut} </p>

                    <br>
                    <p> Guest Quantity </p>
                    <p> Adults: ${adults} </p>
                    <p> Children: ${children} </p>
                    <p> Infants: ${infants} </p>

                    <br>
                    <p> Number of Rooms Needed: ${numberOfRooms} </p>
                    `;

    return false;

}