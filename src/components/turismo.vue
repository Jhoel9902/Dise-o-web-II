<template>
  <div class="contenido_turismo">
    <div class="linea-decorativa">
      <div class="circulo"></div>
      <div class="circulo"></div>
      <div class="circulo"></div>
    </div>
    <div class="left_turismo">
      <h2>{{ selectedElement.title }}</h2>
      <p>{{ selectedElement.description }}</p>
    </div>
    <div class="right_turismo">
      <ul>
        <li v-for="(element, index) in elements" :key="index" @click="selectElement(element)">
          <img :src="element.image" :alt="element.title" class="element-image_turismo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TurismoComponent',
  data() {
    return {
      elements: [
        { title: 'El carreton', description: 'Este gran monumento es obra del escultor Cruceño David Paz. Se halla en la llamada Rotonda del Carretón en Predios del antiguo aeropuerto. Después de esa Legendaria y épica época de integración física efectiva del entonces territorio de colonias, que dieran origen en 1983 al Departamento de Pando durante la Presidencia del no menos legendario Germán Busch, los Carretones prestaron los únicos servicios de transporte que se conocía en la región.', image: require('@/assets/de0907c5e58a94d1ebd7467f2e8fca8f.jpg') },
        { title: 'Parque Piñata', description: 'El  parque piñata es producto del arte urbano pandino, sus vivos colores le dan un aspecto pintoresco y chispeante que resalta a penas verlo. \n Se encuentra ubicado en la avenida 9 de febrero en Cobija, fue creado con el objetivo de dotar a la población y a sus visitantes de un espacio dedicado a las actividades recreacionales y deportivas, el parque es un lugar que fomenta la convivencia social entre ciudadanos y turistas, así como las buenas prácticas que benefician a nuestra salud.', image: require('@/assets/parque-pinata-pando.jpg') },
        { title: 'Manuripi-Heath', description: 'Imperdible atractivo turístico de Pando. La reserva está dedicada estrictamente a la conservación de la biodiversidad del Norte boliviano y el uso eficiente de sus recursos, en sus tierras serpentean los ríos de Manupiri, Madre de Dios y Tahuamano, fuentes hidrográficas que le dan vida al bosque húmedo amazónico.\nEsta área de Pando limita con el escudo brasileño y presenta un clima cálido tropical, la exploración de la reserva sorprende con paisajes amazónicos y fauna silvestre, una alternativa ideal para el turismo de aventura y el ecoturismo.', image: require('@/assets/michi.jpg') },
        { title: 'Lago Bay', description: 'Es el principal atractivo de la Reserva Nacional Manuripi, un afrodisíaco lugar del departamento amazónico cuyas aguas cristalinas albergan a variedad de peces y animales silvestres, el lago Bay es considerado un acuario natural de belleza paisajistica a escalas tan altas que maravillan los ojos de sus observadores.\nEsta zona de la reserva causa un profundo sentimiento de gratitud y admiración hacia la naturaleza, una creación casi artística de ecosistemas que son perfectos para fotografiar.', image: require('@/assets/lago.jpg') }
      ],
      selectedElement: {
        title: 'Turismo',
        description: 'Pando, el departamento más joven de Bolivia, es conocido por su rica biodiversidad amazónica, comunidades indígenas como los tacanas y ese ejja, y su economía basada en la castaña y el caucho. Su turismo refleja una mezcla de tradiciones indígenas y mestizas, destacando danzas, música y gastronomía con influencia amazónica.'
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

.contenido_turismo {
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

.left_turismo {
  width: 40%;
  margin-top: 30px;
  padding-left: 50px;
}

.left_turismo h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 34px;
}

.left_turismo p {
  margin-bottom: 60px;
  font-size: 14px;
}

.right_turismo {
  max-width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto; /* Añade scroll horizontal */
  overflow-y: hidden; /* Oculta el scroll vertical */
}

.right_turismo ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  max-width: 100%; /* Limita el ancho del contenedor */
  overflow-x: auto; /* Añade scroll horizontal */
  overflow-y: hidden; /* Oculta el scroll vertical */
}

.right_turismo ul li {
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  transition: background-color 0.3s;
}

.element-image_turismo {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 10px;
  border-radius: 10px;
}

.element-image_turismo:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
}

/* Personaliza la barra de scroll */
.right_turismo ul::-webkit-scrollbar {
  height: 8px; /* Altura de la barra de scroll horizontal */
}

.right_turismo ul::-webkit-scrollbar-thumb {
  background: #888; /* Color del pulgar de la barra de scroll */
  border-radius: 10px; /* Bordes redondeados */
}

.right_turismo ul::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color del pulgar de la barra de scroll al pasar el mouse */
}

.right_turismo ul::-webkit-scrollbar-track {
  background: transparent; /* Fondo de la barra de scroll */
}
</style>