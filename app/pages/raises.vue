<template>
  <UPage>
    <UPageHeader title="Active Raises" description="Reg CF & Reg A+" />

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
</script>