<template>
  <div class="w-full relative flex flex-row-reverse">
    <Button v-on:handleClick="applyNewObjects" class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 w-24 rounded-full ml-2" label="Apply"/>
    <Button v-on:handleClick="restore" class="bg-transparent border border-gray-900 hover:border-gray-400 w-24 text-gray-900 font-bold py-2 px-4 rounded-full" label="Cancel"/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Button from "../Button/index"

export default {
  name: 'BottomActions',
  components:{Button},
  methods:{
    ...mapMutations(['restore','applyNewObjects']),
  }
}

</script>
