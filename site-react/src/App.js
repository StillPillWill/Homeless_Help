// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Counter from './Counter';
import ToggleButton from './ToggleButton'; // Import the new component

function App() {
  const userName = "Learner";
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <Header />

      <main>
        <p>Welcome, {userName}! This is our first React application.</p>
        <p>Today's year is: {currentYear}.</p>
        <p>2 + 2 = {2 + 2}</p>

        <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card
            title="React Basics"
            description="Learn the fundamental concepts of React components and JSX."
            imageUrl="https://picsum.photos/id/237/300/200"
          />
          <Card
            title="Props in Action"
            description="Understand how to pass data from parent to child components."
            imageUrl="https://picsum.photos/id/250/300/200"
          />
          <Card
            title="Reusable Components"
            description="Discover the power of building modular and reusable UI elements."
          />
        </section>

        <Counter />
        <ToggleButton /> {/* Render the ToggleButton component */}

      </main>

      <Footer />
    </div>
  );
}

export default App;