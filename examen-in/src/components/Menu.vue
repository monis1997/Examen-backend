<template>
  <div class="Menu">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Inventario</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="orange" text="Sucursales" left>
            <router-link to="/AddSucursal" class="btn">Nueva Sucursal</router-link>
            <router-link to="/UpdtSucursal" class="btn">Modificar Sucursal</router-link>
            <router-link to="/Inventario" class="btn">Inventarios</router-link>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="orange" text="Productos" left>
            <router-link to="/AddProducto" class="btn">Nuevo Producto</router-link>
            <router-link to="/ModProducto" class="btn">Modificar Producto</router-link>
            <router-link to="/Productos" class="btn">Productos</router-link>
          </b-nav-item-dropdown>
          <router-link to="/Bitacora" class="btn orange">Bitacora</router-link>

          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange{
  color: #ffffff;
}
</style>