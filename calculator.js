function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (value === '.' && display.value === '') {
    display.value = '0.';
  } else {
    display.value += value;
  }
}

function deleteFromDisplay() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  var expression = document.getElementById('display').value;
  try {
    // Replace % with /100 for percentage calculation
    expression = expression.replace(/%/g, '/100');
    var result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
