<template>
  <UButton 
    style="float: right"
    title="Download .csv"
    icon="i-lucide-download"
    @click="handleDownload"
    :disabled="!items?.length > 0"
    :loading="isLoading"
  />
</template>

<script setup lang="ts">
import type { TransformedRaiseItem } from "~~/types/raises"

interface Props {
  name?: string
  items?: TransformedRaiseItem[]
}
const props = defineProps<Props>()

const isLoading = ref(false)

/**
 * ! This funciton (and helpers) was created by claude (anthropic) per my request
 * It's not bad for generic csv but doesn't handle nested objects / filtering etc 
 * pretty basic: here's the list of items i want to download
 */
function handleDownload() {
  isLoading.value = true
  if (props.items.length === 0) {
    console.warn('No items to download')
    // TODO - toast
    return
  } 
  
  const csv = convertToCSV(props.items)
  triggerDownload(csv, `${props.name}.csv`)
  isLoading.value = false
}
function convertToCSV(items: TransformedRaiseItem[]): string {
  const headers = Object.keys(items[0])
  
  // Create header row
  const headerRow = headers.join(',')

  // Create data rows
  const dataRows = items.map(item => {
    return headers.map(header => {
      const value = item[header as keyof TransformedRaiseItem]
      
      // Handle null/undefined
      if (value === null || value === undefined || value === 'n/a') {
        return ''
      }

      // Convert to string
      const stringValue = String(value)
      
      // Escape values that contain commas, quotes, or newlines
      if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`
      }
      
      return stringValue
    }).join(',')
  })
  
  // Combine header and data rows
  return [headerRow, ...dataRows].join('\n')
}

function triggerDownload(csvContent: string, filename: string) {
  // Create blob with UTF-8 BOM for Excel compatibility
  const BOM = '\uFEFF'
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' })
  
  // Create download link
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.style.visibility = 'hidden'
  
  // Trigger download
  document.body.appendChild(link)
  link.click()
  
  // Cleanup
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>