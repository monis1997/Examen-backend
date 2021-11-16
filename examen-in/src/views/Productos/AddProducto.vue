<template>
  <div class="AddProducto">
    <Menu />
    <h1>Producto Nuevo</h1>
    <div class="content-form">
      <div class="formulario">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nombre"
              placeholder="laptop"
              class="m-3"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Sku:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.sku"
              placeholder="123-456-798-asd"
              class="m-3"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Cantidad:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.cantidad"
              placeholder="12"
              class="m-3"
              required
            ></b-form-input>
          </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Sucursal:"
                label-for="input-2"
            >
            </b-form-group>
            <select class="form-select m-3" aria-label="Default select example" v-model="form.sucursalId">
              <option value="0" selected disabled>Elige la sucursal</option>
              <option
                v-for="suc in sucursales"
                :value="suc.id"
                :key="suc.id"
              >
                {{ suc.nombre }}
              </option>
            </select>

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
        nombre: "",
        sku: "",
        cantidad: 0,
        sucursalId: 0,
      },
      sucursales: [],
      user: 0,
      //url: 'http://localhost/itsapp/api/php/'
    };
  },
  mounted() {
    this.getSucursales();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.user = localStorage.user;
      this.axios
        .post("https://localhost:44328/api/Producto/addProducto", this.form, {
          headers: {
            idUser: this.user,
          },
        })
        .then((respsonse) => {
          console.log("respsonse", respsonse.data);
          if (respsonse.status == 200) {
            alert("Producto Agregado");
          } else {
            alert("Ocurrio un error");
          }
        });
    },

    getSucursales() {
      this.user = localStorage.user;
      this.axios
        .get("https://localhost:44328/api/Sucursal/ObtenerSucursales")
        .then((respsonse) => {
          this.sucursales = respsonse.data;

          console.log("respsonse", this.sucursales);
          if (respsonse.status == 200) {
          } else {
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
  margin: 20px;
  padding: 50px;
  width: 40%;
}
</style>