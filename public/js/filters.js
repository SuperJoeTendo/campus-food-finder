// filters.js
function renderRestaurants(data) {
    const container = document.getElementById('restaurantList');
    container.innerHTML = '';
    
    if (!data || data.length === 0) {
      container.innerHTML = '<p>No restaurants to show.</p>';
      return;
    }
  
    data.forEach(r => {
      const div = document.createElement('div');
      div.textContent = `${r.name} - ${r.type} - ⭐ ${r.rating} - $${r.price_level}`;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('veganFilter').addEventListener('change', (e) => {
      const filtered = e.target.checked
        ? window.restaurants.filter(r => r.vegan)
        : window.restaurants;
      renderRestaurants(filtered);
    });
  });
  