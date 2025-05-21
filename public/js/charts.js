// charts.js
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const labels = window.restaurants.map(r => r.name);
      const prices = window.restaurants.map(r => r.price_level);
  
      const ctx = document.getElementById('priceChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Price Level (1–3)',
            data: prices
          }]
        }
      });
    }, 500); // wait for data to load
  });
  