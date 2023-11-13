class WeatherLocation {
  constructor(_parent, _item, _loc_name) {
    this.parent = _parent;
    this.en_name = _loc_name;
    this.description = _item.weather["0"].description;
    this.temp = _item.main.temp;
    this.feels_like = _item.main.feels_like;
    this.humidity = _item.main.humidity;
    this.icon = _item.weather.icon;
    this.name = _item.name;
  }

  render() {
    let enNameLower = this.en_name.toLowerCase();
    console.log("lower: ", enNameLower);
    let loc = document.createElement("div");
    loc.innerHTML = `
        <div class="card m-3">
        <img src="../images/${enNameLower}.jpg"  class="card-img-top image_loc" alt="${this.en_name}">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <div class="temps d-flex justify-content-between">
          <div class=""d-dlex flex-column>
          <p>טמפ'</p>
          <p class="text-center">${this.temp}</p>
          </div>
          <div class=""d-dlex flex-column>
          <p>טמפ' מורגשת</p>
            <p class="text-center"> ${this.feels_like}</p>
          </div>
          <div class=""d-dlex flex-column>
          <p>לחות</p>
          <p class="text-center">${this.humidity}%</p>
          </div>
          </div>
        </div>
      </div>
        `;
    loc.className = "col-lg-3 col-md-6";

    document.querySelector(".row").append(loc);
  }
}
