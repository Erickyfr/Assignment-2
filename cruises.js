// cruise page developed using jQuery methods

$(document).ready(function()
{
    $('#cruise-form').on('submit', function(event)
    {
        event.preventDefault();
        validateCruiseForm();
    });
});

function isValidCruiseDate(dateValue)
{
    // departing dates must be between Sep 1, 2024 and Dec 1, 2024
    const minDate = new Date("2024-09-01");
    const maxDate = new Date("2024-12-01");
    const theDate = new Date(dateValue);

    return theDate >= minDate && theDate <= maxDate;
}

function validateCruiseForm()
{
    const destination = $('#cruise-destination').val();
    const departStart = $('#depart-start').val();
    const departEnd = $('#depart-end').val();

    const durationMin = Number($('#duration-min').val());
    const durationMax = Number($('#duration-max').val());

    const adults = Number($('#cruise-adult').val());
    const children = Number($('#cruise-children').val());
    const infants = Number($('#cruise-infant').val());

    const validDestinations = ["Alaska", "Bahamas", "Europe", "Mexico"];

    if(!validDestinations.includes(destination))
    {
        $('#error-message').text("Destination must be Alaska, Bahamas, Europe or Mexico.");
        $('#result').empty();
        return;
    }

    if(departStart === "")
    {
        $('#error-message').text("Please select a from date.");
        $('#result').empty();
        return;
    }

    if(!isValidCruiseDate(departStart))
    {
        $('#error-message').text("From date must be between Sep 1, 2024 and Dec 1, 2024.");
        $('#result').empty();
        return;
    }

    if(departEnd === "")
    {
        $('#error-message').text("Please select a to date.");
        $('#result').empty();
        return;
    }

    if(!isValidCruiseDate(departEnd))
    {
        $('#error-message').text("To date must be between Sep 1, 2024 and Dec 1, 2024.");
        $('#result').empty();
        return;
    }

    if(new Date(departEnd) < new Date(departStart))
    {
        $('#error-message').text("The to date cannot be before the from date.");
        $('#result').empty();
        return;
    }

    if($('#duration-min').val() === "" || $('#duration-max').val() === "")
    {
        $('#error-message').text("Please enter the minimum and maximum duration.");
        $('#result').empty();
        return;
    }

    if(durationMin < 3)
    {
        $('#error-message').text("Minimum duration cannot be less than 3 days.");
        $('#result').empty();
        return;
    }

    if(durationMax > 10)
    {
        $('#error-message').text("Maximum duration cannot be greater than 10 days.");
        $('#result').empty();
        return;
    }

    if(durationMin > durationMax)
    {
        $('#error-message').text("Minimum duration cannot be greater than the maximum duration.");
        $('#result').empty();
        return;
    }

    if(adults < 1)
    {
        $('#error-message').text("At least one adult is required.");
        $('#result').empty();
        return;
    }

    // infants can stay with adults, so only adults and children count toward the 2 per room limit
    const numberOfRooms = Math.ceil((adults + children) / 2);

    $('#error-message').text("");

    $('#result').html(`
                    <p> Destination: ${destination} </p>
                    <p> Departing Between: ${departStart} and ${departEnd} </p>
                    <p> Duration: ${durationMin} to ${durationMax} days </p>

                    <br>
                    <p> Guest Quantity </p>
                    <p> Adults: ${adults} </p>
                    <p> Children: ${children} </p>
                    <p> Infants: ${infants} </p>

                    <br>
                    <p> Number of Rooms Needed: ${numberOfRooms} </p>
                    `);
}
