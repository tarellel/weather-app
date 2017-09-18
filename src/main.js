// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Places from 'vue-places';
import axios from 'axios';

//Vue.use(VueAxios, axios)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { Places },
  data: {
    location: '',
    weather: {
      temperature: '',
      wind: '',
      desc: ''
    }
  },
  watch: {
    location(){
      if((this.location == '') && (this.weather.temperature != '')){
        this.clearWeather()
      }
    }
  },

  methods: {
    clearWeather(){
      this.weather = {
        temperature: '',
        wind: '',
        desc: ''
      }
    },
    lookupWeather(){
      let api_link = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.location + '&units=imperial&appid=cfaa2c01a61cbbef0ffa75e68bd33666'

      //console.log(api_link)
      axios.get(api_link)
      .then((response) => {
        //console.log(response.data)
        let weather = response.data
        this.weather.temperature = Math.floor(weather.main.temp);
        this.weather.wind = Math.floor(weather.wind.speed);
        this.weather.desc = weather.weather[0].description;
      })
      .catch((error) => {
        console.log(error)
      })
    },

    weatherIcon(){
      if(this.weather.desc.includes('cloudy') || this.weather.desc.includes('clouds')){
        return 'wi-cloudy'
      }else if (this.weather.desc.includes('raining')
                || this.weather.desc.includes('rain')
                || this.weather.desc.includes('mist')) {
        return 'wi-raindrops'
      }else if (this.weather.desc.includes('sunny') || this.weather.desc.includes('clear sky')){
        return 'wi-day-sunny'
      }else if (this.weather.desc.includes('windy')){
        return 'wi-day-windy'
      }else{
        // http://erikflowers.github.io/weather-icons/
        return 'wi-na'
      }
    }
  }
})
