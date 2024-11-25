<template>
  <div class="contenido_sobre">
    <div class="left">
      <div class="empresa-info">
        <h2>Información de la Empresa</h2>
        <img :src="require('@/assets/GatoFino.jpeg')" alt="Gato Fino" class="foto">
        <p><strong>Nombre:</strong> NameLess S.A.</p>
        <p><strong>Dirección:</strong> Senkata, La Paz, Bolivia</p>
        <p><strong>Teléfono:</strong> +591-7012345</p>
        <p><strong>Email:</strong> abc@cba.com</p>
        <p><strong>Descripción:</strong> Empresa de turismo enfocada a el departamento de Pando.</p>
      </div>
    </div>
    <div class="right">
      <div class="formulario-contacto">
        <h2>Enviar un Correo Electrónico</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required>
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" v-model="mensaje" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EjemploRouter',
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: ''
    };
  },
  methods: {
    submitForm() {
      if (this.validarFormulario()) {
        alert('Correo enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el correo electrónico
      }
    },
    validarFormulario() {
      if (!this.nombre || !this.email || !this.mensaje) {
        alert('Por favor, complete todos los campos.');
        return false;
      }
      if (!this.validarEmail(this.email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
      }
      return true;
    },
    validarEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style scoped>
.contenido_sobre {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left, .right {
  width: 45%;
}

.empresa-info, .formulario-contacto {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.empresa-info h2, .formulario-contacto h2 {
  margin-bottom: 20px;
}

.empresa-info img {
  max-width: 100%;
  height: auto;
  border-radius: 50%; /* Hace que la imagen sea redonda */
}

.formulario-contacto form div {
  margin-bottom: 15px;
}

.formulario-contacto label {
  display: block;
  margin-bottom: 5px;
}

.formulario-contacto input, .formulario-contacto textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.formulario-contacto button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.formulario-contacto button:hover {
  background-color: #0056b3;
}

.foto {
  border-radius: 50%; /* Hace que la imagen sea redonda */
}
</style>