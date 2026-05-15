import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [meals, setMeals] = useState([]);

  ////// Products API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  ////// Meals API
  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>
        React API Fetching Homework
      </h1>

      {/* PRODUCTS SECTION */}
      <section>
        <h1 style={styles.sectionTitle}>
          🛒 Products Showcase
        </h1>

        <div style={styles.grid}>
          {products.map((product) => (
            <div
              key={product.id}
              className="card"
              style={styles.card}
            >
              <img
                src={product.image}
                alt={product.title}
                style={styles.productImage}
              />

              <h3 style={styles.productTitle}>
                {product.title}
              </h3>

              <p
                style={{
                  ...styles.price,
                  color:
                    product.price > 100
                      ? "red"
                      : "green",
                }}
              >
                ${product.price}
              </p>

              <p style={styles.category}>
                {product.category}
              </p>

              <button
                className="button"
                style={styles.button}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD SECTION */}
      <section>
        <h1 style={styles.sectionTitle}>
          Food Recipe App
        </h1>

        <div style={styles.grid}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="foodCard"
              style={styles.foodCard}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={styles.foodImage}
              />

              <h2 style={styles.foodTitle}>
                {meal.strMeal}
              </h2>

              <p style={styles.foodText}>
                Area: {meal.strArea}
              </p>

              <p style={styles.foodText}>
                Category: {meal.strCategory}
              </p>

              <button
                className="recipeBtn"
                style={styles.recipeBtn}
              >
                Show Recipe
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "#f4f6f9",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial",
  },

  mainTitle: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#222",
    fontSize: "40px",
  },

  sectionTitle: {
    margin: "40px 0 20px",
    color: "#333",
    fontSize: "32px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "white",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    textAlign: "center",
  },

  productImage: {
    width: "100%",
    height: "220px",
    objectFit: "contain",
  },

  productTitle: {
    fontSize: "18px",
    margin: "15px 0",
    color: "#222",
  },

  price: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  category: {
    color: "#666",
    marginBottom: "15px",
  },

  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#0077ff",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },

  foodCard: {
    background: "#fff8f0",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "0.3s",
    textAlign: "center",
    paddingBottom: "20px",
  },

  foodImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },

  foodTitle: {
    marginTop: "15px",
    color: "#d35400",
  },

  foodText: {
    color: "#555",
    fontSize: "17px",
  },

  recipeBtn: {
    marginTop: "15px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#ff5722",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;