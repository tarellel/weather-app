<script>
export default {
  name: 'app',
}
</script>

<style>
/* Attributes */
body{
  background-color: #D2ECF9;
  /*background: url('/static/photo-1428940253195-53483a1de2e6.jpeg') no-repeat center center fixed;*/
  background: url('/static/photo-1466854076813-4aa9ac0fc347.jpeg') no-repeat center center fixed;
  background-size: cover;
  color:#2c3e50 !important;


  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 500;
  padding: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a, a:active, a:visited{
  color: #00ffd4;
}

/* Elements/Layout */
#app {
  color: #2c3e50;
  margin-top: 60px;
}

.ts{
  text-shadow: 0 1px 2px rgba(0,0,0,.25);
}

h3{ color: #797979 !important; }

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
  /* color: #B80257; */
  /* color: #fee856; */
  color: #028bb8;
}
.intro-icons {
  font-size: 15px;
  color: #B80257;
  text-align: center;
}
p{ color: #2c3e50; }
footer, footer>p, .details p, small{
  font-weight: 700;
}
.container{
  min-height:100% !important;
  background: rgba(255, 255, 255, .85);
  border-radius: 7px;
  padding: 1.5em;
  color: #a7a7a7 !important;
}
footer{
  padding: 5em 0;
  position: absolute;
  bottom: 0;
}
</style>
