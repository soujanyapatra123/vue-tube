<script setup lang="ts">
import moment from 'moment'
import useVideo from '@/composables/useVideo'

// interface
interface Props {
  video: any
}

// props
const props = defineProps<Props>()

// Composable
const { convertViews, formatTimeDifference } = useVideo()
const router = useRouter()

// Data
const isVideoStart = ref<boolean>(false)

// Methods
const goToWatchScreen = () => {
  router.push({
    path: '/watch',
    query: {
      v: props?.video?.id?.videoId
    }
  })
}
</script>

<template>
  <div class="yt-video">
    <VCard
      height="fit-content"
      class="yt-video__card"
      @click.prevent="goToWatchScreen()"
    >
      <VImg
        v-if="!isVideoStart"
        :src="props?.video?.snippet?.thumbnails?.medium?.url"
      />
      <div
        v-else
        style="height: 12.375rem;"
      >
        <video
          controls
          class="yt-video__video-el"
        >
          <source
            src="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4"
            type="video / mp4"
          >
        </video>
      </div>
    </VCard>
    <div class="yt-video0-card__description-info mt-2">
      <VRow>
        <VCol cols="2">
          <VAvatar>
            <VImg :src="props?.video?.snippet?.thumbnails?.high?.url" />
          </VAvatar>
        </VCol>
        <VCol cols="8">
          <div 
            class="yt-video__card-title" 
            @click.prevent="goToWatchScreen()"
          >
            {{ props?.video?.snippet?.title }}
          </div>
        </VCol>
        <VCol cols="2">
          <VBtn
            icon=""
            variant="plain"
            class="yt-video__home-more-buttons"
          >
            <VIcon class="yt-video__icon" icon="mdi-dots-vertical" />
          </VBtn>
        </VCol>
      </VRow>
    </div>
    <div>
      <div class="yt-video__channel-title">
        {{ props?.video?.snippet?.channelTitle }}
      </div>
      <div class="d-flex justify-content">
        <div class="yt-video__views">
          {{ convertViews(props?.video?.statistics?.viewCount) }}
        </div>
        <div class="yt-video__views mx-3">
          {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .yt-video {
    &__card {
      border-radius: 0.75rem;
    }

    &__card-title {
      display: block;
      display: box;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #0f0f0f;
      cursor: pointer;
      font-family: Roboto, Arial, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
      line-height: 1.3rem;
      max-block-size: 4rem;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &__channel-title {
      overflow: hidden;
      color: #606060;
      font-size: 0.875rem;
      font-weight: 500;
      margin-inline-start: 18%;
      text-overflow: ellipsis;
    }

    &__views {
      overflow: hidden;
      color: #606060;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
      margin-inline-start: 18%;
    }
    &__home-more-buttons {
      width: 1.875rem;
      height: 1.875rem;
    }
    &__icon {
      color: black;
    }
  }
</style>
