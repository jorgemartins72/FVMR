<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <!-- Capa -->
    <img
      v-if="data?.thumbnail_url"
      :src="data.thumbnail_url"
      alt="Capa"
      class="mb-6 w-full rounded-xl shadow-lg"
    />

    <!-- Título -->
    <h1 class="mb-4 text-center text-4xl font-bold">
      {{ data?.title }}
    </h1>

    <!-- Conteúdo formatado -->
    <article
      class="prose prose-lg max-w-none
             [&_ol]:list-decimal [&_ol]:pl-5
             [&_ul]:list-disc [&_ul]:pl-5
             [&_br]:block [&_br]:my-2"
      v-html="html"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'

const data = ref(null)
const html = ref('')

onMounted(async () => {
  const response = await fetch('http://localhost:8000/markdown/')
  data.value = await response.json()

  // Configura o MarkdownIt
  const md = new MarkdownIt({
    html: true,     // permite HTML inline no markdown
    breaks: true,   // converte '\n' simples em <br>
    linkify: true,  // converte links simples em <a>
  })

  // Plugin para YouTube embeds
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const href = tokens[idx].attrs.find(attr => attr[0] === 'href')?.[1]
    if (href && href.includes('youtube.com/watch')) {
      const videoId = href.split('v=')[1]?.split('&')[0]
      return `<div class="aspect-video mb-4">
                <iframe src="https://www.youtube.com/embed/${videoId}"
                        frameborder="0"
                        allowfullscreen
                        class="w-full h-full rounded-lg shadow"></iframe>
              </div>`
    }
    return self.renderToken(tokens, idx, options)
  }

  html.value = md.render(data.value.markdown || '')
})
</script>
