<template>
  <section class="festividades">
    <h2>Festividades de Pando</h2>
    <div class="lista-festividades">
      <div class="festividad">
        <h3>Fiesta de San Juan (24 de junio)</h3>
        <p>Celebrada con fogatas, comidas típicas y música. Es una festividad muy popular en todo Bolivia, especialmente en el oriente y norte del país.</p>
      </div>
      <div class="festividad">
        <h3>Festival de la Castaña</h3>
        <p>Un evento que resalta la importancia de la castaña en la economía y cultura de Pando, con ferias y actividades culturales. Se celebra en el mes de agosto.</p>
      </div>
      <div class="festividad">
        <h3>Aniversario de Pando (24 de septiembre)</h3>
        <p>El 24 de septiembre se celebra el aniversario de la creación del departamento de Pando, con desfiles, eventos culturales y actos cívicos.</p>
      </div>
      <div class="festividad">
        <h3>Fiesta de la Virgen de la Asunción (15 de agosto)</h3>
        <p>Una festividad religiosa en honor a la Virgen de la Asunción, patrona de Cobija, la capital del departamento de Pando, con procesiones y eventos religiosos.</p>
      </div>
      <div class="festividad">
        <h3>Fiesta de San Ignacio de Loyola (31 de julio)</h3>
        <p>Una festividad religiosa y cultural en honor a San Ignacio de Loyola, patrón de la ciudad de Cobija, que incluye procesiones y celebraciones en la iglesia principal.</p>
      </div>
      <div class="festividad">
        <h3>Festival del Río Madre de Dios (agosto)</h3>
        <p>Un evento que celebra la riqueza natural de la región amazónica, con actividades en el río, competiciones y festividades populares.</p>
      </div>
      <div class="festividad">
        <h3>Semana Santa</h3>
        <p>Se celebran eventos religiosos en todo el departamento, especialmente en Cobija, con misas, procesiones y actividades de recogimiento.</p>
      </div>
      <div class="festividad">
        <h3>Fiesta de San Pedro y San Pablo (29 de junio)</h3>
        <p>Una fiesta religiosa celebrada en algunas localidades de Pando en honor a los apóstoles San Pedro y San Pablo.</p>
      </div>
      <div class="festividad">
        <h3>Fiesta de la Virgen de la Candelaria (2 de febrero)</h3>
        <p>Una festividad popular que se celebra en honor a la Virgen de la Candelaria, con procesiones y danzas tradicionales en las comunidades.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FestividadesComponent'
}
</script>

<style scoped>
.festividades {
  margin-top: 50px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  color: #fff;
}

.festividades h2 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}

.lista-festividades {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.festividad {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
}

.festividad h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
}

.festividad p {
  font-size: 14px;
  color: #ccc;
}
</style>