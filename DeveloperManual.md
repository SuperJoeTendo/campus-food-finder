# 🛠️ Developer Manual – Campus Food Finder

This document is for developers who will continue maintaining or extending the **Campus Food Finder** web application. It provides installation, server setup, API documentation, and known issues/future enhancements.

---

## 🔧 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/campus-food-finder.git
   cd campus-food-finder
   ```

2. **Install Dependencies**
   Ensure Node.js and npm are installed.
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   SUPABASE_URL=https://szdtfxpcjbfvzzgvigeo.supabase.co
   SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6ZHRmeHBjamJmdnp6Z3ZpZ2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Nzg2MjgsImV4cCI6MjA2MzI1NDYyOH0.u5ScU2p2Iv9hhRjW2E-uTOJ_AjliSGYgG8C-ccEIvDA
   ```

---

## 🚀 Running the Application

### Backend (API Server)
Start the backend server using Node.js:

```bash
node api/index.js
```

The backend will be available on: `http://localhost:3000`

### Frontend (Local)
Open the HTML pages directly in a browser or use a static file server:

```bash
npx serve public/
```

Pages:
- `/index.html` – Home
- `/about.html` – About
- `/finder.html` – Core functionality (data + chart)

---

## ✅ API Reference

Located in `api/index.js`:

### `GET /api/restaurants`
- **Description:** Returns all restaurants from Supabase.
- **Response:** JSON array of objects with `name`, `type`, `price_level`, `rating`, etc.

### `POST /api/restaurants` *(optional, if implemented)*
- **Description:** Add a new restaurant to the database.
- **Request Body:** JSON with matching schema.
- **Response:** Success or error message.

---

## 🧪 Testing

You can test endpoints manually with:

```bash
curl http://localhost:3000/api/restaurants
```

Or use a tool like [Postman](https://www.postman.com/).

There are no automated test suites, but fetch logic can be debugged in-browser using dev tools.

---

## 🐞 Known Bugs

- Styling may not load on deployment if relative paths are broken.
- No input validation or error handling for user-submitted data.

---

## 🔮 Future Roadmap

- 🌍 Use geolocation to sort food options by distance.
- ✏️ Add a review/comment section with authentication.
- 📱 Fully responsive design with mobile-first layout.
- 📈 Advanced analytics dashboards using Chart.js.

---
