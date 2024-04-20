<script setup lang="ts">
import { listChannel } from '../store/listChannel'
import Channel from '@/components/channel.vue';
import { useI18n } from 'vue-i18n';

// Composable
const channels = listChannel()
const { channelList } = storeToRefs(channels)
const { getChannelList } = listChannel()
const { t } = useI18n();

// Data
const isShowFull1 = ref<boolean>(false)

// Computed
const listVideo1 = computed(() => isShowFull1?.value ? channelList?.value : channelList?.value?.slice(0, 12))

// Hooks
onMounted(async () => {
  await getChannelList()
})
</script>

<template>
  <div class="yt-subscription-channel">
    <div class="yt-subscription-channel__header d-flex justify-center pa-10">
      {{ t('randomText') }}
    </div>
    <VRow>
      <VCol 
        v-for="user in listVideo1" 
        :key="user?.email"
        xl="2"
        lg="2"
        md="3"
        sm="4"
        cols="6"
      >
        <Channel :item="user" />
      </VCol>
    </VRow>
    <VBtn
      v-if="!isShowFull1 && channelList.length"
      variant="text"
      class="d-flex justify-center align-center mt-5 yt-subscription-channel__buttons"
      @click="isShowFull1 = true"
    >
      {{ t('showMore') }}
    </VBtn>
  </div>
</template>

<style lang="scss" scoped>
.yt-subscription-channel {
  &__header {
    font-size: large;
    font-weight: 600;
    color: black;
  }
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: white !important;
  }
}
</style>
