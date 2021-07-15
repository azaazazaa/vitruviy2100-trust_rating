<template>
  <div class="overlay">
    <div class="modal">
      <div class="modal__content">
        <h1>Новая партия</h1>
        <div class="wrapper flex_column">
          <label for="numbers">Количество тары в партии <span>*</span></label>
          <input id="numbers" type="text" size="40" placeholder="Кол-во тары">
        </div>
        <div class="wrapper flex_column">
          <label for="numbers">Вес тары <span>*</span></label>
          <input id="numbers" type="text" size="40" placeholder="Тара">
        </div>
        <div class="wrapper flex_column">
          <label for="numbers">Индекс качества <span>*</span></label>
          <Btn btnStyle="extra_btn" width="140" height="30" >Выбрать опрос</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Button'

export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
  .overlay{
    z-index: 1000;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: $grey;
    opacity: 0.2;
  }
  .modal{
    opacity: 1;
    position: absolute;
    z-index: 1001;
    width: 800px;
    height: 470px;
    background: #FFFFFF;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -25%;
    padding-top: 90px;
  }
  .modal__content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    margin-top: 90px;
    width: 200px;
    margin: auto;
  }
  .flex_column{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .wrapper{
    align-items: flex-start;
  }
  h1{
    position: absolute;
    left: 20px;
    top: 15px;
  }
  input{
    background: $white;
    border: 1px solid $border_input;
    box-sizing: border-box;
    border-radius: 4px;
  }
</style>
