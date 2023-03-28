<template>
    <button class="btn btn-primary login">{{ text }}</button>
</template>
<script>

export default{
    name:'ButtonComponent',
    props:{
        text:String
    }
}
</script>

<style>
.login{
    width:296px;
    background-color: #01263C;
    height: 48px;
    margin-top: 20px;
}
</style>