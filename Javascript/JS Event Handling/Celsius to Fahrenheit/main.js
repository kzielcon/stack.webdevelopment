function celsiusToFahrenheit(celsius)
{
    const fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}
function printResult()
{
    document.getElementById('result').value = celsiusToFahrenheit(document.getElementById('celsius').value)
}