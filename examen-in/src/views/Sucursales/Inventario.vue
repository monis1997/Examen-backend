<template>
  <div class="Inventario">
    <Menu />
    <h1>Inventario por Sucursal</h1>
    <div class="content">
      <b-form-group id="input-group-2" label="Sucursal:" label-for="input-2">
      </b-form-group>
      <select
        class="form-select ml-5 mr-5 mt-1"
        aria-label="Default select example"
        v-model="idSuc"
        @change="getProductos()"
      >
        <option value="0" selected disabled>Elige la sucursal</option>
        <option v-for="suc in sucursales" :value="suc.id" :key="suc.id">
          {{ suc.nombre }}
        </option>
      </select>
    </div>

    <p v-if="productos != null">Productos en la sucursal: {{ productos.length }}</p>
    <table class="table table-dark table-striped mt-3" v-if="productos != null">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">SKU</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Sucursal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productos" :key="item.id">
          <th scope="row"></th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.sku }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.sucursal.nombre }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import $ from "jquery";
export default {
  name: "UpdtProducto",
  components: {
    Menu,
  },
  data() {
    return {
      sucursales: [],
      productos: [],
      idSuc: 0,
      form: {
        nombre: "",
        sku: "",
        cantidad: 0,
        sucursalId: 0,
      },
      user: 0,
      //url: 'http://localhost/itsapp/api/php/'
    };
  },
  methods: {

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
    getProductos() {
      this.user = localStorage.user;
      console.log(this.idSuc);

      this.axios
        .get(
          "https://localhost:44328/api/Sucursal/ObtenerProdBySucurl/" +
            this.idSuc
        )
        .then((respsonse) => {
          this.productos = respsonse.data;
          console.log("respsonse", this.productos);
          if (respsonse.status == 200) {
          } else {
          }
        });
    },

  },

  mounted() {
    this.getSucursales();
  },
};
</script>