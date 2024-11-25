<template>
  <div class="contenido_gastronomia">
    <div class="linea-decorativa">
      <div class="circulo"></div>
      <div class="circulo"></div>
      <div class="circulo"></div>
    </div>
    <div class="left_gastronomia">
      <h2>{{ selectedElement.title }}</h2>
      <p>{{ selectedElement.description }}</p>
    </div>
    <div class="right_gastronomia">
      <ul>
        <li v-for="(element, index) in elements" :key="index" @click="selectElement(element)">
          <img :src="element.image" :alt="element.title" class="element-image_gastronomia" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GastronomiaComponent',
  data() {
    return {
      elements: [
        { title: 'Escabeche de Torcaza', description: 'Elaborado con carne de torcaza (ave) o codornices, este plato combina una selección de ingredientes que realzan su sabor: cebolla fresca, hoja de laurel aromática, zanahoria dulce, aceite de oliva virgen, y vinagre de uva para aportar un toque ácido. Además, se incorpora locoto para un toque picante, caldo de pollo como base, granos de pimienta negra y sal, logrando un equilibrio perfecto de sabores y aromas que evocan tradiciones culinarias.', image: require('@/assets/pollo.jpeg') },
        { title: 'Sudado de Surubi', description: 'El sudado de Surubí es el plato más importante de la región, elaborado con filetes de surubí, mantequilla, tomates, dientes de ajo, perejil, tomillo, hierba luisa, cebollines y cebollas, cocidos con cuidado al vapor, sazonados con hierbas aromáticas y servidos sobre una cama de verduras, este plato permite conservar la textura del pescado.', image: require('@/assets/pez.jpg') }
      ],
      selectedElement: {
        title: 'Gastronomía',
        description: 'Pando, el departamento más joven de Bolivia, es conocido por su rica biodiversidad amazónica, comunidades indígenas como los tacanas y ese ejja, y su economía basada en la castaña y el caucho. Su gastronomía refleja una mezcla de tradiciones indígenas y mestizas, destacando platos, bebidas y postres con influencia amazónica.'
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

.contenido_gastronomia {
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

.left_gastronomia {
  width: 40%;
  margin-top: 30px;
  padding-left: 50px;
}

.left_gastronomia h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 34px;
}

.left_gastronomia p {
  margin-bottom: 60px;
  font-size: 14px;
}

.right_gastronomia {
  max-width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right_gastronomia ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.right_gastronomia ul li {
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  transition: background-color 0.3s;
}

.element-image_gastronomia {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 10px;
  border-radius: 10px;
}

.element-image_gastronomia:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
}
</style>