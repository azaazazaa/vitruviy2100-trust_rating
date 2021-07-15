<template>
  <div class="pagination">
    <Icon class="pagination_elem" box="0 0 8 13" iconColor="#A2A7AF"  icon-name="left" width="8" height="13"><Left/></Icon>
    <a class="pagination_elem pagination_active" href="#">1</a>
    <a class="pagination_elem" href="#">2</a>
    <a class="pagination_elem" href="#">3</a>
    <Icon class="pagination_elem svg_position_right" box="0 0 14 16" iconColor="#A2A7AF"  icon-name="right" width="8" height="13"><Right/></Icon>
  </div>
</template>
<script>
import Right from '@/components/icons/Right2'
import Icon from '@/components/IconBase'
import Left from '@/components/icons/Left'

export default {
  components: {
    Right, Icon, Left
  }
}
</script>
<style lang="scss" scoped>
  .pagination{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 4px;
    &_elem{
      font-family: $wt-family-base;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
    a{
      color: $common_text;
      text-decoration: none;
    }
  }
  .pagination_active{
    color: $white!important;
    background-color: $dark_blue;
  }
  .svg_position_right{
    margin-left: 8px;
    margin-top: 2px;
  }
</style>
