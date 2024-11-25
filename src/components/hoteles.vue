<template>
    <div class="contenido">
      <div class="linea-decorativa">
        <div class="circulo"></div>
        <div class="circulo"></div>
        <div class="circulo"></div>
      </div>
      <div class="left">
        <div class="contenido_hoteles">
      <div class="hoteles">
        <h2>Hoteles Recomendados en Pando</h2>
        <ul>
          <li>
            <h3 @click="link1('https://www.facebook.com/abunahotel/?locale=es_LA')">Hotel Abuna</h3>
            <p class="direccion"><img class="hoteles_img" src="@/assets/abuna.jpeg" alt="Hotel Abuna">Dirección: Av. 16 de Julio<br>Tel: +591-3-842-0266</p>
          </li>
          <li>
            <h3 @click="link2('https://www.facebook.com/p/Hotel-Estrella-del-Norte-100057310695621/')">Hotel Estrella del Norte</h3>
            <p class="direccion"><img class="hoteles_img" height="250px" src="@/assets/estrella.jpg" alt="Hotel estrella">Dirección: Calle Conavi #48<br>Tel: +591-3-842-2113</p>
          </li>
          <li>
            <h3 @click="link3('https://www.facebook.com/HotelElCristo/?locale=es_LA')">Hotel El Cristo</h3>
            <p class="direccion"><img class="hoteles_img" height="250px" src="@/assets/cristo.jpg" alt="Hotel cristo">Dirección: Av. 9 de Febrero, frente a Plaza El Cristo<br>Tel: +591-3-842-0132</p>
          </li>
          <li>
            <h3 @click="link4('https://www.facebook.com/p/Hotel-Solar-De-Bahia-100066362299155/')">Hotel Solar de Bahia</h3>
            <p class="direccion"><img class="hoteles_img" height="250px" src="@/assets/bahia.jpg" alt="Hotel bahia">Dirección: Calle Otto Felipe Brown<br>Tel: +591-3-842-2379</p>
          </li>
          <li>
            <h3 @click="link5('https://www.facebook.com/p/Hotel-Victoria-100066621642447/?locale=es_LA')">Hotel Victoria Cobija</h3>
            <p class="direccion"> <img class="hoteles_img" height="250px" src="@/assets/victoria.jpeg" alt="Hotel victoria">Dirección: Av. 6 de Agosto, esquina con Lucio Montero<br>Tel: +591-3-842-3553</p>
          </li>
        </ul>
      </div>
    </div>
      </div>

      <div class="right">
      </div>
    </div>
</template>

<script>
export default {
  name: 'HotelesComponent',
  methods: {
    link1(url) {
      if (confirm('¿Desea visitar la página de Facebook del Hotel Abuna?')) {
        window.location.href = url;
      }
    },
    link2(url) {
      if (confirm('¿Desea visitar la página de Facebook del Hotel Estrella del Norte?')) {
        window.location.href = url
        }
    },
    link3(url) {
      if (confirm('¿Desea visitar la página de Facebook del Hotel el Cristo?')) {
        window.location.href = url
        }
    },
    link4(url) {
      if (confirm('¿Desea visitar la página de Facebook del Hotel Solar de Bahia?')) {
        window.location.href = url
        }
    },
    link5(url) {
      if (confirm('¿Desea visitar la página de Facebook del Hotel Victoria de Cobija?')) {
        window.location.href = url
        }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600&display=swap');
*{
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
    margin: 0 30px;
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
    width: 100%;
    margin-top: 30px;
    padding-left: 10px;
}
.contenedor .contenido .left h2{
    font-size: 40px;
    font-weight: bold;
    padding-top: 0px;
    margin-bottom: 0px;
}
.contenedor .contenido .left p{
    margin-bottom: 30px;
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

.hoteles {
  margin-top: 20px;
  border-radius: 5px;
  color:#fff;
  padding: 50px;
  width: 100%;
}

.hoteles h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.hoteles ul {
  list-style: none;
  padding: 0;
}

.hoteles ul li {
  margin-bottom: 20px;
}

.hoteles ul li h3 {
  font-size: 24px;
  margin-bottom: 5px;
  cursor: pointer;
  color: white;
  text-decoration: underline;
}
.hoteles_img{
  display: flex;
  align-items:end;
  justify-self: end;
  margin-right: 10px;
  border-radius: 10px;
}
.hoteles ul li p {
  font-size: 16px;
  display: flex;
  align-items: center;
}

.contenido_hoteles {
  display: flex;
  flex-direction: column;
  align-items:start;
  position: relative;
}
.direccion {
  display: flex;
  align-items: center;
}
</style>