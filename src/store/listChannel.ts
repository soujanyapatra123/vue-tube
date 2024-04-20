import { defineStore } from 'pinia'
import $http from '@/plugins/axios'

export const listChannel = defineStore('channels', () => {
  // Data
  const channelList = ref<any>([])

  const getChannelList = async () => {
    try {
      if(channelList.value.length) {
        return
      }
      const { data: { results } } = await $http.get(
        'https://randomuser.me/api/?results=19')

      if (results) {
        channelList.value = results
      }
    }
    catch (error) {
      console.error('Error occurred:', error)
    }
  }

  return {
    // Data
    channelList,

    // Function
    getChannelList,
  }
})

export default listChannel
