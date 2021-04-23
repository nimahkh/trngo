<template>
  <div class="w-full relative flex flex-row-reverse">
    <button v-on:click="applyNewObjects" class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 w-24 rounded-full ml-2">
      Apply
    </button>
    <button v-on:click="restore" class="bg-transparent border border-gray-900 hover:border-gray-400 w-24 text-gray-900 font-bold py-2 px-4 rounded-full">
      Cancel
    </button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'BottomActions',
  methods:{
    ...mapMutations(['restore','applyNewObjects']),
  }
}

</script>
