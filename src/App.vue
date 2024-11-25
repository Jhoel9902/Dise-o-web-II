<template>
  <section class="contenedor">
    <header>
      <router-link to="/"><h1 id="inc">PANDO</h1></router-link>
      <nav>
        <ul>
          <li><router-link to="/Turismo">Turismo</router-link></li>
          <li><router-link to="/Cultura">Cultura</router-link></li>
          <li><router-link to="/Gastronomia">Gastronomia</router-link></li>
          <li><router-link to="/Hoteles">Donde Llegar</router-link></li>
          <li><router-link to="/Festividades">Festividades</router-link></li>
          <li><router-link to="/otro">Sobre nosotros</router-link></li>
        </ul>
      </nav>
      <reloj />
      <div class="busqueda">
        <input type="text" placeholder="Buscar">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
import reloj from './components/reloj.vue';
export default {
  name: 'App',
  components: {
    reloj
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600&display=swap');
@import 'animate.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito';
}

body {
  background: linear-gradient(to top, transparent, rgba(239, 46, 28, 0.5)), url('@/assets/fondo.jpg');
  background-size: cover;
  background-attachment: scroll;
  min-height: 100vh;
  display: flex;
  will-change: transform;
  justify-content: center;
  align-items: center;
}

.contenedor {
  max-width: 1000px;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 30px;
  padding: 50px;
  color: #fff;
}

.contenedor header {
  overflow: hidden;
}

.contenedor header h1 {
  float: left;
}

.contenedor header nav {
  float: left;
}

.contenedor header nav ul {
  list-style: none;
  display: flex;
  align-items: center;
}

.contenedor header nav ul li {
  margin: 0 5px;
}

.contenedor header nav ul li a {
  text-decoration: none;
  color: #fff;
  line-height: 33px;
  font-size: 14px;
  padding: 5px 10px;
  transition: .5s;
  border-radius: 20px;
}

.contenedor header nav ul li a:hover {
  background-color: #000;
  color: #fff;
}

.contenedor header .busqueda {
  float: right;
}

.contenedor header .busqueda input {
  display: inline-block;
  width: 200px;
  border: none;
  background-color: rgba(0, 0, 0, .4);
  padding: 7px;
  outline: none;
  color: #fff;
  border-right: 3px;
  transition: .5s;
  opacity: 0;
}

.contenedor header .busqueda:hover input {
  opacity: 1;
}

.contenedor header .busqueda i {
  cursor: pointer;
}

.fade-enter-active {
  animation: fadeIn 2s forwards;
}

.fade-leave-active {
  animation: fadeOut 2s forwards;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#inc {
  cursor: pointer;
  color: white;
  text-decoration: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
