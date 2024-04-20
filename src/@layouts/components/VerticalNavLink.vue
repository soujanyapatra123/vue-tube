<script lang="ts" setup>
import type { NavLink } from '@layouts/types'

defineProps<{
  item: NavLink
}>()
</script>

<template>
  <li
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <Component
      :is="item.to ? 'RouterLink' : 'a'"
      :to="item.to"
      :href="item.href"
    >
      <div class="d-flex align-center">
        <VIcon
          v-if="item?.icon"
          :icon="item?.icon"
          class="nav-item-icon"
        />
        <!-- 👉 Title -->
        <span class="nav-item-title mx-4 yt-sidebar-text">
          {{ item.title }}
        </span>
      </div>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

.yt-sidebar-text {
  overflow: hidden;
  flex: 1;
  flex-basis: 1e-0.5625rem;
  color: #0f0f0f;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
