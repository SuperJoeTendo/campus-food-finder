// src/js/charts.js
function drawChart(restaurants) {
  const labels = restaurants.map(r => r.name);
  const prices = restaurants.map(r => r.price_level);

  const ctx = document.getElementById('priceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Price Level (1 = cheap, 3 = expensive)',
        data: prices,
        backgroundColor: '#1f77b4'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 3 }
      }
    }
  });
}