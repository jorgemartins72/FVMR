<template>
  <div class="flex h-screen max-w-md flex-col p-4">
    <h1 class="font-roboto text-2xl">Hello Roboto</h1>
    <p class="font-robotoc">Olá Roboto Condensed</p>
    <div class="font-geologica text-3xl font-normal tracking-tighter">Teste Geologica</div>
    <div class="font-sans">Fallback Sans</div>
    <p class="mt-4 w-md">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut beatae non velit consequatur est
      distinctio quia ut sed quos quod, nesciunt, molestiae odit? Voluptatum ea similique deleniti
      consequatur delectus animi!
    </p>

    <UAccordion type="multiple" :items="items" />
  </div>
</template>

<script setup>
const items = [
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.',
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content:
      'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
  },
]
</script>

<style scoped></style>
