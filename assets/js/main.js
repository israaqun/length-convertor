const units = ['meter', 'inch', 'cm', 'km', 'foot', 'yard'];

const conversions = {
  meter: 1,
  inch: 39.3701,
  cm: 100,
  km: 0.001,
  foot: 3.28084,
  yard: 1.09361,
};


function convertLength(input, unit) {
  const inputValue = parseFloat(input.value);

  if (!isNaN(inputValue)) {
      units.forEach((otherUnit) => {
          if (otherUnit !== unit) {
              const result = inputValue / (conversions[unit] / conversions[otherUnit]);
              const otherInput = document.getElementById(otherUnit);
              otherInput.value = result.toFixed(3);
          }
      });
  } else {
     
      input.value = ''; 
      alert('Please enter a valid number.');
  }
}

function setupEventListeners() {
  units.forEach((unit) => {
    const input = document.getElementById(unit);
    input.addEventListener('input', () => convertLength(input, unit));
  });
}

setupEventListeners();