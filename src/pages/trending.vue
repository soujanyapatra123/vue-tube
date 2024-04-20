<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import TrendingNow from '@/components/trendingNow.vue'
import TrendingMusic from '@/components/trendingMusic.vue'
import TrendingGame from '@/components/trendingGame.vue'
import TrendingMovie from '@/components/trendingMovie.vue'
import { useI18n } from 'vue-i18n';

// Composable
const route = useRoute()
const router = useRouter()
const { t } = useI18n();

// Computed
const activeTab = computed(() => {
  if (route.hash)
    return route.hash.replaceAll('#', '')

  return 'now'
})

//Data
// tabs
const tabs = ref<any[]>([
  { title: t('now'), tab: 'now' },
  { title: t('music'), tab: 'music' },
  { title: t('gaming'), tab: 'gaming' },
  { title: t('movies'), tab: 'movies' },
])

// Methods
const goTo = (v: any) => {
  router.push({
    path: '/trending',
    hash: `#${v}`,
  })
}
</script>

<template>
  <div class="yt-trending">
    <VRow>
      <VCol
        cols="4"
        class="d-flex"
      >
        <VCol cols="4">
          <VImg
            src="https://www.youtube.com/img/trending/avatar/trending.png"
            height="80"
            width="80"
            alt=""
            class="yt-trending__img"
          />
        </VCol>
        <VCol cols="8">
          <div class="d-flex mt-3">
            <h1>{{ t('trending') }}</h1>
          </div>
        </VCol>
      </VCol>
    </VRow>
    <VTabs
      v-model="activeTab"
      show-arrows
      @update:model-value="goTo"
    >
      <VTab
        v-for="item in tabs"
        :key="item.tab"
        :value="item.tab"
        tag="div"
        type="text"
        class="yt-trending__tab-btn"
      >
        <div class="title-text">
          {{ item.title }}
        </div>
      </VTab>
    </VTabs>
    <VDivider />

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
    >
      <VWindowItem value="now">
        <TrendingNow />
      </VWindowItem>

      <VWindowItem value="music">
        <TrendingMusic />
      </VWindowItem>

      <VWindowItem value="gaming">
        <TrendingGame />
      </VWindowItem>

      <VWindowItem value="movies">
        <TrendingMovie />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<style lang="scss">
.yt-trending {
  &__img {
    border-radius: 3.125rem;
  }
  h1 {
    color: black;
  }
  .v-col-4 {
    max-width: fit-content;
  }
  &__tab-btn {
    text-transform: capitalize;
    .v-btn__content {
      .v-tab__slider{
        background: black !important;
      }
    }
  }
  .v-tab.v-tab {
    min-width: 3.125rem;
  }
}
.v-slide-group-item--active {
  .v-btn__content {
    .title-text {
      color: black;
      font-weight: 500;
    }
  }
}
</style>
