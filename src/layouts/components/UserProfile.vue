<script setup lang="ts">
import { isEmpty } from 'lodash'
import { useRouter } from 'vue-router'
import { googleLogout } from 'vue3-google-login'
import { useUserStore } from '@/store/userStore'
import useListItems from '@/composables/useListItems'

// Composables
const userStore = useUserStore()
const { userData, dummyData } = storeToRefs(userStore)
const router = useRouter()
const { listItems } = useListItems()

// Methods
const logout = () => {
  googleLogout()
  localStorage.clear()
  userData.value = dummyData.value
  nextTick(() => {
    router.push('/login')
  })
}

const handleAction = (action: string) => {
  switch(action) {
    case 'signOut':
      logout()
      break;
    case 'setting': 
      console.log('setting condition',action)
      break;
    default: 
      console.log(action)
  }
}

// Hooks
onMounted(() => {
  if (isEmpty(userData.value.email))
    userData.value = JSON.parse(localStorage.getItem('user'))
})
</script>

<template>
  <VAvatar
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    <VImg :src="userData?.picture" />
    <VMenu
      activator="parent"
      location="left"
      offset="14px"
    >
      <VCard>
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VAvatar
                  color="primary"
                  variant="tonal"
                >
                  <VImg :src="userData?.picture" />
                </VAvatar>
              </VListItemAction>
            </template>
  
            <VListItemTitle class="font-weight-semibold">
              {{ `${userData?.given_name} ${userData?.family_name}` }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData?.email }}</VListItemSubtitle>
            <VListItemSubtitle class="mt-2">
              create a channel
            </VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />
  
          <div v-for="(list, parentIndex) in listItems" :key="parentIndex">
            <div v-for="(i, childIndex) in list.items" :key="childIndex" >
              <VListItem class="yt-user-profile__dropdown" @click="handleAction(i?.action)">
                <template #prepend v-if="i.prependIcon">
                  <VIcon :icon="i.prependIcon" />
                </template>
                <template #append v-if="i.appendIcon">
                  <VIcon :icon="i.appendIcon" />
                </template>
                <template #title v-if="i.label">
                  {{ i.label }}
                </template>
              </VListItem>
            </div>
            <VDivider v-if="parentIndex < listItems.length-1" />
          </div>
        </VList>
      </VCard>
    </VMenu>
  </VAvatar>
</template>

<style scoped lang="scss">
.yt-user-profile {
  &__dropdown{
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 8px 0 8px 0;
  }
}
</style>
