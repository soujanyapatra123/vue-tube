<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import HistoryVdList from '@/components/historyVdList.vue';

//Interface
interface Props {
  type?: string
}

// Props
const props = defineProps<Props>()

// Composable
const video = useVideoStore()
const { trendingVideos, trendingMusicsList } = storeToRefs(video)
const { trendingVideoList, trendingMusicList } = useVideoStore()

// Hooks
onMounted(() => {
  if(props?.type === 'history') {
    trendingVideoList()
  } else {
    trendingMusicList()
  }
})
</script>

<template>
  <VRow>
    <VCol v-for="details in props?.type === 'history' ? trendingVideos : trendingMusicsList"
      :key="details.id" cols="2"
    >
      <HistoryVdList :video="details" />
    </VCol>
  </VRow>
</template>
