import { defineStore } from 'pinia'
import $http from '@/plugins/axios'
import { isEmpty } from 'lodash'

export const useVideoStore = defineStore('video', () => {
  // Interface
  interface ObjId {
    kind: string
    videoId: string
  }
  interface VideoConfig {
    url: string
    width: number
    height: number
  }
  interface Thumbnails {
    default: VideoConfig
    medium: VideoConfig
    high: VideoConfig
  }
  interface Snippet {
    publishedAt: any
    channelId: string
    title: string
    description: string
    thumbnails: Thumbnails
    channelTitle: string
    liveBroadcastContent: string
    publishTime: any
  }
  interface VideoList {
    kind: string
    etag: string
    id: ObjId
    snippet: Snippet
  }

  const videoList = ref<VideoList[]>([])
  const limit = ref<number>(9)
  const searchText = ref<string>('')
  const YOUR_API_KEY = ref<string>('AIzaSyAbmQ1ZdsmCgWYuQHbTEPuzomWGOJEv3YY')
  const nextPageToken = ref<string>('')
  const startLoading = ref<boolean>(false)
  const trendingVideos = ref<any>([])
  const trendingMusicsList = ref<any>([])
  const trendingGamesList = ref<any>([])
  const trendingMoviesList = ref<any>([])
  const searchModelValue = ref<any>('')
  const videoDetails = ref<any>({})
  const suggestionVideos = ref<any[]>([])

  const getVideoList = async () => {
    try {
      // for not to exhaust API limit
      if (videoList.value.length)
        return

      startLoading.value = true

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet',
        q: searchText.value,
        CategoryId: 'HOME',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
      }

      const { data } = await $http.get('/youtube/v3/search', { params })

      if (data) {
        videoList.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
        startLoading.value = false
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const trendingVideoList = async () => {
    try {
      // for not to exhaust API limit
      if (trendingVideos.value.length)
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        trendingVideos.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const trendingMusicList = async () => {
    try {
      // for not to exhaust API limit
      if (trendingMusicsList.value.length)
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
        videoCategoryId: '10',
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        trendingMusicsList.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const trendingGameList = async () => {
    try {
      // for not to exhaust API limit
      if (trendingGamesList.value.length)
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
        videoCategoryId: '20',
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        trendingGamesList.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const trendingMovieList = async () => {
    try {
      // for not to exhaust API limit
      if (trendingMoviesList.value.length)
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
        videoCategoryId: '25',
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        trendingMoviesList.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const getVideoById = async (id: string) => {
    try {
      // for not to exhaust API limit
      if (!isEmpty(videoDetails.value))
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet,contentDetails,statistics',
        regionCode: 'IN',
        id: id
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        videoDetails.value = data.items[0]
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  const getSuggestionVideoList = async () => {
    try {
      // for not to exhaust API limit
      if (suggestionVideos.value.length)
        return

      const params = {
        key: YOUR_API_KEY.value,
        type: 'video',
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: limit.value,
        pageToken: nextPageToken.value,
        videoCategoryId: videoDetails?.snippet?.categoryId,
      }

      const { data } = await $http.get('/youtube/v3/videos', { params })
      if (data) {
        suggestionVideos.value.push(...data.items)

        nextPageToken.value = data.nextPageToken
      }
    }
    catch (error) {
      console.error('Error:', error)
    }
  }

  return {
    // Data
    videoList,
    limit,
    startLoading,
    trendingVideos,
    searchModelValue,
    trendingMusicsList,
    trendingGamesList,
    trendingMoviesList,
    videoDetails,
    suggestionVideos,

    // Function
    getVideoList,
    trendingVideoList,
    trendingMusicList,
    trendingGameList,
    trendingMovieList,
    getVideoById,
    getSuggestionVideoList,
  }
})

export default useVideoStore
