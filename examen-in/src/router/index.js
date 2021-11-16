import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Home from '@/views/Home/Home'
import AddSucursal from '@/views/Sucursales/AddSucursal'
import UpdtSucursal from '@/views/Sucursales/UpdateSucursal'
import Inventario from '@/views/Sucursales/Inventario'
import ModProducto from '@/views/Productos/ModProducto'
import AddProducto from '@/views/Productos/AddProducto'
import Bitacora from '@/views/Bitacora/Bitacora'
import Productos from '@/views/Productos/Productos'
import Registro from '@/views/Login/Registro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/addsucursal',
      name: 'AddSucursal',
      component: AddSucursal
    },
    {
      path: '/updtsucursal',
      name: 'UpdtSucursal',
      component: UpdtSucursal
    },
    {
      path: '/addproducto',
      name: 'AddProducto',
      component: AddProducto
    },
    {
      path: '/modproducto',
      name: 'ModProducto',
      component: ModProducto
    },
    {
      path: '/bitacora',
      name: 'Bitacora',
      component: Bitacora
    },
    {
      path: '/productos',
      name: 'Productos',
      component: Productos
    },
    {
      path: '/inventario',
      name: 'Inventario',
      component: Inventario
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
  ]
})
