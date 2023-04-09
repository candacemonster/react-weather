import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
      <div className="App">
        <div className="container">
        <Weather defaultCity="Las Vegas" />

          <footer>
            Coded by{" "}
            <a
              href="https://www.candacewoodbury.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Candace
            </a>{" "}
            open-sourced on{" "}
            <a
              href="https://github.com/candacemonster/react-weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://voluble-lebkuchen-852122.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  }