<template>
  <UPage class="pb-4 mx-8">
    <UPageHeader description="Reg CF & Reg A+" >
      <template #title>
        Active Raises
        <UIcon 
          :title="icon.title"
          :name="`i-lucide-${icon.name}`" 
          :class="`text-${icon.color}`" 
          class="size-5" 
        />
      </template>
    </UPageHeader>
    <UPageBody>
      <RaisesTable />
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'KC | Active Raises',
  meta: [
    { name: 'raises', content: 'KingsCrowd Active Raises Table Demo' },
  ],
})

const { data: isApiConnected } = await useFetch('/api/status')

const icon = computed(() => {
  const name = isApiConnected.value ? 'wifi' : 'wifi-off'
  const color =  isApiConnected.value ? 'success' : 'error'
  const title = isApiConnected.value ? 'Connected' : 'Disconnected'
  return { title, name, color }
})
</script>