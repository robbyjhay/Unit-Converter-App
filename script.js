document.getElementById('convert-btn').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('input-value').value);
    const unitType = document.getElementById('unit-type').value;
    let convertedValue;

    switch (unitType) {
        case 'length':
            convertedValue = value * 3.28084; // Example conversion: meters to feet
            break;
        case 'weight':
            convertedValue = value * 2.20462; // Example conversion: kilograms to pounds
            break;
        case 'temperature':
            convertedValue = (value * 9/5) + 32; // Example conversion: Celsius to Fahrenheit
            break;
        default:
            convertedValue = value;
    }

    document.getElementById('converted-value').textContent = convertedValue.toFixed(2);
});
