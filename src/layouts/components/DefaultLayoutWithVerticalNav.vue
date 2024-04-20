<script lang="ts" setup>
// Icons
import startVideoIcon from '@/Icons/youtube/startVideo.svg'
import notificationIcon from '@/Icons/youtube/notification.svg'
// Components
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { useVideoStore } from '@/store/videolist'
import useNavItems from "@/composables/useNavItems"
import { useI18n } from 'vue-i18n';

// Composable
const video = useVideoStore()
const { searchModelValue } = storeToRefs(video)
const { sidebarList } = useNavItems()
const { t } = useI18n();

</script>

<template>
  <VerticalNavLayout>
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VRow class="yt-navbar-list">
          <VCol 
            lg="1"
            md="1"
            sm="1"
            cols="1"
            class="d-flex justify-center"
            >
            <IconBtn
              class="ms-n3 d-lg-none"
              @click="toggleVerticalOverlayNavActive(true)"
            >
              <VIcon icon="bx-menu" />
            </IconBtn>
          </VCol>
          <VCol
            lg="9"
            md="9"
            sm="8"
            cols="7"
          >
            <div class="d-flex yt-topbar__search-tag align-center">
              <VTextField
                v-model="searchModelValue"
                placeholder="Search"
                rounded
                class="yt-search-field my-input"
              >
                <!-- <template #prepend-inner>
                  <VIcon icon="mdi-magnify" />
                </template> -->
                <template #append-inner>
                  <VBtn variant="text" class="yt-topbar__append-inner-button">
                    <VIcon icon="mdi-magnify" />
                  </VBtn>
                </template>
              </VTextField>
              <VBtn size="x-small" variant="flat" class="mx-4 yt-topbar__button">
                <VIcon icon="mdi-microphone" />
              </VBtn>
            </div>
          </VCol>
          <VCol
            lg="2"
            md="2"
            sm="3"
            cols="4"
            class="d-flex justify-end"
          >
            <IconBtn>
              <VIcon :icon="startVideoIcon" />
            </IconBtn>
            <IconBtn>
              <VIcon :icon="notificationIcon" />
            </IconBtn>
            <UserProfile />
          </VCol>
        </VRow>
      </div>
    </template>

    <template #vertical-nav-content>
      <div 
        v-for="navItem in sidebarList"
        :key="navItem"
      >
        <div v-for="item in navItem.items">
          <VerticalNavLink
            v-if="item.type === 'navLink'"
            :item="item?.config"
          />
          <VerticalNavSectionTitle
            v-else-if="item.type === 'navTitle'"
            :item="item?.config"
          />
        </div>
        <VDivider class="my-2" />
      </div>
      <div class="ytd-guide">
        <div class="ytd-guide__renderer">
          <a href="https://www.youtube.com/about/">{{ t('about') }}</a>
          <a href="https://www.youtube.com/about/press/">{{ t('press') }}</a>
          <a href="https://www.youtube.com/about/copyright/">{{ t('copyright') }}</a><br />
          <a href="https://www.youtube.com/t/contact_us/">{{ t('contactUs') }}</a>
          <a href="https://www.youtube.com/creators/" >{{ t('creators') }}</a> <br />
          <a href="https://www.youtube.com/ads/">{{ t('advertise') }}</a>
          <a href="https://developers.google.com/youtube">{{ t('developers') }}</a>
        </div>
        <div class="ytd-guide__renderer">
          <a href="https://www.youtube.com/t/terms">{{ t('terms') }}</a>
          <a href="https://www.youtube.com/t/privacy">{{ t('privacy') }}</a>
          <a href="https://www.youtube.com/about/policies/">{{ t('policy') }} &amp; {{ t('safety') }}</a> <br />
          <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
            {{ t('howYouTubeWorks') }}
          </a> <br />
          <a href="/new">{{ t('testNewFeatures') }}</a>
        </div>
        <div class="ytd-guide__policy">
          <div dir="ltr" style="display:inline">{{ t('llc') }}</div>
        </div>
      </div>
    </template>

    <template #after-vertical-nav-items>
      <a
        href="https://themeselection.com/item/sneat-vuetify-vuejs-admin-template"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-left: 0.4375rem;"
      />
    </template>
    <slot />
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 0.375rem;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
.yt-topbar {
  &__search-tag {
    max-width: 30rem;
    min-width: fit-content;
  }
  &__button {
    color: #0f0f0f !important;
    border-radius: 100% !important;
    height: 2.5rem;
    font-size: 1rem;
  }
  &__append-inner-button {
    border-left: 1px solid grey;
    border-radius: 0;
    height: 100%;
    padding-right: 0;
    .v-btn__content {
      svg {
        font-size: x-large;
         color: grey;
      }
    }
  }
}
.ytd-guide {
  &__renderer {
    padding-left: 1.5625rem;
    padding-top: 0.625rem;
    a {
      color: #606060;
      font-size: 0.8125rem;
      font-weight: 600;
      padding: 0.1875rem;
    }
  }
  &__policy {
    padding: 1rem 1.5rem;
    color: #909090;
    font-family: "Roboto","Arial",sans-serif;
    font-size: 0.8rem;
    line-height: 1.8rem;
    font-weight: 400;
  }
}
</style>
