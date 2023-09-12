import { createRouter, createWebHashHistory } from "vue-router";
import Compras from '../components/compras_Com.vue'
import Ventas from '../components/ventas_Com.vue'
import Home from '../components/home_Com.vue'
import Login from '../components/login_Com'
import Registrar from '../components/registrar_Com'
import Usuarios from '../components/usuarios_Com'
const routes =[
    {
        path: '/compras',
        name: 'Compras',
        component: Compras
    },
    {
        path: '/ventas',
        name: 'Ventas',
        component: Ventas
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/registrar',
        name: 'Registrar',
        component: Registrar
    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
    }

]

const router =  createRouter({
    history: createWebHashHistory(),routes
});

export default router;