<template>
  <div>
    <d-navbar icon="check" title="Salvando el semestre">
      <template slot="right">
        <d-navdropdown title="user" :icon="true">
          <a href="#">Salir</a>
        </d-navdropdown>
      </template>
    </d-navbar>

    <main>
      <div class="grid main-container">

        <div class="grid-4">
          <avatar-section></avatar-section>
        </div>

        <div class="grid-8">
          <conversation />
        </div>

      </div>
    </main>


  </div>
</template>

<script>
import AvatarSection from '@/components/AvatarSection'
import Conversation from '~/components/Conversation'

export default {
  components: {
    AvatarSection,
    Conversation
  }
}
</script>

<style scoped>
.main-container {
  height: 100%;
  grid-gap: 0;
}
main {
  height: 88vh;
  margin: 2vh auto;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  padding: 0;
}
</style>

