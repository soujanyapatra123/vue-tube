import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import $http from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  // interface
  interface UserInfo {
    email: string
    email_verified: boolean
    family_name: string
    given_name: string
    hd: string
    locale: string
    name: string
    picture: string
    sub: number
  }

  // Composable
  const router = useRouter()

  // Data
  const dummyData = ref<UserInfo>(
    {
      email: '',
      email_verified: false,
      family_name: '',
      given_name: '',
      hd: '',
      locale: '',
      name: '',
      picture: '',
      sub: 0,
    },
  )

  const clientId = ref<string>('154703403887-n2mop1tu6kd5j2cai1mvsa5jqkidroja.apps.googleusercontent.com')
  const clientSecret = ref<string>('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')

  const userData = ref<UserInfo>(dummyData.value)

  const sendCodeToBackend = async (code: any) => {
    try {
      localStorage.setItem('gToken', JSON.stringify(code))

      const { data } = await $http.post(
        'https://oauth2.googleapis.com/token',
        {
          code,
          client_id: clientId.value,
          client_secret: clientSecret.value,
          redirect_uri: 'http://localhost:5173',
          grant_type: 'authorization_code',
        },
      )

      if (data) {
        const accessToken = data.access_token

        // Fetch user details using the access token
        const userResponse = await $http.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        if (userResponse && userResponse.data) {
          // Set the userDetails data property to the userResponse object
          router.push({
            path: '/home',
          })
          localStorage.setItem('user', JSON.stringify(userResponse.data))
          userData.value = userResponse.data
        }
        else {
          // Handle the case where userResponse or userResponse.data is undefined
          console.error('Failed to fetch user details.')
        }
      }
    }
    catch (error) {
      console.error('Token exchange failed:', error)
    }
  }

  return {
    // Data
    clientId,
    clientSecret,
    userData,
    dummyData,

    // Function
    sendCodeToBackend,
  }
})

export default useUserStore
