<template>
  <div class="main-layout">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: { Header }
}
</script>
<style lang="scss" scoped>

</style>
