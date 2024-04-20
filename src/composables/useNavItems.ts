import gamingIcon from '@/Icons/youtube/gaming.svg'
import historyIcon from '@/Icons/youtube/history.svg'
import homeIcon from '@/Icons/youtube/home.svg'
import learningIcon from '@/Icons/youtube/learning.svg'
import likeIcon from '@/Icons/youtube/like.svg'
import liveIcon from '@/Icons/youtube/live.svg'
import moviesIcon from '@/Icons/youtube/movies.svg'
import musicIcon from '@/Icons/youtube/music.svg'
import newsIcon from '@/Icons/youtube/news.svg'
import podcastIcon from '@/Icons/youtube/podcast.svg'
import shoppingIcon from '@/Icons/youtube/shopping.svg'
// import shortIcon from '@/Icons/youtube/shorts.svg'
import sportsIcon from '@/Icons/youtube/sports.svg'
import subScriptionIcon from '@/Icons/youtube/subscription.svg'
import trendingIcon from '@/Icons/youtube/trending.svg'
import watchLaterIcon from '@/Icons/youtube/watchLater.svg'
import youTubePremiumIcon from '@/Icons/youtube/ytPremium.svg'
import youTubeMusicIcon from '@/Icons/youtube/ytMusic.svg'
import youTubeKidsIcon from '@/Icons/youtube/ytKids.svg'
import youTubeSettingIcon from '@/Icons/youtube/ytSetting.svg'
import youTubeFlagIcon from '@/Icons/youtube/ytFlag.svg'
import youTubeHelpIcon from '@/Icons/youtube/ytHelp.svg'
import youTubeFeedBackIcon from '@/Icons/youtube/ytFeedBack.svg'

const useNavItems = () => {
  // Computed
  const activeTab = computed(() => {
    return localStorage.getItem('activeTab') || ''
  })
  
  // Data
  const sidebarList = ref<any[]>([
    {
      items: [
        {
          type: 'navLink',
          config: {
            title: 'Home',
            icon: homeIcon,
            to: '/home',
            activeTab: activeTab,
          }
        },
        // {
        //   type: 'navLink',
        //   config: {
        //     title: 'Shorts',
        //     icon: shortIcon,
        //     to: '/shorts',
        //     activeTab: activeTab,
        //   }
        // },
        {
          type: 'navLink',
          config: {
            title: 'Subscription',
            icon: subScriptionIcon,
            to: '/subscription',
            activeTab: activeTab,
          }
        },
      ]
    },
    {
      items: [
      {
          type: 'navLink',
          config: {
            title: 'You',
            appendIcon: 'mdi-chevron-right',
            to: '/feed/you',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'History',
            icon: historyIcon,
            to: '/history',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Watch later',
            icon: watchLaterIcon,
            to: '/watch-later',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Liked video',
            icon: likeIcon,
            to: '/liked',
            activeTab: activeTab,
          }
        },
      ]
    },
    {
      items: [
        {
          type: 'navTitle',
          config: {
            heading: 'Explore',
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Trending',
            icon: trendingIcon,
            to: '/trending',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Shopping',
            icon: shoppingIcon,
            to: '/shopping',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Music',
            icon: musicIcon,
            to: '/music',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Movies',
            icon: moviesIcon,
            to: '/movies',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Live',
            icon: liveIcon,
            to: '/live',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Gaming',
            icon: gamingIcon,
            to: '/gaming',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'News',
            icon: newsIcon,
            to: '/news',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Sports',
            icon: sportsIcon,
            to: '/sports',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Learning',
            icon: learningIcon,
            to: '/learning',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Podcasts',
            icon: podcastIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
      ]
    },
    {
      items: [
        {
          type: 'navTitle',
          config: {
            heading: 'More from YouTube',
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Youtube premium',
            icon: youTubePremiumIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Youtube Music',
            icon: youTubeMusicIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Youtube Kids',
            icon: youTubeKidsIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
      ]
    },
    {
      items: [
      {
          type: 'navLink',
          config: {
            title: 'Settings',
            icon: youTubeSettingIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Report history',
            icon: youTubeFlagIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Help',
            icon: youTubeHelpIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
        {
          type: 'navLink',
          config: {
            title: 'Send feedback',
            icon: youTubeFeedBackIcon,
            to: '/podcasts',
            activeTab: activeTab,
          }
        },
      ]
    }
  ]) 
  
  return { sidebarList, activeTab }
}

export default useNavItems
