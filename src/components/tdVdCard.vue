<script setup lang="ts">
import moment from 'moment'
import useVideo from '@/composables/useVideo'

// interface
interface Props {
  video: any
  isTimeStampVisible?: boolean
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
        xl="3"
        lg="3"
        md="4"
        sm="12"
        cols="12"
      >
        <VCard
          class="yt-video__card"
        >
          <VImg :src="props?.video?.snippet?.thumbnails?.medium?.url" />
        </VCard>
      </VCol>
      <VCol
        xl="9"
        lg="9"
        md="8"
        sm="12"
        cols="12"
      >
        <div class="yt-video0-card__description-info">
          <div class="d-flex justify-space-between"> 
            <div class="d-flex align-center yt-video__card-title">
              {{ props?.video?.snippet?.title }}
            </div>
            <div>
              <VBtn
                icon=""
                variant="plain"
                class="float-right"
              >
                <VIcon class="yt-video__icon" icon="mdi-dots-vertical" />
              </VBtn>
            </div>
          </div>
          <div class="d-flex">
            <div class="yt-video__channel-title">
              {{ props?.video?.snippet?.channelTitle }}
            </div>
            <div class="yt-video__views mx-2">
              {{ convertViews(props?.video?.statistics?.viewCount) }}
            </div>
            <div class="yt-video__views mx-3">
              {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
            </div>
          </div>
          <div class="yt-video__description">
            {{ props?.video?.snippet?.description.substring(0, 200) }}
          </div>
        </div>
      </VCol>
    </VRow>
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

    &__card-title {
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #0f0f0f;
      cursor: pointer;
      font-family: Roboto, Arial, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
      line-height: 1.2rem;
      max-block-size: 4rem;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &__channel-title {
      overflow: hidden;
      color: #606060;
      font-size: 0.875rem;
      font-weight: 500;
      text-overflow: ellipsis;
    }

    &__views {
      overflow: hidden;
      color: #606060;
      font-family: Roboto, Arial, sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      -webkit-line-clamp: 2;
    }
    &__description {
      color: #606060;
      padding-top: 0.2rem;
      font-family: "Roboto","Arial",sans-serif;
      font-size: 0.875rem;
      line-height: 1.2rem;
      font-weight: 400;
      overflow: hidden;
      max-height: 3.6rem;
      -webkit-line-clamp: 2;
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
