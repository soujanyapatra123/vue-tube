<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'

// Composable
const video = useVideoStore()
const { trendingMoviesList, searchModelValue } = storeToRefs(video)
const { trendingMovieList } = useVideoStore()

// Computed
// Filter from frontend due to API quota limit
const filterMoviesList = computed(() => trendingMoviesList.value?.filter((el: any) => el?.snippet?.title.toUpperCase()?.includes(searchModelValue.value.toUpperCase())))

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    trendingMovieList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await trendingMovieList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="filterMoviesList"
    @load="trendingMovieList"
  >
    <template
      v-for="(details, index) in filterMoviesList"
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
