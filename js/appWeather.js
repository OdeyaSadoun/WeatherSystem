const API_KEY = "8ebb1f3b14d8c0fd1074908318457fb0";
const LANG = "he";
const locations_ar = ["Eilat", "London", "New York", "Alaska"];
const locations_obj_ar = [];

window.onload = async() => {
    for (const loc_name of locations_ar) {
        await getLocFromName(loc_name);
    }
};


const getLocFromName = async (_loc_name) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${_loc_name}&units=metric&lang=he&appid=${API_KEY}`;

    axios.get(url)
    .then((resp) =>{
        let loc = new WeatherLocation(".row", resp.data, _loc_name);
        loc.render();
    })
};
