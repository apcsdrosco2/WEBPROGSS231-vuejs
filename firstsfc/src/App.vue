  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient.js'

  const countries = ref([])

  async function getCountries() {
    const { data, error } = await supabase.from('countries').select()
    if (error) {
      console.error('Error fetching countries:', error)
    } else {
      console.log('Fetched countries:', data)
      countries.value = data
    }
  }

  onMounted(() => {
    console.log('Component mounted')
    getCountries()
  })
  </script>

  <template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </template>