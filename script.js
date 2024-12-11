document.getElementById('price-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const type = document.getElementById('type').value;
  const value = parseFloat(document.getElementById('value').value);
  const pricePerUnit = parseFloat(document.getElementById('price').value);

  if (isNaN(value) || isNaN(pricePerUnit)) {
    alert('Por favor ingresa valores válidos.');
    return;
  }

  const totalPrice = value * pricePerUnit;

  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
});
