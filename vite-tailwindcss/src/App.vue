<template>
  <v-app>
    <v-main>
      <HelloWorld />
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
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
