function drawChart(restaurants) {
  const labels = restaurants.map(r => r.name);
  const prices = restaurants.map(r => r.price_level);

  const ctx = document.getElementById('priceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Price Level (1–3)',
        data: prices,
        backgroundColor: 'skyblue'
      }]
    },
    options: {
      responsive: true
    }
  });
}
  