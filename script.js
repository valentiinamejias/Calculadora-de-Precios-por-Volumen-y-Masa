document.getElementById('price-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const type = document.getElementById('type').value;
  const value = parseFloat(document.getElementById('value').value);
  const pricePerUnit = parseFloat(document.getElementById('price').value);

  // Validación de los datos ingresados
  if (isNaN(value) || isNaN(pricePerUnit) || value <= 0 || pricePerUnit <= 0) {
    alert('Por favor ingresa valores válidos y mayores a cero.');
    return;
  }

  // Cálculo del precio total
  const totalPrice = value * pricePerUnit;

  // Muestra el precio total
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
});
