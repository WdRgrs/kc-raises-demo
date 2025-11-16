<template>
  <UHeader>
    <template #title>KingsCrowd Raises Demo</template>
    
    <template #right>
      <!-- ! Needs to be hidden in mobile/tablet - replicated as vertical in body slot -->
      <UNavigationMenu :items="items" class="hidden lg:block" />
    </template>

    <template #body>
      <UNavigationMenu orientation="vertical" :items="items" />
    </template> 
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Raises',
    icon: 'i-lucide-database',
    to: '/raises',
  }
])
</script>