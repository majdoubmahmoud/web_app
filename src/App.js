import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Image-container">
          <img
            src="https://cdn3.emoji.gg/emojis/3239_pokerface.png"
            className="App-image"
            alt="placeholder"
          />
        </div>
        <div className="Personal-info">
          <h1>MAJDOUB Mahmoud</h1>
          <p>Email: majdoub_mahmoud@outlook.com</p>
          <p>Phone: +216 54302416</p>
          <p>Location: Tunis, Tunisia</p>
          <p>
            Portfolio:{" "}
            <a href="https://github.com/majdoubmahmoud">
              github.com/majdoubmahmoud
            </a>
          </p>
          <p>About Me: What you doing? what you at?</p>
        </div>
      </header>
    </div>
  );
}

export default App;
