<template>
  <div class="ModProducto">
    <Menu />
    <h1>Editar Productos</h1>
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

    <table class="table table-dark table-striped mt-3" v-if="productos != null">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">SKU</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Sucursal</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productos" :key="item.id">
          <th scope="row"></th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.sku }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.sucursal.nombre }}</td>
          <td>
            <b-button
              id="show-btn"
              size="sm"
              variant="primary"
              @click="showModal(item)"
              >Editar</b-button
            >
            <button
              class="btn btn-sm btn-danger"
              @click="deleteProducto(item.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal
      ref="my-modal"
      hide-footer
      title="Modificar Sucursal"
      id="modal-lg"
      size="lg"
    >
      <div class="d-block text-center">
        <div class="formulario">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Nombre:"
              label-for="input-1"
            >
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
            <select
              class="form-select m-3"
              aria-label="Default select example"
              v-model="form.sucursalId"
            >
              <option value="0" selected disabled>Elige la sucursal</option>
              <option v-for="suc in sucursales" :value="suc.id" :key="suc.id">
                {{ suc.nombre }}
              </option>
            </select>

            <b-button type="submit" class="mt-5" variant="primary"
              >Submit</b-button
            >
          </b-form>
        </div>
      </div>
    </b-modal>
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
    onSubmit(event) {
      event.preventDefault();
      this.user = localStorage.user;
      this.axios
        .post(
          "https://localhost:44328/api/Producto/updateProducto/" + this.form.sucursalId,
          this.form,
          {
            headers: {
              idUser: this.user,
            },
          }
        )
        .then((respsonse) => {
          console.log("respsonse", respsonse.data);
          if (respsonse.status == 200) {
            alert("Producto Modificado");

            this.getSucursales();
          } else {
            alert("Ocurrio un error");
          }
          hideModal();
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
    deleteProducto(id) {
      this.user = localStorage.user;
      this.axios
        .post("https://localhost:44328/api/Sucursal/deleteSucursal/" + id, {
          headers: {
            idUser: this.user,
          },
        })
        .then((respsonse) => {
          console.log("respsonse", respsonse.data);
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

    showInventario(id) {},

    showModal(data) {
      console.log(data);
      this.idSuc = data.id;
      this.form.nombre = data.nombre;
      this.form.sku = data.sku;
      this.form.cantidad = data.cantidad;
      this.form.sucursalId = data.sucursalId;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },

  mounted() {
    this.getSucursales();
  },
};
</script>