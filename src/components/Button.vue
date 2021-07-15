<template>
  <div class="btn_base" v-bind:class="btnStyle" v-bind:style="{ width: width + 'px', height: height + 'px' }" @mouseover="isHover = true" @mouseleave="isHover = false">
    <Icon v-if="isBack" box="0 0 6 12" :iconColor="isHover? 'white' : 'currentColor'"  icon-name="left" width="6" height="12"><Left/></Icon>
    <slot/>
    <Icon v-if="isWithIcon" box="0 0 8 14" :iconColor="isHover? 'white' : 'currentColor'"  icon-name="right" width="8" height="14"><Right/></Icon>
    <Icon v-if="isEye" box="0 0 15 10" :iconColor="isHover? 'white' : 'currentColor'"  icon-name="eye" width="15" height="10"><Eye/></Icon>
  </div>
</template>

<script>
import Right from '@/components/icons/Right'
import Icon from '@/components/IconBase'
import Left from '@/components/icons/Left'
import Eye from '@/components/icons/Eye'

export default {
  props: {
    btnStyle: {
      type: String,
      default: 'main_btn'
    },
    isBack: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isEye: {
      type: Boolean,
      default: false
    },
    isWithIcon: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '10'
    },
    height: {
      type: String,
      default: '10'
    }
  },
  data: function () {
    return {
      isHover: false
    }
  },
  components: {
    Icon, Right, Eye, Left
  }
}
</script>

<style lang="scss" scoped>
  .btn_base{
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    font-family: $wt-family-base;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .extra_btn{
    padding: 4px 8px;
    background: #FFFFFF;
    border: 1px solid $extra_btn_hover;
    color: $extra_btn_hover;
    box-sizing: border-box;
    &:hover{
      background: $extra_btn_hover;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
  .main_btn{
    background: $main_btn;
    color: #FFFFFF;
    &:hover{
      cursor: pointer;
    }
  }
  .left{
    margin-right: 5px;
  }
  .eye{
    margin-left: 5px;
  }
</style>
