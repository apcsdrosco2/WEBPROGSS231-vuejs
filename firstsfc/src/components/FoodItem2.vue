<template>
  <div class = "mangos">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Mangos',
      message: 'I like mangos'
    }
  }
};
</script>

<style>
.mangos {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>