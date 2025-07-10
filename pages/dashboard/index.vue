<template>
  <div class="flex h-screen w-full flex-col items-center justify-center space-y-4 px-4">
    <Logo :class="'h-10'" />
    <div class="font-geologica text-3xl font-normal tracking-tighter">DASHBOARD</div>
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
