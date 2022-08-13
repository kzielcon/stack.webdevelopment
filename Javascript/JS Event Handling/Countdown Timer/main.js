var number = 10
var intervalId = 0

function countdown()
{
    // If greater than 0, display number, then decrease number by 1
    if(number >= 0)
    {
        document.getElementById("number").innerHTML = number
        number--
    }
    // Else (if zero already), display the image
    else
    {
        // Hide number
        document.getElementById("number").hidden = true
        // Display rocket
        document.getElementById("rocket").hidden = false
        // Clear interval using the intervalId
        clearInterval(intervalId)
    }
}

intervalId = setInterval(countdown, 1000)