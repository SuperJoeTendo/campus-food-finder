// fetch.js
async function fetchRestaurants() {
    try {
      const res = await fetch('http://localhost:3000/api/restaurants');
      const data = await res.json();
      window.restaurants = data;
      renderRestaurants(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchRestaurants);
  