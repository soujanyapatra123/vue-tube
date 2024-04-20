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
        xl="4"
        md="4"
        sm="4"
        cols="12"
        class="yt-video__card-parent"
      >
        <VCard
          class="yt-video__card"
        >
          <VImg :src="props?.video?.snippet?.thumbnails?.medium?.url" />
        </VCard>
      </VCol>
      <VCol
        xl="8"
        md="8"
        sm="8"
        cols="12"
      >
        <div class="yt-video0-card__description-info">
          <VRow>
            <VCol
              cols="9"
              class="d-flex"
            >
              <div class="d-flex yt-video__card-title">
                {{ props?.video?.snippet?.title }}
              </div>
            </VCol>
            <VCol cols="3" class="pa-0">
              <VBtn
                icon=""
                variant="plain"
                class="float-right"
              >
                <VIcon icon="mdi-dots-vertical" />
              </VBtn>
            </VCol>
          </VRow>
          <div class="yt-video__channel-title">
            {{ props?.video?.snippet?.channelTitle }}
          </div>
          <VRow>
            <VCol
              cols="12"
            >
              <div class="d-flex">
                
                <div class="yt-video__views">
                  {{ convertViews(props?.video?.statistics?.viewCount) }}
                </div>
                <div class="yt-video__views mx-3">
                  {{ formatTimeDifference(moment(props?.video?.snippet?.publishedAt)) }}
                </div>
              </div>
            </VCol>
          </VRow>
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
      font-weight: 600;
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
    &__card-parent {
      max-width: fit-content !important;
    }
  }
</style>
