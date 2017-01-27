

<script>
export default {
  name: 'app',
}
</script>

<style>
/* Attributes */
body{
  background-color: #D2ECF9;
  background: url('/static/photo-1428940253195-53483a1de2e6.jpeg') no-repeat center center fixed;
  background-size: cover;
  color: #f6faf7;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 500;
  padding: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a, a:active, a:visited{ color: #1fab89; }

/* Elements/Layout */
#app {
  color: #2c3e50;
  margin-top: 60px;
}

h3 { color: #1fab89;}

.weatherIcon{
  font-size: 40px;
  display: inline-block;
  font-family: 'weathericons';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
  min-width: 54px;
  text-align: center;
  /*color: #B80257;*/
  color: #fee856;
}
.intro-icons {
  font-size: 15px;
  color: #B80257;
  text-align: center;
}
p{ color: #2c3e50; }
footer, footer>p, .details p, small{
  font-weight: 700;
  color: #f6faf7;
}
.container{
 min-height:100% !important;
}
footer{
  padding: 5em 0;
  position: absolute;
  bottom: 0;
}
</style>
