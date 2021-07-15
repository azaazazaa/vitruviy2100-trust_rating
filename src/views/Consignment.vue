<template>
  <div class="content">
    <table class="table">
      <tr class="table_name">
        <td class="empty">
          <router-link
            tag="div"
            to="/consignments"
            >
            <Btn class="back" btnStyle="extra_btn" width="100" height="30" isBack>Партии</Btn>
          </router-link>
        </td>
        <td colspan="5" class="table_name_word">Партия №xxxxxxxxxxxxxx</td>
        <td><Btn btnStyle="main_btn" width="150" height="35" >Печать этикеток</Btn></td>
        <th class="empty_right"></th>
      </tr>
      <tr class="table_info">
        <td class="empty"></td>
        <td class="info_tiny" colspan="2">Общий вес: <span class="info">200кг</span></td>
        <td class="info_tiny" colspan="2">Дата регистрации: <span class="info">15.07.2021</span></td>
        <td class="info_tiny">Индекс качества: <span class="info">7,2</span></td>
        <td class="empty_right"></td>
      </tr>
      <tr class="solid">
        <th class="empty"></th>
        <th>№ тары</th>
        <th>ID тары</th>
        <th>Вес тары</th>
        <th>Статус</th>
        <th>паспорт качества</th>
        <th>пароль тары</th>
        <th class="empty_right"></th>
      </tr>
      <TableLinePart/>
      <TableLinePart/>
      <TableLinePart/>
      <TableLinePart/>
    </table>
  </div>
</template>

<script>
import Btn from '@/components/Button'
import TableLinePart from '@/components/TableLinePart'
export default {
  components: {
    Btn, TableLinePart
  }
}
</script>

<style lang="scss" scoped>
  .flex_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .solid{
    border-bottom: 1px solid $table_color;
  }
  .info{
    font-weight: 600;
    &_tiny{
      font-weight: 300;
    }
  }
  .dashed{
    border-bottom: 1px dashed $table_color;
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    &_info{
      height: 30px!important;
    }
    &_name{
      height: 85px;
      &_word{
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
  tr{
    height: 55px;
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
    text-align: end;
    &_right{
      width: 125px;
    }
  }
  .back{
    margin-left: 120px;
  }
</style>
