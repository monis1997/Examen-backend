<template>
  <div class="Home">
    <Menu/>

    <div class="container-fluid">
      <br>
      <h1>Examen</h1>
      <br><br>
    </div>

    
    
  </div>
</template>


<script>
import Menu from '@/components/Menu'
export default {
name: 'Home',
components:{
      Menu
},
data () {
  return {
    sesion: false,
    band_home: false,
    url: 'https://zingularit.com/api/php/'
    //url: 'http://localhost/itsapp/api/php/'
  }
},
methods:{
testAPI(){
  this.axios.post(this.url + "testApi.php").then((responce) => {
      console.log(responce.data);
  });
},
Reset(){
  this.axios.post(this.url + "resetBD.php").then((responce) => {
      console.log(responce.data);
      if(responce.data==200){
        alert("BD Limpiada");
      }
  });
}
}
}
</script>


<style scoped>
.big-banner
{
  background-size: 100%;
  height: 500px; 
  padding-top: 150px;
}

.section-title {
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 5px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #e6636a;
  margin: 4px 10px;
}

.section-title p {
  margin: 0;
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #556270;
}

.icon-box {
  margin-bottom: 20px;
  padding: 30px;
  border-radius: 6px;
}

.icon-box i {
  float: left;
  color: #d9232d;
  font-size: 40px;
}

.icon-box h4 {
  margin-left: 70px;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.icon-box h4 a {
  color: #556270;
  transition: 0.3s;
}

.icon-box p {
  margin-left: 70px;
  line-height: 24px;
  font-size: 14px;
}

.icon-box:hover h4 a {
  color: #d9232d;
}
</style>