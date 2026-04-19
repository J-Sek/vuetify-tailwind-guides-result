<template>
  <v-container class="fill-height d-flex flex-column justify-center" max-width="900">
    <div>
      <v-img
        alt="Placeholder logo"
        class="mb-4 font-weight-bold"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="mb-8 text-center">
        <div class="text-body-medium font-weight-light mb-n1">Welcome to</div>
        <div class="text-display-medium font-weight-bold">Vuetify</div>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            rounded="lg"
            variant="tonal"
          >
            <template #prepend>
              <v-avatar :icon="`svg:${mdiRocketLaunchOutline}`" size="60" variant="tonal" class="ml-2 mr-4" />
            </template>

            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <div class="my-title my-uppercase text-headline-medium font-weight-bold">Get started</div>
            </template>

            <template #subtitle>
              <div class="text-body-large">
                Change this page by updating <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in <v-kbd>components/HelloWorld.vue</v-kbd>.
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col v-for="link in links" :key="link.href" cols="6">
          <v-card
            :append-icon="`svg:${mdiOpenInNew}`"
            class="py-4"
            color="surface-variant"
            :href="link.href"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            variant="tonal"
          >
            <template #prepend>
              <v-avatar :icon="link.icon" size="60" variant="tonal" class="ml-2 mr-4" />
            </template>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import {
    mdiAccountGroupOutline,
    mdiOpenInNew,
    mdiRocketLaunchOutline,
    mdiStarCircleOutline,
    mdiTextBoxOutline,
    mdiWidgetsOutline,
  } from '@mdi/js'

  const links = [
    {
      href: 'https://vuetifyjs.com/',
      icon: `svg:${mdiTextBoxOutline}`,
      subtitle: 'Learn about all things Vuetify in our documentation.',
      title: 'Documentation',
    },
    {
      href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
      icon: `svg:${mdiStarCircleOutline}`,
      subtitle: 'Explore available framework Features.',
      title: 'Features',
    },
    {
      href: 'https://vuetifyjs.com/components/all',
      icon: `svg:${mdiWidgetsOutline}`,
      subtitle: 'Discover components in the API Explorer.',
      title: 'Components',
    },
    {
      href: 'https://discord.vuetifyjs.com',
      icon: `svg:${mdiAccountGroupOutline}`,
      subtitle: 'Connect with Vuetify developers.',
      title: 'Community',
    },
  ]
</script>
