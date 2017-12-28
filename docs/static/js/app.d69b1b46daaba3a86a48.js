webpackJsonp([2,0],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=o(38),r=n(a),s=o(71),c=n(s),i=o(69),l=(n(i),o(68)),u=n(l),d=o(18),p=n(d);new c.default({el:"#app",components:{VueGoogleAutocomplete:u.default},data:{location:"",address:"",formatted_address:"",geocode:{lat:"",long:""},weather:{temperature:"",wind:"",desc:"",icon:""}},mounted:function(){this.$refs.address.focus()},methods:{getAddressData:function(e,t,o){this.location=e,this.updateGeocode({lat:e.latitude,long:e.longitude}),this.formatted_address=t.formatted_address,this.lookupWeather()},updateGeocode:function(e){e?(0,r.default)(e).length>1&&e.lat&&e.lat&&(this.geocode=e):(this.geocode.lat="",this.geocode.long="")},clearWeather:function(){this.weather={temperature:"",wind:"",desc:"",icon:""}},lookupWeather:function(){var e=this;if(this.location&&""!=this.geocode.lat&&""!=this.geocode.long){var t="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0137b8413801ea36e9b83161b6793a17/"+this.geocode.lat+","+this.geocode.long+"?exclude=minutely,hourly,daily,alerts";p.default.create({baseURL:window.location.origin,responseType:"json",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With, Content-Type","Content-Type":"application/json",dataType:"application/json"}}),p.default.get(t).then(function(t){var o=t.data.currently;e.weather.temperature=Math.floor(o.temperature),e.weather.wind=Math.floor(o.windSpeed),e.weather.desc=o.summary.toLowerCase(),e.weather.icon=o.icon.toLowerCase()}).catch(function(t){e.clearWeather(),console.log(t)})}},formatDesc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""!=e&&(e=e.toLowerCase().replace(/\b[a-z]/g,function(e){return e.toUpperCase()})),e},weatherIcon:function(){switch(this.weather.icon){case"clear-day":return"wi-day-sunny";case"clear-night":return"wi-night-clear";case"cloudy":case"partly-cloudy-day":return"wi-cloudy";case"partly-cloudy-night":return"wi-night-partly-cloudy";case"fog":return"wi-fog";case"rain":return"wi-rain";case"sleet":return"wi-sleet";case"snow":return"wi-snow";case"wind":return"wi-windy";default:return"wi-na"}}}})},36:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VueGoogleAutocomplete",props:{id:{type:String,required:!0},classname:String,placeholder:{type:String,default:"Start typing"},types:{type:String,default:"address"},country:{type:[String,Array],default:null},enableGeolocation:{type:Boolean,default:!1}},data:function(){return{autocomplete:null,autocompleteText:""}},watch:{autocompleteText:function(e,t){this.$emit("inputChange",{newVal:e,oldVal:t})}},mounted:function(){var e=this,t={};this.types&&(t.types=[this.types]),this.country&&(t.componentRestrictions={country:this.country}),this.autocomplete=new google.maps.places.Autocomplete(document.getElementById(this.id),t),this.autocomplete.addListener("place_changed",function(){var t=e.autocomplete.getPlace();if(!t.geometry)return void e.$emit("no-results-found",t);var o={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"},n={};if(void 0!==t.address_components){for(var a=0;a<t.address_components.length;a++){var r=t.address_components[a].types[0];if(o[r]){var s=t.address_components[a][o[r]];n[r]=s}}n.latitude=t.geometry.location.lat(),n.longitude=t.geometry.location.lng(),e.$emit("placechanged",n,t,e.id),e.autocompleteText=document.getElementById(e.id).value,e.onChange()}})},methods:{onFocus:function(){this.geolocate(),this.$emit("focus")},onBlur:function(){this.$emit("blur")},onChange:function(){this.$emit("change",this.autocompleteText)},onKeyPress:function(e){this.$emit("keypress",e)},clear:function(){this.autocompleteText=""},focus:function(){this.$refs.autocomplete.focus()},blur:function(){this.$refs.autocomplete.blur()},update:function(e){this.autocompleteText=e},geolocate:function(){var e=this;this.enableGeolocation&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var o={lat:t.coords.latitude,lng:t.coords.longitude},n=new google.maps.Circle({center:o,radius:t.coords.accuracy});e.autocomplete.setBounds(n.getBounds())})}}}},37:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},65:function(e,t){},68:function(e,t,o){var n=o(17)(o(36),o(70),null,null);e.exports=n.exports},69:function(e,t,o){o(65);var n=o(17)(o(37),null,null,null);e.exports=n.exports},70:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("input",{directives:[{name:"model",rawName:"v-model",value:e.autocompleteText,expression:"autocompleteText"}],ref:"autocomplete",class:e.classname,attrs:{type:"text",id:e.id,placeholder:e.placeholder},domProps:{value:e.autocompleteText},on:{focus:function(t){e.onFocus()},blur:function(t){e.onBlur()},change:e.onChange,keypress:e.onKeyPress,input:function(t){t.target.composing||(e.autocompleteText=t.target.value)}}})},staticRenderFns:[]}}});
//# sourceMappingURL=app.d69b1b46daaba3a86a48.js.map