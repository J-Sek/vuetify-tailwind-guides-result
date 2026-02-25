<template>
  <v-container class="h-full flex items-center" max-width="900">
    <div>
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="mb-8 text-center">
        <div class="text-sm font-light -mb-1">Welcome to</div>
        <h1 class="text-6xl font-bold">Vuetify</h1>
      </div>

      <v-row class="items-stretch">
        <v-col cols="12">
          <v-card
            class="py-4 text-surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            rounded="3xl"
            variant="tonal"
          >
            <template #prepend>
              <v-avatar icon="mdi-rocket-launch-outline" size="60" variant="tonal" class="ml-2 mr-4" />
            </template>

            <template #image>
              <v-img class="hidden md:flex" position="top right" />
            </template>

            <template #title>
              <h2 class="text-2xl font-medium my-0">
                Get started
              </h2>
            </template>

            <template #subtitle>
              <div class="leading-7">
                Change this page by updating <v-code>{{ `<HelloWorld />` }}</v-code> in <v-code>components/HelloWorld.vue</v-code>.
              </div>
            </template>
          </v-card>
        </v-col>

        <v-col v-for="link in links" :key="link.href" cols="12" sm="6">
          <v-card
            class="
              h-full py-3 rounded-3xl transition-[border-radius] hover:rounded-lg
              dark:bg-black dark:bg-linear-to-r dark:from-primary/50 dark:to-primary/30 dark:text-white/80
              flex items-center [&>.v-card-item]:w-full
              group"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            :variant="$vuetify.theme.current.dark ? 'flat' : 'tonal'"
          >
            <template #prepend>
              <v-avatar :icon="link.icon" size="60" variant="tonal" class="ml-2 mr-4" />
            </template>
            <template #append>
              <v-icon class="ml-1 opacity-0 transition group-hover:opacity-90 group-hover:-translate-x-1" icon="mdi-open-in-new" />
            </template>
            <template #subtitle>
              <div class="line-clamp-2 text-wrap">{{ link.subtitle }}</div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  const links = [
    {
      href: 'https://vuetifyjs.com/',
      icon: 'mdi-text',
      subtitle: 'Learn about all things Vuetify in our documentation.',
      title: 'Documentation',
    },
    {
      href: 'https://vuetifyjs.com/introduction/why-vuetify/#feature-guides',
      icon: 'mdi-star-circle-outline',
      subtitle: 'Explore available framework Features.',
      title: 'Features',
    },
    {
      href: 'https://vuetifyjs.com/components/all',
      icon: 'mdi-widgets-outline',
      subtitle: 'Discover components in the API Explorer.',
      title: 'Components',
    },
    {
      href: 'https://discord.vuetifyjs.com',
      icon: 'mdi-account-group-outline',
      subtitle: 'Connect with Vuetify developers.',
      title: 'Community',
    },
  ]
</script>
