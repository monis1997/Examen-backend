<template>
  <div class="Producto">
    <Menu />
    <h1>Todos los productos</h1>
    <p v-if="productos != null">Productos en todas las sucursales: {{ productos.length }}</p>
    <table class="table table-dark table-striped mt-3" v-if="productos != null">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Sku</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Sucursal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productos" :key="item.id">
          <th scope="row"></th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.Sku }}</td>
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
      productos: [],
      productosSum: 0,
      //url: 'http://localhost/itsapp/api/php/'
    };
  },
  methods: {
    getSucursales() {
      this.user = localStorage.user;
      this.axios
        .get("https://localhost:44328/api/Sucursal/ObtenerProdBySucur")
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