<template>
  <div>
    <UCard class="mx-auto max-w-sm min-w-xs md:w-[330px]">
      <div class="text-2xl font-bold">Login</div>
      <div class="md:text-md text-xs">Digite seu e-mail abaixo para entrar na sua conta</div>

      <UForm class="mt-8 space-y-4">
        <UFormField label="Email" name="email" size="lg" :ui="{ label: 'font-bold' }">
          <div
            class="float-right -mt-6 cursor-pointer text-xs font-medium text-gray-800 select-none hover:text-gray-900"
          >
            Esqueceu a senha?
          </div>
          <UInput class="w-full font-normal" />
        </UFormField>

        <UFormField label="Senha" name="senha" size="lg" :ui="{ label: 'font-bold' }">
          <UInput type="password" class="w-full" />
        </UFormField>

        <UButton type="submit" size="xl" class="bt w-full cursor-pointer font-bold">
          <span class="block w-full text-center">Login</span>
        </UButton>

        <a href="/auth/google">
          <UButton
            type="button"
            size="xl"
            class="w-full font-bold"
            color="neutral"
            variant="outline"
          >
            <span class="block w-full text-center">Login com Google</span>
          </UButton>
        </a>
      </UForm>
      <div class="my-4 flex w-full flex-row justify-center space-x-1 text-sm">
        <div>Não tem uma conta?</div>
        <div class="cursor-pointer underline select-none">Cadastre-se</div>
      </div>
    </UCard>
  </div>
</template>

<script setup></script>

<style scoped></style>
