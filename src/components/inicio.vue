<template>
  <div class="contenido">
    <div class="linea-decorativa">
      <div class="circulo"></div>
      <div class="circulo"></div>
      <div class="circulo"></div>
    </div>
    <div class="left">
      <h2>PANDO</h2>
      <p>Pando, en el norte de Bolivia, es el departamento menos poblado del país. Su capital es Cobija, rodeada por la Amazonía. Destaca por su biodiversidad, la producción de castaña y el comercio fronterizo. Su riqueza natural y cultural lo hacen único.</p>

      <button>Explorar</button>

      <div class="redes">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <div class="right">
      <img src="@/assets/escudo.png" alt="">
      <div class="popular">
        Popular
        <!--<reloj/>-->
      </div>
      <div class="contenedor-fotos">
        <img src="@/assets/de0907c5e58a94d1ebd7467f2e8fca8f.jpg" alt="">
        <img src="@/assets/e457554da1363549220afa54a8e5eb57.jpg" alt="">
        <img src="@/assets/GatoFino.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
/*import reloj from './reloj.vue';*/
export default {
  name: 'InicioComponent',
  /*components: {
    reloj
  }*/
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito';
}
body {
    background: linear-gradient(to top, transparent, rgba(239, 46, 28, 0.5)), url('@/assets/fondo.jpg');
    background-size: cover;
    background-attachment: scroll; /* Cambiado a scroll */
    min-height: 100vh;
    display: flex;
    will-change: transform;
    justify-content: center;
    align-items: center;
}

.contenedor{
    max-width: 1000px;
    background-color: rgba(0,0,0,.7);
    border-radius: 30px;
    padding: 50px;
    color: #fff;
}
.contenedor header{
    overflow: hidden;
}
.contenedor header h1{
    float: left;
}
.contenedor header nav{
    float: left;
}
.contenedor header nav ul{
    list-style: none;
    display: flex;
    align-items: center;
}
.contenedor header nav ul li{
    margin: 0 10px;
}
.contenedor header nav ul li a{
    text-decoration: none;
    color: #fff;
    line-height: 33px;
    font-size: 14px;
    padding: 5px 10px;
    transition: .5s;
    border-radius: 20px;
}
.contenedor header nav ul li a:hover{
    background-color: #000;
    color: #fff;
}
.contenedor header .busqueda{
    float: right;
}
.contenedor header .busqueda input{
    display: inline-block;
    width: 200px;
    border: none;
    background-color: rgba(0,0,0,.4);
    padding: 7px;
    outline: none;
    color: #fff;
    border-right: 3px;
    transition: .5s;
    opacity: 0;
}
.contenedor header .busqueda:hover input{
    opacity: 1;
}
.contenedor header .busqueda i{
    cursor: pointer;
}
.contenedor .contenido{
    display: flex;
    position: relative;
}
.contenido .linea-decorativa{
    position: absolute;
    height: 250px;
    border-left: 2px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 50%;
    transform: translateY(-50%);
}
.contenido .linea-decorativa .circulo{
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: -9px;
}

.contenedor .contenido .left{
    width: 50%;
    margin-top: 30px;
    padding-left: 50px;
}
.contenedor .contenido .left h2{
    padding-top: 60px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
}
.contenedor .contenido .left p{
    margin-bottom: 60px;
    font-size: 14px;
}
.contenedor .contenido .left button{
    display: inline-block;
    border: none;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 5px 20px;
    border-radius: 30px;
    margin-bottom: 60px;
    transition: .5s;
    cursor: pointer;
}
.contenedor .contenido .left button:hover{
    background-color: #000;
    color: #fff;
}
.contenedor .contenido .left .redes{
    font-size: 12px;
    width: fit-content;
    padding-bottom: 7px;
    border-bottom: 2px solid #fff;
    width: 100px;
    display: flex;
    justify-content: space-between;
}
.contenedor .contenido .left .redes a{
    text-decoration: none;
    color: #fff;
}
.contenedor .contenido .right{
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    text-align: right;
}
.contenedor .contenido .right .popular{
    border-bottom: 2px solid #fff;
    width: 100px;
    padding-bottom: 5px;
    margin-bottom: 30px;
}
.contenedor .contenido .right .contenedor-fotos{
    display: flex;
    justify-content: end;
}

.contenedor .contenido .right .contenedor-fotos img{
    width: 25%;
    margin: 0 10px;
    border-radius: 10px;
}

</style>