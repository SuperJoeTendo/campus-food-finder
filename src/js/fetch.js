// src/js/fetch.js
async function fetchAllData() {
  try {
    const [all, vegan, glutenFree] = await Promise.all([
      fetch('/api/restaurants').then(res => res.json()),
      fetch('/api/vegan').then(res => res.json()),
      fetch('/api/gluten-free').then(res => res.json())
    ]);

    console.log("All:", all);
    console.log("Vegan:", vegan);
    console.log("Gluten-Free:", glutenFree);

    renderRestaurants(all);
    drawChart(all);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAllData);