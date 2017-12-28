// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import axios from 'axios';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { VueGoogleAutocomplete },
  data: {
    location: '',
    address: '',
    formatted_address: '',

    // GeoCode based on the google city results
    geocode: {
      lat: '',
      long: ''
    },
    // current cities listed weather
    weather: {
      temperature: '',
      wind: '',
      desc: '',
      icon: ''
    }
  },

  mounted() {
    // To demonstrate functionality of exposed component functions
    // Here we make focus on the user input
    this.$refs.address.focus();
  },

  methods: {
    /**
    * When the location found
    * @param {Object} addressData Data of the found location
    * @param {Object} placeResultData PlaceResult object
    * @param {String} id Input container ID
    */
    getAddressData: function (addressData, placeResultData, id) {
      this.location = addressData;
      this.updateGeocode({lat: addressData.latitude, long: addressData.longitude})
      this.formatted_address = placeResultData.formatted_address;

      this.lookupWeather();
    },
    updateGeocode(loc){
      if(!loc){
        this.geocode.lat = '';
        this.geocode.long = '';
      }else{
        // Verify that a 2 valid value keeys, latitude & longitude are supplied
        if(Object.keys(loc).length > 1){
          if((loc.lat) && (loc.lat)){
            this.geocode = loc
            // console.log(this.geocode);
          }
        }
      }
    },

    clearWeather(){
      this.weather = {
        temperature: '',
        wind: '',
        desc: '',
        icon: ''
      }
    },
    lookupWeather(){
      // verify the specified location exists, with valid latitude/longitude values
      if(this.location &&
        (this.geocode.lat != '') && (this.geocode.long != '')){

        // let api_link = `http://api.openweathermap.org/data/2.5/weather?lat=${this.geocode.lat}&lon=${this.geocode.long}&units=imperial&appid=cfaa2c01a61cbbef0ffa75e68bd33666`
        // let api_link = `https://api.darksky.net/forecast/0137b8413801ea36e9b83161b6793a17/${this.geocode.lat},${this.geocode.long}?exclude=minutely,hourly,daily,alerts`
        // https://forum.freecodecamp.org/t/cross-domain-error-i-thought-im-using-jsonp-so-whats-wrong/11012/6
        // cords-anywhere is used an https proxy: https://forum.freecodecamp.org/t/solved-having-trouble-getting-response-from-dark-sky-api/100653/4
        // let api_link = `https://cors.io/?https://api.darksky.net/forecast/0137b8413801ea36e9b83161b6793a17/${this.geocode.lat},${this.geocode.long}?exclude=minutely,hourly,daily,alerts`
        // Alternative PROXY links to get around CORS errors
        let api_link = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0137b8413801ea36e9b83161b6793a17/${this.geocode.lat},${this.geocode.long}?exclude=minutely,hourly,daily,alerts`
        //let api_link = `https://jsonp.afeld.me/?callback=myCallback&url=https://api.darksky.net/forecast/0137b8413801ea36e9b83161b6793a17/${this.geocode.lat},${this.geocode.long}?exclude=minutely,hourly,daily,alerts`

        axios.create({
          baseURL: window.location.origin,
          responseType: 'json',
          headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
            "Content-Type":"application/json",
            "dataType":"application/json"
          }
        })
        axios.get(api_link)
        .then((response) => {
          let forcast = response.data.currently;
          this.weather.temperature = Math.floor(forcast.temperature);
          this.weather.wind = Math.floor(forcast.windSpeed);
          this.weather.desc = forcast.summary.toLowerCase();
          this.weather.icon = forcast.icon.toLowerCase();
        })
        .catch((error) => {
          this.clearWeather();
          console.log(error);
        })
      }
    },

    formatDesc(str=''){
      if(str != ''){
        str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
          return letter.toUpperCase();
        });
      }
      return str;
    },

    weatherIcon(){
      switch (this.weather.icon){
        case 'clear-day':
          return 'wi-day-sunny'
        case 'clear-night':
          return 'wi-night-clear'
        case 'cloudy':
        case 'partly-cloudy-day':
          return 'wi-cloudy'
        case 'partly-cloudy-night':
          return 'wi-night-partly-cloudy'
        case 'fog':
          return 'wi-fog'
        case 'rain':
          return 'wi-rain'
        case 'sleet':
          return 'wi-sleet'
        case 'snow':
          return 'wi-snow'
        case 'wind':
          return 'wi-windy'
        default:
          return 'wi-na';
          break;
      }
    }
  }
})
