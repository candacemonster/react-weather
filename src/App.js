import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
      <div className="App">
        <div className="container">
        <Weather defaultCity="New York" />
        
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
              href="https://github.com/wecodeschool/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://suspicious-beaver-111c4d.netlify.com/"
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