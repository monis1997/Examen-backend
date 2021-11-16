<template>
  <div class="Registro">
    <h1>Nuevo Usuario</h1>
    <div class="content-form">
      <div class="formulario">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Nickname:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.nickname"
              placeholder="Moni123"
              class="m-3"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Sku:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.passwd"
              placeholder="*****"
              class="m-3"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="mt-5" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "Home",
  components: {
    Menu,
  },
  data() {
    return {
      form: {
        nickname: "",
        passwd: "",
      },
      user: 0,
      //url: 'http://localhost/itsapp/api/php/'
    };
  },
  mounted() {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.user = localStorage.user;
      this.axios
        .post("https://localhost:44328/api/Usuarios/addUser", this.form, {
          headers: {
            idUser: this.user,
          },
        })
        .then((respsonse) => {
          console.log("respsonse", respsonse.data);
          if (respsonse.status == 200) {
            this.$router.push("/");
          } else {
            alert("Ocurrio un error");
          }
        });
    },
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