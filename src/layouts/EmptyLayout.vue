<template>
  <div class="empty-layout">
    <div>
      Неправильный URL. Try <a href="/consignments">"/consignments"</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  .empty-layout{
    background-color: $red;
  }
</style>
