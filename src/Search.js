import "./Search.css";

export default function App() {
  return (
    <div className="Search">
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              class="form-control"
              id="city-input"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
          <div class="col-3">
            <button class="btn btn-success w-100" id="current-location-button">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
