<template>
  <div class="bitacora">
    <Menu />
    <h1>Bitacora</h1>
    <table class="table table-dark table-striped mt-3" v-if="bitacora != null">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">idUsuario</th>
          <th scope="col">Movimiento</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in bitacora" :key="item.id">
          <th scope="row"></th>
          <td>{{ item.idUser }}</td>
          <td>{{ item.movimiento }}</td>
          <td>{{ item.fecha }}</td>
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
      bitacora: [],
      //url: 'http://localhost/itsapp/api/php/'
    };
  },
  methods: {
    getSucursales() {
      this.user = localStorage.user;
      this.axios
        .get("https://localhost:44328/api/Bitacora/ObtenerBitacora")
        .then((respsonse) => {
          this.bitacora = respsonse.data;
          console.log("respsonse", this.bitacora);
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