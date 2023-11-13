const API_KEY = "8ebb1f3b14d8c0fd1074908318457fb0";
const LANG = "he";
const locations_ar = ["Eilat", "London", "New York", "Alaska"];
const locations_obj_ar = [];

window.onload = async() => {
    for (const loc_name of locations_ar) {
        await getLocFromName(loc_name);
    }
    // for (const loc of locations_obj_ar) {
    //     await getFullInfo(loc);
    // }
};

// const getFullInfo = async(_data) => {
//     console.log("data", _data);
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${_data.lat}&&lon=${_data.lon}&appid=${API_KEY}&lang=${LANG}`;

//   let resp = await fetch(url)
//   let data = await resp.json()
//   console.log("11data" , data);
//     let loc = new WeatherLocation(".row", data, _data);
//     loc.render();
// };


const getLocFromName = async (_loc_name) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${_loc_name}&units=metric&lang=he&appid=${API_KEY}`;

  let resp = await fetch(url)
  let data = await resp.json()
  console.log("11data" , data);
    let loc = new WeatherLocation(".row", data, _loc_name);
    loc.render();
};
