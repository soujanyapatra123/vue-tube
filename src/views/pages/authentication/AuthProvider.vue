<script setup lang="ts">
import { useTheme } from 'vuetify'

// Interface
interface Emit {
  (e: 'signup', value: any): void
}

// Emit
const emit = defineEmits<Emit>()

const { global } = useTheme()

// Data
const authProviders = [
  {
    icon: 'bxl-facebook',
    provider: 'facebook',
    color: '#4267b2',
    colorInDark: '#4267b2',
  },
  {
    icon: 'bxl-twitter',
    provider: 'twitter',
    color: '#1da1f2',
    colorInDark: '#1da1f2',
  },
  {
    icon: 'bxl-github',
    provider: 'github',
    color: '#272727',
    colorInDark: '#fff',
  },
  {
    icon: 'bxl-google',
    provider: 'google',
    color: '#db4437',
    colorInDark: '#db4437',
  },
]
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="global.name.value === 'dark' ? link.colorInDark : link.color"
    @click="emit('signup', link)"
  />
</template>
