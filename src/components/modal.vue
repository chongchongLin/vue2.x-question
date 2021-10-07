<template>
  <div class="modal">{{showContent}}</div>
</template>

<script>
export default {
    name:'modal',
    props:{
        showContent:{
            type:String,
            default:()=>{
                return '我是子组件'
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .modal{
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        border: 1px solid red;
    }
</style>