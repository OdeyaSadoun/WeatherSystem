class WeatherLocation{
    constructor(_parent, _item, _loc_item){
        this.parent = _parent;
        this.loc = _loc_item;
        this.description = _item.weather.description;
        this.temp= _item.main.temp;
        this.feels_like = _item.main.feels_like; 
        this.humidity = _item.main.humidity;
        this.icon = _item.weather.icon; 
        this.name = _item.name;
    }

    render(){
        let loc = document.createElement("div");
        loc.innerHTML = `
        <div class="card m-4" style="width: 18rem">
   
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
        </div>
      </div>
        `;

        document.querySelector(".row").append(loc);

    }
}