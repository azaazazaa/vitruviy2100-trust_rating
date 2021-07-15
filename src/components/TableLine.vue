<template>
  <tr class="dashed">
    <td class="empty"></td>
    <td>Мед</td>
    <td>№1584653615</td>
    <td>5</td>
    <td>500гр</td>
    <td>7,8</td>
    <td>25.05.2021</td>
    <td>
      <router-link
        tag="div"
        to="/consignment">
        <Btn btnStyle="extra_btn" width="125" height="30" isWithIcon>Подробнее</Btn>
      </router-link>
    </td>

    <td class="empty_right"></td>
  </tr>
</template>
<script>
import Btn from '@/components/Button'

export default {
  components: {
    Btn
  }
}
</script>
