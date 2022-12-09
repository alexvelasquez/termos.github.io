import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  data() {
    return {
      termos: [
        {
          id:1,
          titulo: "Termo Jarra Termica 1500ml",
          ranking: 4.5,
          descripcion: `El aislamiento por vacío de pared doble aísla la temperatura para preservar el sabor y la frescura.`,
          src: `${process.env.BASE_URL}images/termo_negro.jpg`,
        },
        {
          id:2,
          titulo: "Termo Matero 700 Ml Rojo",
          ranking: 3.5,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_rojo.jpg`,
        },
        {
          id:3,
          titulo: "Termo Matero 700 Ml Rosa",
          ranking: 4.5,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_rosa.jpg`,
        },
        {
          id:4,
          titulo: "Termo Matero 700 Ml Plata",
          ranking: 3.5,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_plateado.webp`,
        },
        {
          id:5,
          titulo: "Jarra Termica roja 1500ml",
          ranking: 4.5,
          descripcion: `El aislamiento por vacío de pared doble aísla la temperatura para preservar el sabor y la frescura.`,
          src: `${process.env.BASE_URL}images/termo_rojo_2.jpg`,
        },
        {
          id:6,
          titulo: "Termo Matero 500 Ml Rojo",
          ranking: 4,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_rojo.jpg`,
        },
        {
          id:7,
          titulo: "Termo Matero 500 Ml Rosa",
          ranking: 5,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_rosa.jpg`,
        },
        {
          id:8,
          titulo: "Termo Matero 500 Ml Plata",
          ranking: 5,
          descripcion: `El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios producidos`,
          src: `${process.env.BASE_URL}images/termo_plateado.webp`,
        },
      ],
    };
  },
  render: h => h(App)
}).$mount('#app')
