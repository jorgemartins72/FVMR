export default defineNuxtRouteMiddleware((to, from) => {
  const { user, loggedIn } = useUserSession()

  console.log('👤 Usuário no middleware:', user.value)
  console.log('🔑 Está logado?', loggedIn.value)
  console.log('📂 Rota atual:', to.path)

  // 🔥 Verifica se a rota começa com /dashboard
  if (!to.path.startsWith('/dashboard')) {
    console.log('⏭ Rota fora de /dashboard, middleware ignorado.')
    return
  }

  // 🚨 Se não está logado, manda para home
  if (!loggedIn.value || !user.value) {
    console.warn('⚠️ Usuário não autenticado, redirecionando para home.')
    return navigateTo('/')
  }

  const permissoes = user.value.permissoes || []
  const permissoesElevadas = ['admin', 'root']

  // 📦 Extrai o pathbase da URL (/dashboard/<pathbase>)
  const pathSegments = to.path.split('/').filter(Boolean)
  const pathbase = pathSegments[1] // Ex: /dashboard/teste -> "teste"

  console.log('📂 pathbase extraído:', pathbase)

  const temPermissao = permissoes.includes(pathbase)
  const temPermissaoElevada = permissoes.some((p) => permissoesElevadas.includes(p))

  console.log('🔑 Permissões do usuário:', permissoes)
  console.log('✅ Tem permissão para pathbase?', temPermissao)
  console.log('✅ Tem permissão elevada?', temPermissaoElevada)

  // 🚫 Se não tem permissão, redireciona para /dashboard
  if (!temPermissao && !temPermissaoElevada) {
    console.warn(`🔒 Usuário bloqueado em ${to.path}, redirecionando para /dashboard.`)
    return navigateTo('/dashboard')
  }
})
