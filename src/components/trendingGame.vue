<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'

// Composable
const video = useVideoStore()
const { trendingGamesList, searchModelValue } = storeToRefs(video)
const { trendingGameList } = useVideoStore()

// Computed
// Filter from frontend due to API quota limit
const filterGamesList = computed(() => trendingGamesList.value?.filter((el: any) => el?.snippet?.title.toUpperCase()?.includes(searchModelValue.value.toUpperCase())))

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    trendingGameList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await trendingGameList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="filterGamesList"
    @load="trendingGameList"
  >
    <template
      v-for="(details, index) in filterGamesList"
      :key="details.id"
    >
      <div
        class="pa-2"
        :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
      >
        <TdVdCard :video="details" />
      </div>
    </template>
  </VInfiniteScroll>
</template>
