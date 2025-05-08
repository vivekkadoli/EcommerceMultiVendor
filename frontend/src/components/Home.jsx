import React from "react";

function Home() {
  return (
    <section className="home-section">
      {/* <img
        src="/SwamikrupaTradersPRIMARY.jpg"
        alt="Swamikrupa Traders Logo"
        className="main-logo"
      /> */}
<img
  src="/SwamikrupaTradersPRIMARY.jpg"
  alt="Swamikrupa Traders Logo"
  className="main-logo"
  style={{
    width: "120px", // Adjust the size of the logo
    height: "120px", // Make it a square
    borderRadius: "50%", // Circular shape
    backgroundColor: "white", // White background
    padding: "5px", // Add padding to create space around the logo
    objectFit: "contain", // Ensure the logo fits within the circle
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow for a polished look
  }}
/>
      <h1>Welcome to Swamikrupa Traders</h1>
      <p className="subtitle">Your Gateway to Reliable Exports</p>
      <div className="home-highlight">
        <strong>Proud Indian Exporter</strong>
        <p>
          Specializing in premium Turmeric Finger, Turmeric Bulb, and Turmeric
          Powder. Showcasing the richness of Indian culture to the world with a
          focus on purity and quality.
        </p>
      </div>
    </section>
  );
}

export default Home;
