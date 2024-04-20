<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// interface
interface Props {
  video?: any
  cardColor?: string
  type?: string
}

// props
const props = defineProps<Props>()
const { t } = useI18n()

</script>

<template>
  <VCard class="yt-like-watch__container" height="max-content" min-width="100%" :style="{ 'background': props?.cardColor}">
    <div class="yt-watch-later__video-card pa-3 mx-4">
      <VCard
        height="170"
        width="300"
        class="mt-3"
      >
        <VImg :src="props?.video?.snippet?.thumbnails?.medium?.url" />
      </VCard>
      <div class="yt-watch-later__watch-title">
        {{ props?.type === 'like' ? 'Liked video' : 'Watch later' }}
      </div>
      <span class="yt-watch-later__sub-details mt-2">{{ t('watchVideoDesc') }}</span>
      <div>
        <IconBtn class="yt-watch-later__icon-btn">
          <VIcon icon="tabler-download" />
        </IconBtn>
        <VMenu open-on-click v-if="props?.type === 'watchLater'">
          <template #activator="{ props: activate }">
            <IconBtn v-bind="activate" class="yt-watch-later__icon-btn">
              <VIcon icon="tabler-dots-vertical" />
            </IconBtn>
          </template>
          <VCard>
            <VList>
              <VListItem @click="">
                <template #title>
                  {{ t('addVideos') }}
                </template>
                <template #prepend>
                  <VIcon icon="mdi-plus" />
                </template>
              </VListItem>
              <VListItem @click="">
                <template #title>
                  {{ t('removeWatchedVideos') }}
                </template>
                <template #prepend>
                  <VIcon icon="mdi-minus-circle-outline" />
                </template>
              </VListItem>
            </VList>
          </VCard>
        </VMenu>
      </div>
      <div class="mt-5 d-flex">
        <VBtn variant="text" class="yt-watch-later__buttons">
          <template #prepend>
            <VIcon icon="mdi-play" />
          </template>
          <template #default>
            <div class="yt-watch-later__btn-content">
              {{ t('playAll') }}
            </div>
          </template>
        </VBtn>
        <VBtn
          variant="text" 
          class="yt-watch-later__buttons mx-3"
        >
          <template #prepend>
            <VIcon icon="tabler-arrows-shuffle" />
          </template>
          <template #default>
            <div class="yt-watch-later__btn-content">
              {{ t('shuffle') }}
            </div>
          </template>
        </VBtn>
      </div>
    </div>
  </VCard>
</template>

<style scoped lang="scss">
.yt-watch-later {
  &__watch-title {
    padding: 0.625rem 0 0 0;
    color: white;
    font-size: 1.875rem;
    font-weight: 600;
  }
  &__sub-details {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 0.75rem;
    line-height: 1.8rem;
    font-weight: 400;
    overflow: hidden;
    display: block;
    max-height: 1.8rem;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: white;
  }
  &__icon-btn {
    color: white;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: white !important; 
  }
  &__btn-content {
    padding: 0.625rem;
  }
  &__sort-btn {
    text-transform: capitalize;
    color: #0f0f0f !important;
  }
} 
.yt-watch-later {
  &__watch-title {
    padding: 0.625rem 0 0 0;
    color: white;
    font-size: 1.875rem;
    font-weight: 600;
  }
  &__sub-details {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 0.75rem;
    line-height: 1.8rem;
    font-weight: 400;
    overflow: hidden;
    display: block;
    max-height: 1.8rem;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: white;
  }
  &__icon-btn {
    color: white;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: white !important; 
  }
  &__btn-content {
    padding: 0.625rem;
  }
  &__sort-btn {
    text-transform: capitalize;
    color: #0f0f0f !important;
  }
} 
.yt-like-watch {
  &__container {
    border-radius: 0.9375rem;
  }
}
</style>
