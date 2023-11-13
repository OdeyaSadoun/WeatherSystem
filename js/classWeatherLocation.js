class WeatherLocation {
  constructor(_parent, _item, _loc_name) {
    this.parent = _parent;
    this.en_name = _loc_name;
    this.description = _item.weather["0"].description;
    this.temp = _item.main.temp;
    this.feels_like = _item.main.feels_like;
    this.humidity = _item.main.humidity;
    this.name = _item.name;
  }

  currentIcon() {
   
    if(Math.round(this.temp) < 20){
        return `<i class="fa fa-bolt" aria-hidden="true" style="color:rgb(42, 6, 141)"></i>`;
    }
    else if(Math.round(this.temp) < 30){
        return `<i class="fa fa-cloud" aria-hidden="true" style="color:lightblue"></i>`;
    }
    else{
        return `<i class="fa fa-sun-o" aria-hidden="true" style="color:gold"></i>`;
    }
  }

  render() {
    let en_name_lower = this.en_name.toLowerCase();

    let loc = document.createElement("div");
    loc.innerHTML = `
        <div class="card m-3">
        <img src="../images/${en_name_lower}.jpg"  class="card-img-top image_loc" alt="${
      this.en_name
    }">
        <div class="card-body d-flex flex-column">
            <div class="d-flex my-3 justify-content-between">
                <div>
                    <h2 class="card-title">${this.name}</h2>
                    <p class="card-text">${this.description}</p>
                </div>
                <div class="icon_div">
                ${this.currentIcon()}
                </div>
            </div>
            <div class="temps d-flex justify-content-between">
                <div class=""d-dlex flex-column>
                    <p class="fw-bold">טמפ'</p>
                    <p class="text-center ltr">${Math.round(this.temp)}&deg;C</p>
                </div>
                <div class=""d-dlex flex-column>
                    <p class="fw-bold">טמפ' מורגשת</p>
                    <p class="text-center ltr"> ${Math.round(this.feels_like)}&deg;C</p>
                </div>
                <div class=""d-dlex flex-column>
                    <p class="fw-bold">לחות</p>
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
