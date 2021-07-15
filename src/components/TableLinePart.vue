<template>
  <tr class="dashed">
    <td class="empty"></td>
    <td>1</td>
    <td>№1584653615</td>
    <td class="long_part">200гр</td>
    <td class="long_part"><div class="status_success">Создана</div></td>
    <td class="flex_row table_icons">
      <Icon class="svg" box="0 0 20 18" icon-name="logo" width="20" height="18" iconColor="#A2A7AF"><Print/></Icon>
      <div class="margin"></div>
      <Icon class="svg" box="0 0 17 17" icon-name="logo" width="17" height="17" iconColor="#A2A7AF"><ZoomIn/></Icon>
    </td>
    <td><Btn btnStyle="extra_btn" width="135" height="30" isEye><span>Посмотреть</span></Btn></td>
    <td class="empty_right"></td>
  </tr>
</template>
<script>
import Btn from '@/components/Button'
import Icon from '@/components/IconBase'
import ZoomIn from '@/components/icons/ZoomIn'
import Print from '@/components/icons/Print'

export default {
  components: {
    Btn, ZoomIn, Icon, Print
  }
}
</script>

<style lang="scss" scoped>
  .svg{
    margin-right: 30px;
  }
  .flex_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .status_success{
    font-family: $wt-family-base;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    width: 75;
    height: 25;
    display: inline-block;
    padding: 4px 12px;
    background: $status_succes;
    border-radius: 2px;
  }
  .long_part{
    width: 170px;
  }
  .empty{
    width: 250px;
  }
  .table_icons{
    height: inherit;
  }

</style>
