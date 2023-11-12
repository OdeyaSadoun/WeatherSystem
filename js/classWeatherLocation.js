class WeatherLocation{
    constructor(_parent, _item){
        this.parent = _parent;
        this.name = _item.city.name;
        this.description = _item.list.weather.description;
        this.temp= _item.list.main.temp;
        this.feels_like; //--------
        this.humidity = _item.list.main.humidity;
    }

    render(){
    //     let loc = document.createElement("div");
    //     loc.innerHTML = `
    //     <div class="card m-4" style="width: 18rem">
    //     <img src="..." class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h5 class="card-title">ניו יורק</h5>
    //       <p class="card-text">אובך</p>
    //     </div>
    //   </div>
    //     `;

    }
}