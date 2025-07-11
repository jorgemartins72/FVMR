# Etapa 1: Build (Node completo para evitar problemas com dependências nativas)
FROM node:22.14-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (cache mais eficiente)
COPY package.json package-lock.json ./

# Instala dependências (inclui dev para build)
RUN npm ci

# Copia o restante do código
COPY . .

# Gera build de produção (Nuxt gera a pasta .output)
RUN npm run build


# Etapa 2: Produção (Distroless Node para máxima leveza e segurança)
FROM gcr.io/distroless/nodejs22-debian12

WORKDIR /app

# Copia apenas o necessário do builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

# Define variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta usada pelo Nuxt (ECS mapeará isso)
EXPOSE 3000

# Comando de inicialização do servidor Nuxt
CMD ["./.output/server/index.mjs"]
