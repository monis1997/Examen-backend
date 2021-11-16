<template>
  <div class="UpdtSucursal">
    <Menu />
    <h1 class="mt-5">Sucursales</h1>
    <div class="content-form mt-3">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sucursales" :key="item.id">
            <th scope="row"></th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.direccion }}</td>
            <td>@{{ item.telefono }}</td>
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
                @click="deleteSucursal(item.id)"
              >
                Eliminar
              </button>
              <button
                class="btn btn-sm btn-success"
                @click="showInventario(item.id)"
              >
                ver Inventario
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--MODAL -->
    <b-modal
      ref="my-modal"
      hide-footer
      title="Modificar Sucursal"
      id="modal-lg"
      size="lg"
    >
      <div class="d-block text-center">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nombre"
              placeholder="Sucursal 1"
               class="mt-3 mb-3 ml-5 mr-5"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Direccion:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.direccion"
              placeholder="Av. Insurgentes"
               class="mt-3 mb-3 ml-5 mr-5"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Telefono:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.telefono"
              placeholder="449 121 9096"
              class="mt-3 mb-3 ml-5 mr-5"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="mt-5" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import $ from "jquery";
export default {
  name: "UpdtSucursal",
  components: {
    Menu,
  },
  data() {
    return {
      sucursales: [],
      idSuc: 0,
      form: {
        nombre: "",
        direccion: "",
        telefono: null,
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
        .post("https://localhost:44328/api/Sucursal/updateSucursal/"+this.idSuc, this.form, {
          headers: {
            idUser: this.user,
          },
        })
        .then((respsonse) => {
          console.log("respsonse", respsonse.data);
          if (respsonse.status == 200) {
            
            alert("Sucursal Modificada");
           
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

    deleteSucursal(id) {
      this.user = localStorage.user;
      this.axios
        .post("https://localhost:44328/api/Sucursal/deleteSucursal/" + id, {}, {
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

    showInventario(id){

    },

    showModal(data) {
        console.log(data)
        this.idSuc = data.id
        this.form.nombre = data.nombre
        this.form.direccion = data.direccion
        this.form.telefono = data.telefono
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