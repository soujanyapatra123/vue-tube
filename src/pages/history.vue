<script setup lang="ts">
import { useVideoStore } from '@/store/videolist'
import TdVdCard from '@/components/tdVdCard.vue'
import { useI18n } from 'vue-i18n';

// Composable
const video = useVideoStore()
const { trendingVideos } = storeToRefs(video)
const { trendingVideoList } = useVideoStore()
const { t } = useI18n();

// Data
const searchFromHistory = ref<string>('')

const buttonGroupList = ref<any[]>([
  {
    text: t('history.clearAllWatchHistory'),
    prependIcon: 'mdi-trash-can-outline',
    type: 'button',
    variant: 'text',
  },
  {
    text: t('history.pauseWatchHistory'),
    prependIcon: 'mdi-pause',
    type: 'button',
    variant: 'text',
  },
  {
    text: t('history.manageAllHistory'),
    prependIcon: 'mdi-cog',
    type: 'button',
    variant: 'text',
  },
  {
    text: t('history.comments'),
  },
  {
    text: t('history.communityPost'),
  },
  {
    text: t('history.liveChat'),
  },
])

// Computed
const filterVideoList = computed(() => trendingVideos.value?.filter((el: any) => el?.snippet?.title.toUpperCase()?.includes(searchFromHistory.value.toUpperCase())))

// Hooks
onMounted(async () => {
  await trendingVideoList()
})
</script>

<template>
  <div class="yt-watch-history">
    <h1 class="yt-watch-history__main-title">
      {{ t('history.watchHistory') }}
    </h1>
    <div class="d-flex space-between yt-watch-history__section">
      <VRow>
        <VCol
          xl="9"
          lg="9"
          md="8"
          sm="6"
          cols="12"
          class="mt-4"
        >
          <div
            v-for="details in filterVideoList"
            :key="details.etag"
          >
            <div>
              <TdVdCard :video="details" />
            </div>
          </div>
        </VCol>
        <VCol
          xl="3"
          lg="3"
          md="4"
          sm="6"
          cols="12"
        >
          <div>
            <VTextField
              v-model="searchFromHistory"
              prepend-inner-icon="mdi-magnify"
              color="primary"
              placeholder="Search watch history"
              variant="underlined"
              class="mb-6"
            />
            <div
              v-for="button in buttonGroupList"
              :key="button.text"
            >
              <VRow>
                <VCol>
                  <VBtn
                    v-if="button.type === 'button'"
                    :prepend-icon="button.prependIcon"
                    :text="button.text"
                    :variant="button.variant"
                    class="yt-watch-history__buttons"
                  />
                  <div
                    v-else
                    class="d-flex mx-10 mt-1"
                  >
                    {{ button.text }}
                  </div>
                </VCol>
              </VRow>
            </div>
          </div>
        </VCol>
      </VRow>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yt-watch-history {
  &__main-title {
    font-family: "Roboto","Arial",sans-serif;
    font-size: 2.2rem;
    line-height: 5rem;
    font-weight: 900;
    overflow: hidden;
    display: block;
    max-height: 10rem;
    -webkit-line-clamp: 2;
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    color: #0f0f0f;
  }
  &__section {
    justify-content: space-between;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
  }
}
</style>
