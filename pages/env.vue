<script setup>
import { ref, onMounted } from 'vue'

const envVars = ref([])
const error = ref(null)

// 🟢 Tenta pegar do runtimeConfig primeiro
const runtime = useRuntimeConfig().public.apiDatascore

// 🟠 Fallback para process.env no SSR
const serverEnv =
  process.env.NUXT_PUBLIC_API_DATASCORE || process.env.API_DATASCORE || 'NÃO DEFINIDO'

// 🟣 Decide qual valor usar
const apiDatascore = runtime || serverEnv

const config = useRuntimeConfig()

onMounted(async () => {
  try {
    const response = await $fetch('/api/env')
    envVars.value = Object.entries(response)
      .sort(([a], [b]) => a.localeCompare(b)) // 🔥 Ordena por chave
      .map(([key, value]) => ({ key, value }))
  } catch (err) {
    console.error('Erro ao carregar variáveis:', err)
    error.value = 'Erro ao buscar variáveis de ambiente.'
  }
})
</script>

<template>
  <div class="p-8">
    <h1 class="mb-6 text-3xl font-bold">🌱 Variáveis Selecionadas</h1>

    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="envVars.length">
      <ul class="space-y-0 font-mono">
        <li v-for="(env, index) in envVars" :key="index" class="flex">
          <div class="basis-1/5 text-right font-bold wrap-normal">{{ env.key }}:</div>
          <div class="basis-4/5 pl-2 wrap-normal">{{ env.value }}</div>
        </li>
        <li class="flex bg-gray-200">
          <div class="basis-1/5 text-right font-bold wrap-normal">runtime:</div>
          <div class="basis-4/5 pl-2 wrap-normal">{{ runtime }}</div>
        </li>
        <li class="flex bg-gray-200">
          <div class="basis-1/5 text-right font-bold wrap-normal">serverEnv:</div>
          <div class="basis-4/5 pl-2 wrap-normal">{{ serverEnv }}</div>
        </li>
        <li class="flex bg-gray-200">
          <div class="basis-1/5 text-right font-bold wrap-normal">apiDatascore:</div>
          <div class="basis-4/5 pl-2 wrap-normal">{{ apiDatascore }}</div>
        </li>
        <li class="flex bg-gray-200">
          <div class="basis-1/5 text-right font-bold wrap-normal">config:</div>
          <div class="basis-4/5 pl-2 wrap-normal">{{ config.public.apiBaseUrl }}</div>
        </li>
      </ul>
    </div>
    <div v-else class="text-gray-500">Carregando variáveis...</div>
  </div>
</template>
