<template>
  <div class="Login">
    <h3>Ingresa</h3>
    <div id="alert" class="alert alert-danger" role="alert">
        Verifica tus datos!!
      </div>
    <div class="content-form">
      
      <div class="formulario">
        <form id="formContent" @submit="login">
          <div class="mb-3">
            <label for="inputUser" class="form-label">Usuario</label>
            <input
              type="text"
              class="form-control"
              id="inputUser"
              aria-describedby="emailHelp"
              v-model="nickname"
            />
          </div>
          <div class="mb-3">
            <label for="labelPasswd" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="inputPasswd"
              v-model="passwd"
            />
          </div>
          <button type="submit" class="btn btn-success">Ingresar</button>
          <router-link to="/Registro" class="btn btn-primary">Registro</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Login",
  data() {
    return {
      user: [],
      nickname: "",
      passwd: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();

      let dataInicio = {
        nickname: this.nickname,
        passwd: this.passwd,
      };

      console.log(dataInicio);

      this.inicioSesion(dataInicio);

      
    },
    inicioSesion(data) {
      this.axios
        .post("https://localhost:44328/api/Usuarios/MatchUser", data)
        .then((responce) => {
          console.log("responce login", responce.data);

          if (responce.status == 200) {
            if (responce.data == "Verifica tus datos") {
              $('#alert').show(0).delay(3000).hide(0);
            } else {
              localStorage.user =  responce.data;
              this.$router.push('Home'); //atrapamos el token,id y rol desde el servidor y su nombre
            }
          } else {
          }
          
          
        });
    },
  },
  mounted() {
    $("#alert").hide()
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formulario {
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px;
  padding: 50px;
  width: 30%;
}
</style>