<template>
  <div class="contenido_cultura">
    <div class="linea-decorativa">
      <div class="circulo"></div>
      <div class="circulo"></div>
      <div class="circulo"></div>
    </div>
    <div class="left_cultura">
      <h2>{{ selectedElement.title }}</h2>
      <p>{{ selectedElement.description }}</p>
    </div>
    <div class="right">
      <ul>
        <li v-for="(element, index) in elements" :key="index" @click="selectElement(element)">
          <img :src="element.image" :alt="element.title" class="element-image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CulturaComponent',
  data() {
    return {
      elements: [
        { title: 'Casa de la Cultura', description: 'La Casa de la Cultura, es un edificio que ha sido remodelado en base a la antigua maestranza donde estuvieron ubicados los motores de luz de la primigenia Cobija, allá por el año 1930. En este edificio histórico se encuentran verdaderas reliquias históricas que han sido atesoradas durante varios años.', image: require('@/assets/casacultura.jpg') },
        { title: 'Vestimenta', description: 'La vestimenta masculina típica de Pando incluye camisa y pantalón blancos de tela ligera, adaptados al clima cálido, y sombreros como el de ala ancha. Las mujeres visten vestidos largos de colores vivos o blancos, con encajes y bordados, hechos de tejidos livianos como algodón o seda.', image: require('@/assets/vestimenta.jpeg') },
        { title: 'Carnaval Pandino', description: 'El Carnaval de Pando reproduce en sus alegorías, ritos y danzas la extraordinaria historia de Pando y la compleja diversidade de su formación económica y social a lo largo del último siglo transcurrido. \n En los albores del siglo XX, tras la llamada Guerra del Acre, una vez consolidada Cobija como ciudad, el carnaval se reducía a una fiesta social celebrada por las élites vinculadas al próspero negocio de la goma, con predominio de disfraces de salón europeos.', image: require('@/assets/carnaval.jpg') }
      ],
      selectedElement: {
        title: 'Cultura',
        description: 'Pando, el departamento más joven de Bolivia, es conocido por su rica biodiversidad amazónica, comunidades indígenas como los tacanas y ese ejja, y su economía basada en la castaña y el caucho. Su cultura refleja una mezcla de tradiciones indígenas y mestizas, destacando danzas, música y gastronomía con influencia amazónica.'
      }
    };
  },
  methods: {
    selectElement(element) {
      this.selectedElement = element;
    }
  }
}
</script>

<style scoped>
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

.contenido_cultura {
  display: flex;
  position: relative;
}

.linea-decorativa {
  position: absolute;
  height: 250px;
  border-left: 2px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 50%;
  transform: translateY(-50%);
}

.linea-decorativa .circulo {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  margin-left: -9px;
}

.left_cultura {
  width: 40%;
  margin-top: 30px;
  padding-left: 50px;
}

.left_cultura h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 34px;
}

.left_cultura p {
  margin-bottom: 60px;
  font-size: 14px;
}

.right {
  max-width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center
}

.right ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.right ul li {
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  transition: background-color 0.3s;
}

.element-image {
  width: 150px;
  height: 150px;
  display: block;
  width: 100%;
  margin: 0 10px;
  border-radius: 10px;
}
.element-image:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
}
</style>