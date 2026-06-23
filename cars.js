// car page developed using DOM methods

// small helpers so the whole form can be built with DOM methods

function makeLabel(forId, text)
{
    const label = document.createElement('label');
    label.setAttribute('for', forId);
    label.textContent = " " + text + " ";
    return label;
}

function makeInput(type, id)
{
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    return input;
}

function addLineBreak(parent)
{
    parent.appendChild(document.createElement('br'));
}

function buildCarForm()
{
    const carForm = document.getElementById('car-form');

    // city field
    carForm.appendChild(makeLabel('car-city', 'City'));
    carForm.appendChild(makeInput('text', 'car-city'));
    addLineBreak(carForm);
    addLineBreak(carForm);

    // car type drop down
    carForm.appendChild(makeLabel('car-type', 'Car Type'));

    const typeSelect = document.createElement('select');
    typeSelect.setAttribute('id', 'car-type');

    const carTypes = ["", "economy", "SUV", "Compact", "midsize"];

    for(let i = 0; i < carTypes.length; i++)
    {
        const option = document.createElement('option');
        option.setAttribute('value', carTypes[i]);
        option.textContent = carTypes[i] === "" ? "Select a car type" : carTypes[i];
        typeSelect.appendChild(option);
    }

    carForm.appendChild(typeSelect);
    addLineBreak(carForm);
    addLineBreak(carForm);

    // check in date
    carForm.appendChild(makeLabel('car-check-in', 'Check In Date'));
    carForm.appendChild(makeInput('date', 'car-check-in'));
    addLineBreak(carForm);

    // check out date
    carForm.appendChild(makeLabel('car-check-out', 'Check Out Date'));
    carForm.appendChild(makeInput('date', 'car-check-out'));
    addLineBreak(carForm);
    addLineBreak(carForm);

    // submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = " Submit ";
    carForm.appendChild(submitButton);
}

function isValidCarDate(dateValue)
{
    // check in/out must be between Sep 1, 2024 and Dec 1, 2024
    const minDate = new Date("2024-09-01");
    const maxDate = new Date("2024-12-01");
    const theDate = new Date(dateValue);

    return theDate >= minDate && theDate <= maxDate;
}

function displayCarResult(city, carType, checkIn, checkOut)
{
    const result = document.getElementById('result');

    // build the result using DOM methods instead of innerHTML
    const rows = [
        "City: " + city,
        "Car Type: " + carType,
        "Check In Date: " + checkIn,
        "Check Out Date: " + checkOut
    ];

    for(let i = 0; i < rows.length; i++)
    {
        const line = document.createElement('p');
        line.textContent = rows[i];
        result.appendChild(line);
    }
}

function validateCarForm(event)
{
    event.preventDefault();

    const city = document.getElementById('car-city').value.trim();
    const carType = document.getElementById('car-type').value;
    const checkIn = document.getElementById('car-check-in').value;
    const checkOut = document.getElementById('car-check-out').value;

    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    // clear the previous result built with DOM methods
    result.textContent = "";

    if(city === "")
    {
        errorMessage.textContent = "Please enter a city.";
        return;
    }

    const carTypes = ["economy", "SUV", "Compact", "midsize"];

    if(!carTypes.includes(carType))
    {
        errorMessage.textContent = "Car type must be economy, SUV, Compact or midsize.";
        return;
    }

    if(checkIn === "")
    {
        errorMessage.textContent = "Please select a check in date.";
        return;
    }

    if(!isValidCarDate(checkIn))
    {
        errorMessage.textContent = "Check in date must be between Sep 1, 2024 and Dec 1, 2024.";
        return;
    }

    if(checkOut === "")
    {
        errorMessage.textContent = "Please select a check out date.";
        return;
    }

    if(!isValidCarDate(checkOut))
    {
        errorMessage.textContent = "Check out date must be between Sep 1, 2024 and Dec 1, 2024.";
        return;
    }

    if(new Date(checkOut) <= new Date(checkIn))
    {
        errorMessage.textContent = "Check out date must be after the check in date.";
        return;
    }

    errorMessage.textContent = "";

    displayCarResult(city, carType, checkIn, checkOut);
}

// build the form and wire up the submit handler once the page is ready

buildCarForm();

const carForm = document.getElementById('car-form');
carForm.addEventListener('submit', validateCarForm);
