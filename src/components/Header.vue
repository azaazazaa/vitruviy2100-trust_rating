<template>
  <header class="header flex_row">
    <div class="flex_row header__left-side">
      <div class="logo">
        <Icon box="0 0 72 27" icon-name="logo" width="72" height="27"><Logo/></Icon>
      </div>
      <nav class="menu">
        <ul class="flex_row">
          <router-link
            tag="li"
            active-class="active"
            to="/consignments"
          >
            <a href="#">Все партии</a>
          </router-link>
          <router-link
            tag="li"
            active-class="active"
            to="/quality_surveys"
          >
            <a href="#">Опросы по качеству</a>
          </router-link>
        </ul>
      </nav>
    </div>

    <div class="header__right-side dropdown"> <!-- dropdown_opened -->
      <div class="flex_row dropdown__elem">
        <Icon box="0 0 37 36" icon-name="logo" width="37" height="36" iconColor="white"><Avatar/></Icon>
        <div class="login">{{userName}}</div>
        <Icon box="0 0 11 8" icon-name="logo" width="11" height="8" iconColor="white"><Down/></Icon>
      </div>
      <router-link
        tag="div"
        to="/edit_profile"
        class="edit dropdown__elem flex_row-left hidden"
      >
        <Icon box="0 0 17 18" icon-name="logo" width="13" height="12" iconColor="#A2A7AF"><Pen/></Icon>
        <span>Редактировать профиль</span>
      </router-link>
      <router-link
        tag="div"
        to="/auth"
        class="auth dropdown__elem flex_row-left hidden"
      >
        <Icon box="0 0 14 12" icon-name="logo" width="14" height="12" iconColor="#A2A7AF"><Exit/></Icon>
        <span>Выйти</span>
      </router-link>
    </div>

    <!-- <Btn btnStyle="main_btn" width="100" height="30" isWithIcon>Контент</Btn > -->
  </header>
</template>

<script>

/* import Btn from '@/components/Button' */
import Logo from '@/components/icons/Logo'
import Icon from '@/components/IconBase'
import Avatar from '@/components/icons/Avatar'
import Down from '@/components/icons/Down'
import Pen from '@/components/icons/Pen'
import Exit from '@/components/icons/Exit'

export default {
  components: {
    Icon, Logo, Avatar, Down, Pen, Exit
  },
  data: function () {
    return {
      userName: 'ОАО ТулаМед'
    }
  }
}
</script>

<style scoped lang="scss">
  .flex_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .flex_row-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .dropdown{
    z-index: 15;
    &_opened{
      background: $header_color;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
      margin-top: 100px;
    }
    &__elem{
      height: 50px;
      & *{
        margin-left: 12px;
      }
      & *:last-child{
        margin-right: 12px;
      }
    }
    &:hover{
      cursor: pointer;
    }
  }
  .header{
    z-index: 10;
    font-family: $wt-family-base;
    height: 72px;
    background: $header_color;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    &__left-side{
      margin-left: 70px;
    }
    &__right-side{
      margin-right: 70px;
    }
  }
  .menu{
    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
      li{
        color: $common_text;
        box-sizing: content-box;
      }
      li.active{
        color: $main_btn;
        padding-bottom: 5px;
        a{
          border-bottom: solid $main_btn 1px;
        }
      }
    }
    a{
      color: inherit;
      text-decoration: none;
      margin-left: 25px;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
