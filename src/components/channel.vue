<script lang="ts" setup>
import useVideo from '@/composables/useVideo'
import { useI18n } from 'vue-i18n';

// Interface
interface Props {
  item: any
} 

// Props
const props = defineProps<Props>()

// Composable
const { convertViews } = useVideo()
const { t } = useI18n()

</script>

<template>
  <div class="yt-channel mt-2">
    <div class="yt-channel__flex-center">
      <VAvatar size="110">
        <VImg :src="props?.item?.picture?.large" />
      </VAvatar>
    </div>
    <div class="yt-channel__flex-center yt-channel__title mt-2">
      {{ `${props?.item?.name?.first}  ${props?.item?.name?.last}` }}
    </div>
    <div class="yt-channel__flex-center yt-channel__subscription mt-1">
      {{ `${convertViews(props?.item?.location?.street?.number)} subscribers` }}
    </div>
    <div class="mt-3 yt-channel__flex-center">
      <VBtn variant="text" class="yt-channel__buttons">
        <template #default>
          <div>
            {{ t('subscribe') }}
          </div>
        </template>
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss">
.yt-channel {
  &__buttons {
    text-transform: capitalize;
    color: #0f0f0f !important;
    border-radius: 1.875rem !important;
    background-color: rgba(217, 214, 214, 0.692) !important;
    font-size: 0.8125rem;
    font-weight: 600;
  }
  &__flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-size: 0.9375rem;
    font-weight: 600;
    color: black;
  }
  &__subscription {
    font-size: 0.8125rem;
    font-weight: 300;
    color: grey;
  }
}
</style>
