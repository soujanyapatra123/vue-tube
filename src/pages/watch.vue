<script setup lang="ts">
import useVideo from '@/composables/useVideo'
import { useVideoStore } from '@/store/videolist'
import SuggestionWatchVideo from '@/components/suggestionWatchVideo.vue'
import { useI18n } from 'vue-i18n';

// Composable
const video = useVideoStore()
const { videoDetails } = storeToRefs(video)
const { getVideoById } = useVideoStore()
const { t } = useI18n();

// Composable
const { convertViews } = useVideo()
const convertedLike = convertViews
const route = useRoute()

// Hook
onMounted(() => {
  getVideoById(route?.query?.v);
})
</script>

<template>
  <VRow class="yt-video-watch" v-if="videoDetails">
    <VCol
      xl="8"
      lg="8"
      sm="12">
      <VCard>
        <VImg :src="videoDetails?.snippet?.thumbnails?.maxres?.url" />
      </VCard>
      <div class="yt-video-watch__title my-2">
        {{ `#${videoDetails?.snippet?.categoryId} - ` + videoDetails?.snippet?.title }}
      </div>
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex">
          <div>
            <VAvatar>
              <VImg
                :src="videoDetails?.snippet?.thumbnails?.maxres?.url"
                alt="profile_image"
              ></VImg>
            </VAvatar>
          </div>
          <div class="mx-2">
            <div class="yt-video-watch__channel-title">
              {{ videoDetails?.snippet?.channelTitle }}
            </div>
            <div>
              {{ t('watch.subscriber') }}
            </div>
          </div>
        </div>
        <div>
          <VBtn
            variant="text" 
            class="yt-video-watch__subscribe-btn mx-1"
          >
            <template #default>
              <div class="yt-video-watch__btn-content">
                {{ t('watch.subscribe') }}
              </div>
            </template>
          </VBtn>
        </div>
      </div>
      <div class="d-flex overflow-x-auto mt-2">
        <VBtn
          variant="text" 
          class="yt-video-watch__buttons mx-1"
        >
            <template #prepend>
              <VIcon icon="mdi-thumb-up-outline" />
            </template>
            <template #append>
              <VIcon icon="mdi-thumb-down-outline" />
            </template>
            <template #default>
              <div class="yt-video-watch__btn-content">
                {{ convertedLike(videoDetails?.statistics?.likeCount) }}
              </div>
            </template>
          </VBtn>
          <VBtn
            variant="text" 
            class="yt-video-watch__buttons mx-1"
          >
            <template #prepend>
              <VIcon icon="mdi-arrow-right-top-bold" />
            </template>
            <template #default>
              <div class="yt-video-watch__btn-content">
                {{ t('watch.share') }}
              </div>
            </template>
          </VBtn>
          <VBtn
            variant="text" 
            class="yt-video-watch__buttons mx-1"
          >
            <template #prepend>
              <VIcon icon="tabler-download" />
            </template>
            <template #default>
              <div class="yt-video-watch__btn-content">
                {{ t('watch.download') }}
              </div>
            </template>
          </VBtn>
          <VBtn
            variant="text" 
            class="yt-video-watch__buttons mx-1"
          >
            <template #prepend>
              <VIcon icon="mdi-playlist-plus" />
            </template>
            <template #default>
              <div class="yt-video-watch__btn-content">
                {{ t('watch.save') }}
              </div>
            </template>
          </VBtn>
          <VBtn
            variant="text" 
            class="yt-video-watch__buttons mx-1"
          >
            <template #default>
              <VIcon icon="tabler-dots" />
            </template>
          </VBtn>
      </div>
    </VCol>
    <VCol
      xl="4"
      lg="4"
      sm="12">
      <div>
        <SuggestionWatchVideo />
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.yt-video-watch {
  &__title {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.3rem;
    line-height: 2.8rem;
    font-weight: 700;
    overflow: hidden;
    display: block;
    max-height: 5.6rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: #0f0f0f
  }
  &__icon-btn {
    color: white;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: #E5E5E5 !important; 
  }
  &__btn-content {
    padding: 0.625rem;
  }
  &__subscribe-btn {
    text-transform: capitalize;
    color: white !important;
    border-radius: 1.875rem !important;
    background-color: black !important;
    font-weight: 500;
  }
  &__channel-title {
    color: #0f0f0f;
    font-weight: 500;
  }
} 
</style>
