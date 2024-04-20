<script setup lang="ts">
import { useVideoStore } from '../store/videolist'
import VdSide from '@/components/vdSideList.vue';
import CustomVCard from '@/components/customVCard.vue'
import { useI18n } from 'vue-i18n';

// Composable
const video = useVideoStore()
const { trendingMoviesList } = storeToRefs(video)
const { trendingMovieList } = useVideoStore()
const { t } = useI18n();

// Data
const sortList = ref<any[]>([
  {
    label: t('like.dateAddedNewest')
  },
  {
    label: t('like.dateAddedOldest')
  },
  {
    label: t('like.mostPopular')
  },
  {
    label: t('like.datePublishedNewest')
  },
  {
    label: t('like.datePublishedOldest')
  }
])

// Hooks
onMounted(() => {
  trendingMovieList()
})
</script>

<template>
  <div class="yt-watch-later">
    <VRow>
      <VCol
        xl="3"
        lg="4"
        md="12"
        sm="12"
        cols="12">
        <div class="d-flex justify-center">
          <CustomVCard
            :video="trendingMoviesList[0]" 
            card-color="linear-gradient(rgb(70, 79, 89) 5%, rgb(164 169 174) 17%, rgb(70, 79, 89) 62%)"
            type="like"
          />
        </div>
      </VCol>
      <VCol
        xl="9"
        lg="8"
        md="12"
        sm="12"
        cols="12"
      >
        <div>
          <VMenu open-on-click>
            <template #activator="{ props: activate }">
              <VBtn v-bind="activate" variant="text" class="yt-watch-later__sort-btn">
                <template #default>
                  {{ t('sort') }}
                </template>
                <template #prepend>
                  <VIcon icon="mdi-sort-variant" />
                </template>
              </VBtn>
            </template>
            <VCard>
              <VList>
                <VListItem v-for="item in sortList" :key="item.label" @click="">
                  <div class="pa-2">
                    {{ item.label }}
                  </div>
                </VListItem>
              </VList>
            </VCard>
          </VMenu>
          <div>
            <VInfiniteScroll
              :items="trendingMoviesList"
              @load="trendingMovieList"
            >
              <template
                v-for="(details, index) in trendingMoviesList"
                :key="details.id"
              >
                <div
                  class="pa-2"
                  :class="[index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
                >
                  <VdSide :video="details" :number="index + 1" />
                </div>
              </template>
            </VInfiniteScroll>
          </div>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
