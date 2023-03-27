
import LoadingSpinner from './components/Loading/LoadingSpinner.vue';


import LoadingSpinner from './components/Loading/LoadingSpinner.vue';

<template>
  <LoadingSpinner v-if="loadingStore.loading"/>
<router-view/>
</template>

<script>
import LoadingSpinner from './components/Loading/LoadingSpinner.vue';
import { useLodingSpinner } from './stores/Loading/loading';
export default{
  components:{
    LoadingSpinner
  },
  setup(){
    const loadingStore=useLodingSpinner();
    return{
      loadingStore
    }
  }
}
</script>

<style>
*{
  font-family: sans-serif;
}
</style>
