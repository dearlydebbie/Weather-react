import "./Overview.css";

export default function App() {
  return (
    <div className="Overview">
      <div class="row">
        <div class="col-6">
          <h1 id="city-name">Lagos</h1>
          <ul class="description">
            <li id="date-description">Friday 10:00, moderate rain</li>
            <li>
              Humidity: <span id="humidity">96</span>%
            </li>
            <li>
              Wind: <span id="wind">4.6</span> km/h
            </li>
          </ul>
        </div>
        <div class="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="image"
            id="icon"
          />
          <span id="temperature">11</span>
          <a href="#" id="celsius" class="active">
            °C
          </a>{" "}
          |
          <a href="#" id="farenheit">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
