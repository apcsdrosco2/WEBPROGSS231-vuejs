<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
  </script>


<template>
  
  <h1>Food</h1>
  <country/>
  <food-item/> <br>
  <food-item2/> <br>
  <food-item/> <br>
  <personal-profile/> <br>
  <comment-form/>
  <comment/>
</template>


<style></style>