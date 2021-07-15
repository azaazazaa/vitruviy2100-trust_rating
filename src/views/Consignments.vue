<template>
  <div class="content">
    <table class="table">
      <tr class="table_name">
        <th class="empty"></th>
        <td colspan="2" class="table_name_word">Все партии</td>
        <th colspan="4"></th>
        <td><Btn btnStyle="main_btn" width="150" height="35" >Добавить партию</Btn></td>
        <th class="empty_right"></th>
      </tr>
      <tr class="solid">
        <th class="empty"></th>
        <th>тип<br> товара</th>
        <th>код<br> партии</th>
        <th>кол-во тары<br> в партии</th>
        <th>вес тары</th>
        <th>индекс<br> качества</th>
        <th>дата</th>
        <th>...</th>
        <th class="empty_right"></th>
      </tr>
      <TableLine/>
      <TableLine/>
      <TableLine/>
      <TableLine/>
    </table>
    <Pagination class="pagination__position"/>
    <!-- <NewConsigment/> -->
  </div>
</template>

<script>
import Btn from '@/components/Button'
import TableLine from '@/components/TableLine'
import Pagination from '@/components/Pagination'
/* import NewConsigment from '@/components/NewConsigment' */

export default {
  components: {
    Btn, TableLine, Pagination
  }
}
</script>

<style lang="scss">

  .flex_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  tr{
    height: 55px;
  }
  .solid{
    border-bottom: 1px solid $table_color;
  }
  .dashed{
    border-bottom: 1px dashed $table_color;
  }
  .table{
    z-index: 3;
    width: 100%;
    border-collapse: collapse;
    &_name{
      height: 85px;
      &_word{
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
  th {
    font-family: $wt-family-head;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    height: 50px;
    text-align: left;
  }
  td{
    font-family: $wt-family-base;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &:nth-child(8){
      width: 150px;
    }
    &:nth-child(2){
      width: 90px;
    }
    &:nth-child(6){
      font-weight: bold;
    }
  }
  .empty{
    width: 175px;
    &_right{
      width: 125px;
    }
  }
  .pagination__position{
    position: absolute;
    bottom: 50px;
    left: 50%;
  }
</style>
