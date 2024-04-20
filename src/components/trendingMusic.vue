<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'

// Composable
const video = useVideoStore()
const { trendingMusicsList, searchModelValue } = storeToRefs(video)
const { trendingMusicList } = useVideoStore()

// Computed
// Filter from frontend due to API quota limit
const filterMusicList = computed(() => trendingMusicsList.value?.filter((el: any) => el?.snippet?.title.toUpperCase()?.includes(searchModelValue.value.toUpperCase())))

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    trendingMusicList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await trendingMusicList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="filterMusicList"
    @load="trendingMusicList"
  >
    <template
      v-for="(details, index) in filterMusicList"
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
