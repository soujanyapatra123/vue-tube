<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import suggestionVdCard from './suggestionVdCard.vue';

// Composable
const video = useVideoStore()
const { suggestionVideos } = storeToRefs(video)
const { getSuggestionVideoList } = useVideoStore()

// Hooks
onMounted(() => {
  getSuggestionVideoList()
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="suggestionVideos"
    @load="getSuggestionVideoList"
  >
    <template
      v-for="(details, index) in suggestionVideos"
      :key="details.id"
    >
      <div
        class="pa-2"
        :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
      >
        <suggestionVdCard :video="details" />
      </div>
    </template>
  </VInfiniteScroll>
</template>
