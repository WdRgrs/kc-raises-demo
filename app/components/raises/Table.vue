<template>
  <div class="pb-4 mx-8">
    <ClientOnly>
      <RaisesDownload 
        :name="`raises?page=${currentPage}`"
        :items="data?.items ?? []"
      />
    </ClientOnly>

    <div>
      Total Items: {{ totalCount }}
    </div>

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        v-model:page="currentPage"
        :items-per-page="1"
        :total="maxPage"
      />
    </div>

    <UTable
      ref="table"
      :data="data?.items"
      :loading="status === 'pending'"
      :columns="columns"
      :column-visibility="{ id: false }"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        v-model:page="currentPage"
        :items-per-page="1"
        :total="maxPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type{ TransformedRaiseItem, TransformedRaiseResponse } from '~~/types/raises'

const currentPage = ref(1)
const maxPage = computed(() => data.value?.totalPages ?? 1)
const totalCount = computed(() => data.value?.totalCount ?? '')

const { data, status, error } = useFetch<TransformedRaiseResponse>('/api/raises', {
  query: {
    page: currentPage
  },
})

const toast = useToast() 
watch(error, (newError) => {
  if (newError) {
    console.error('Failed to fetch raises:', newError)
    toast.add({
      title: 'Error loading data',
      description: newError.message || 'Failed to fetch raises',
      color: 'red',
      icon: 'i-heroicons-x-circle'
    })
  }
}, {immediate: true})

const columns: TableColumn<TransformedRaiseItem>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'raise_status',
    header: 'Raise Status',
  },
  {
    accessorKey: 'platform',
    header: 'Platform',
    // ! This can be uncommented out if platform turns from <name> to <{id , name}>
    // cell: ({ row }) => {
    //   const { name, id } = row.getValue('platform') as TransformedRaiseItem['platform']

    //   // return `${name} (${id})`
    //   return name
    // }
  },
  {
    accessorKey: 'funding_gather_money_raised_to_date',
    header: 'Money Raised to Date',
  },
  {
    accessorKey: 'valuation',
    header: 'Valuation',
    cell: ({row}) => row.getValue('valuation') ?? 'n/a'
  },
]
</script>