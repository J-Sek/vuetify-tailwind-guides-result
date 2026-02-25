<template>
  <v-app :theme="$vuetify.theme.global.name">
    <v-main>
      <nuxt-page />
      <v-btn
        icon="mdi-theme-light-dark"
        position="absolute"
        location="top right"
        class="ma-2"
        @click="$vuetify.theme.cycle()"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
