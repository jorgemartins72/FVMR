<template>
  <div class="flex h-screen w-full flex-col items-center justify-center space-y-0 px-4">
    <Logo :class="'h-10'" />
    <h1 class="font-roboto text-2xl">Hello Roboto</h1>
    <p class="font-robotoc">Olá Roboto Condensed</p>
    <div class="font-geologica text-3xl font-normal tracking-tighter">Teste Geologica</div>
    <div class="font-sans">Fallback Sans</div>
    <div class="mt-4 w-3/4">
      <div v-if="loggedIn" class="my-4 flex flex-col space-y-4">
        <div class="font-geologica text-3xl font-bold tracking-tighter">Usuário logado</div>
        <pre class="w-3/4 text-sm text-wrap">{{ user }}</pre>
        <UButton size="lg" @click="clear"> Limpar Sessão </UButton>
      </div>
      <div v-else class="my-4 flex flex-col space-y-4">
        <div class="font-geologica text-3xl font-bold tracking-tighter">Usuário não logado</div>
        <UButton size="lg" href="/login"> Ir para Login </UButton>
        {{ loggedIn }}
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable no-undef -->
<script setup>
const { user, clear, loggedIn } = useUserSession()
</script>

<style></style>
