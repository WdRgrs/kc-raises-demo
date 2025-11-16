<template>
  <UPage>
    <UPageHeader title="Home" description="Simulated dashboard home page with readme" />

    <UPageBody>
      <HomeReadMe />
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
useHead({
  title: 'KC',
  meta: [
    { name: 'home', content: 'KingsCrowd Demo Readme & Landing Page' },
  ],
})
</script>
