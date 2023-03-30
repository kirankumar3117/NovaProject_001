
import LoadingSpinner from './components/Loading/LoadingSpinner.vue';


import LoadingSpinner from './components/Loading/LoadingSpinner.vue';

<template>
  <LoadingSpinner v-if="loadingStore.loading"/>
<router-view/>
</template>

<script>
import LoadingSpinner from './components/ReusableComponents/LoadingSpinner.vue';
import { useLodingSpinner } from './stores/Loading/loading';
import { useRetailerAuth } from './stores/Auth/retailerauth';
export default{
  components:{
    LoadingSpinner
  },
  setup(){
    const loadingStore=useLodingSpinner();
    const reatailerauthStore=useRetailerAuth();
    return{
      loadingStore,
      reatailerauthStore
    }
  }
}
</script>

<style>
*{
  font-family: sans-serif;
}
</style>
