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

// Data
</script>

<template>
  <div class="yt-video">
    <VRow>
      <VCol
        cols="12"
      >
        <div class="d-flex justify-center">
          <VCard
            class="yt-video__card"
          >
            <VImg class="yt-video__img" :src="props?.video?.snippet?.thumbnails?.medium?.url" />
          </VCard>
        </div>
      </VCol>
      <VCol
        cols="12"
      >
        <div class="yt-video0-card__description-info">
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center yt-video__card-title">
              {{ props?.video?.snippet?.title }}
            </div>
            <VBtn
              icon=""
              variant="plain"
              class="float-right"
            >
              <VIcon class="yt-video__icon" icon="mdi-dots-vertical" />
            </VBtn>
          </div>
          <div class="yt-video__channel-title">
            {{ props?.video?.snippet?.channelTitle }}
          </div>
          <div class="d-flex">
            <div class="yt-video__views">
              {{ convertViews(props?.video?.statistics?.viewCount) }}
            </div>
            <div class="yt-video__views mx-3">
              {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
    <!-- <VRow>
    </VRow> -->
  </div>
</template>

<style scoped lang="scss">
  .yt-video {
    .v-col-lg-3 {
    max-width: fit-content;
    }
    &__card {
      border-radius: 0.75rem;
    }
    &__img {
      img {
        border-radius: 1.875rem;
      }
    }

    &__card-title {
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #0f0f0f;
      cursor: pointer;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      -webkit-line-clamp: 2;
      line-height: 1rem;
      max-block-size: 4rem;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &__channel-title {
      overflow: hidden;
      color: #606060;
      font-size: 0.675rem;
      font-weight: 500;
      text-overflow: ellipsis;
    }

    &__views {
      overflow: hidden;
      color: #606060;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.675rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
    }
    &__description {
      color: #606060;
      padding-top: 0.5rem;
      font-family: "Roboto","Arial",sans-serif;
      font-size: 0.875rem;
      line-height: 1.2rem;
      font-weight: 400;
      overflow: hidden;
      display: block;
      max-height: 3.6rem;
      -webkit-line-clamp: 2;
      display: box;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: normal;
    }
    &__icon {
      color: black;
    }
  }
</style>
