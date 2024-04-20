import multiImageIcon from '@/Icons/youtube/multi-image.svg'
import googleIcon from '@/Icons/youtube/google.svg'
import signOutIcon from '@/Icons/youtube/sign-out.svg'
import studioIcon from '@/Icons/youtube/ytStudio.svg'
import purchaseIcon from '@/Icons/youtube/ytPurchase.svg'
import dataIcon from '@/Icons/youtube/your-data.svg'
import appearanceIcon from '@/Icons/youtube/apprearance.svg'
import langIcon from '@/Icons/youtube/lang.svg'
import restrictIcon from '@/Icons/youtube/restriction.svg'
import locationIcon from '@/Icons/youtube/location.svg'
import keyShortCutIcon from '@/Icons/youtube/key-shortcuts.svg'
import settingIcon from '@/Icons/youtube/ytSetting.svg'
import helpIcon from '@/Icons/youtube/ytHelp.svg'
import feedBackIcon from '@/Icons/youtube/ytFeedBack.svg'
import rightChevronIcon from '@/Icons/youtube/cheveron.svg'

const useListItems = () => {
  // Data
  const listItems = ref<any[]>([
    {
      items: [
        {
          label: 'Google account',
          prependIcon: googleIcon,
          action: 'googleAccount'
        },
        {
          label: 'Switch account',
          prependIcon: multiImageIcon,
          appendIcon: rightChevronIcon,
          action: 'switchAccount',
        },
        {
          label: 'Sign out',
          prependIcon: signOutIcon,
          action: 'signOut',
        },
      ]
    },
    {
      items: [
        {
          label: 'YouTube studio',
          prependIcon: studioIcon,
          action: 'youTubeStudio',
        },
        {
          label: 'Purchases and membership',
          prependIcon: purchaseIcon,
          action: 'purchasesAndMembership',
        }
      ]
    },
    {
      items: [
        {
          label: 'Your data in YouTube',
          prependIcon: dataIcon,
          action: 'yourDataInYouTube',
        },
        {
          label: 'Appearance: Device theme',
          prependIcon: appearanceIcon,
          appendIcon: rightChevronIcon,
          action: 'appearance',
        },
        {
          label: 'Language: English',
          prependIcon: langIcon,
          appendIcon: rightChevronIcon,
          action: 'language',
        },
        {
          label: 'Restricted Mode: Off',
          prependIcon: restrictIcon,
          appendIcon: rightChevronIcon,
          action: 'restrictedMode',
        },
        {
          label: 'Location: India',
          prependIcon: locationIcon,
          appendIcon: rightChevronIcon,
          action: 'location',
        },
        {
          label: 'Keyboard shortcuts',
          prependIcon: keyShortCutIcon,
          action: 'keyboardShortcuts',
        },
      ]
    },
    {
      items: [
        {
          label: 'Setting',
          prependIcon: settingIcon,
          action: 'setting',
        },
      ]
    },
    {
      items: [
        {
          label: 'Help',
          prependIcon: helpIcon,
          action: 'help',
        },
        {
          label: 'Send feedback',
          prependIcon: feedBackIcon,
          action: 'sendFeedback',
        },
      ]
    }
  ])
  
  return { listItems }
}

export default useListItems
