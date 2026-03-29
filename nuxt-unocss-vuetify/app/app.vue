<template>
  <v-app>
    <v-main>
      <nuxt-page />
    </v-main>
    <v-btn
      class="ma-2"
      :icon="`svg:${mdiThemeLightDark}`"
      location="top right"
      position="absolute"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>

<script lang="ts" setup>
  import { mdiThemeLightDark } from '@mdi/js'
</script>
