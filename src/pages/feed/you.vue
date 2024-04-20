<script setup lang="ts">
import { useUserStore } from '@/store/userStore'
import googleIcon from '@/Icons/youtube/google.svg'
import multiImageIcon from '@/Icons/youtube/multi-image.svg'
import ytHistory from '@/Icons/youtube/history.svg'
import HistoryVideoList from '@/components/historyVideoList.vue'
import { useI18n } from 'vue-i18n';

// Composables
const userStore = useUserStore()
const { userData } = storeToRefs(userStore)
const { t } = useI18n();
</script>

<template>
  <div class="d-flex yt-self-feed-you">
    <div class="d-flex align-center">
      <VAvatar size="125">
        <VImg :src="userData?.picture" alt="" />
      </VAvatar>
    </div>
    <div class="pl-5">
      <div class="yt-self-feed-you__name">
        {{ userData?.given_name + userData?.family_name }}
      </div>
      <div class="yt-self-feed-you__create-channel">{{ t('you.createAChanel') }}</div>
      <div class="mt-1">
        <VBtn variant="text" class="yt-self-feed-you__buttons">
          <template #prepend>
            <VIcon :icon="multiImageIcon" />
          </template>
          <template #default>
            <div class="yt-watch-later__btn-content">
              {{ t('you.switchAccount') }}
            </div>
          </template>
        </VBtn>
        <VBtn variant="text" class="yt-self-feed-you__buttons mx-2">
          <template #prepend>
            <VIcon :icon="googleIcon" />
          </template>
          <template #default>
            <div class="yt-watch-later__btn-content">
              {{ t('you.googleAccount') }}
            </div>
          </template>
        </VBtn>
      </div>
    </div>
  </div>
  <div class="yt-self-feed-you mt-5">
    <RouterLink to="/history">
      <div class="d-flex align-center yt-self-feed-you__header-title">
        <VIcon :icon="ytHistory" />
        <div>
          {{ t('you.history') }}
        </div>
      </div>
    </RouterLink>
    <HistoryVideoList type="history" />
  </div>
  <div class="yt-self-feed-you mt-5">
    <RouterLink to="/watch-later">
      <div class="d-flex align-center yt-self-feed-you__header-title">
        <VIcon :icon="ytHistory" />
        <div>
          {{ t('you.watchLater') }}
        </div>
      </div>
    </RouterLink>
    <HistoryVideoList type="watchLater" />
  </div>
</template>

<style scoped lang="scss">
.yt-self-feed-you {
  &__name {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 900;
    overflow: hidden;
    display: flex;
    max-height: 10rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: black;
  }
  &__create-channel {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 0.9rem;
    line-height: 1.8rem;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: #E5E5E5 !important; 
  }
  &__header-title {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.4rem;
    line-height: 2.8rem;
    font-weight: 700;
    overflow: hidden;
    display: block;
    max-height: 2.8rem;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: black;
  }
}
</style>
