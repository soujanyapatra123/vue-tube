<script setup lang="ts">
import { googleSdkLoaded } from 'vue3-google-login'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/png/YouTube Play Logo Png.png'
import { useUserStore } from '@/store/userStore'

// Composable
const userStore = useUserStore()

const { clientId } = storeToRefs(userStore)

const { sendCodeToBackend } = userStore

// Data
const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)

// Methods
const signInWithGoogle = () => {
  googleSdkLoaded(google => {
    google.accounts.oauth2
      .initCodeClient({
        client_id:
              clientId.value,
        scope: 'email profile openid',
        redirect_uri: 'http://localhost:5173',
        callback: response => {
          if (response.code)
            sendCodeToBackend(response.code)
        },
      })
      .requestCode()
  })
}

const getSignUpRequest = (v: any) => {
  if (v.provider === 'google')
    signInWithGoogle()
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <VImg
              :src="logo"
              height="30"
              width="30"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          Vue tube
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome to vuetube
        </h5>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="$router.push('/')">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <RouterLink
                  class="text-primary ms-2 mb-1"
                  to="javascript:void(0)"
                >
                  Forgot Password?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider @signup="getSignUpRequest" />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
