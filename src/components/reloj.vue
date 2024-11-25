<template>
  <div class="reloj">
    {{ time }}
  </div>
</template>

<script>
export default {
  name: 'RelojComponent',
  data() {
    return {
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.reloj {
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>