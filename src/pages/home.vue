<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import VdCard from '@/components/videoCard.vue'

// Composable
const video = useVideoStore()
const { videoList, searchModelValue } = storeToRefs(video)
const { getVideoList } = useVideoStore()

// Computed
// Filter from frontend due to API quota limit
const filterVideoList = computed(() => videoList.value?.filter((el: any) => el?.snippet?.description.toUpperCase()?.includes(searchModelValue.value.toUpperCase())))

// Methods
const handleScroll = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

  if (isAtBottom)
    getVideoList()
}

// Hooks
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(async () => {
  await getVideoList()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <VInfiniteScroll
    :height="300"
    :items="filterVideoList"
    @load="getVideoList"
  >
    <VRow>
      <template
        v-for="(details, index) in filterVideoList"
        :key="details.id"
      >
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xs="12"
        >
          <div
            class="pa-2"
            :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
          >
            <VdCard :video="details" />
          </div>
        </VCol>
      </template>
    </VRow>
  </VInfiniteScroll>
</template>
