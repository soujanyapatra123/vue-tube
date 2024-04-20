<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'

// Composable
const video = useVideoStore()
const { trendingVideos, searchModelValue } = storeToRefs(video)
const { trendingVideoList } = useVideoStore()

// Computed
// Filter from frontend due to API quota limit
const filterVideoList = computed(() => trendingVideos.value?.filter((el: any) => el?.snippet?.title.toUpperCase()?.includes(searchModelValue.value.toUpperCase())))

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    trendingVideoList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await trendingVideoList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="filterVideoList"
    @load="trendingVideoList"
  >
    <template
      v-for="(details, index) in filterVideoList"
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
