import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import test from './components/test.vue'
import Write from './components/Write.vue'
import Chat from './components/Chat.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Register from './components/Register.vue'
import EditPorifle from './components/EditProfile.vue'
import store from './store.js'


const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter: () => {
      if (store.state.isLogin == false) {
        return '/login'

      }
    }
  },
  {
    name: 'profile',
    path: "/profile/:id",
    component: Profile,
    beforeEnter: () => {
      if (store.state.isLogin == false) {
        return '/login'

      }
    }
  },
  {
    path: "/edit/profile",
    component: EditPorifle,
    beforeEnter: () => {
      if (store.state.isLogin == false) {
        return '/login'

      }
    }
  },

  {
    path: "/register",
    component: Register,
  },
  {
    path: "/write",
    component: Write,
    beforeEnter: () => {
      if (store.state.isLogin == false) {
        return '/login'

      }
    }
  },
  {
    path: "/chat",
    component: Chat,
    beforeEnter: () => {
      if (store.state.isLogin == false) {
        return '/login'

      }
    }
  },
  {
    path: "/test",
    component: test,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 