<template>
  <div class=" w-full relative text-gray-600 focus-within:text-gray-400">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button id='search_btn' v-on:click="search" class="p-1 focus:outline-none focus:shadow-outline">
            <fa :icon="['fas', 'search']" class="text-gray-400 "/>
          </button>
    </span>
    <input type="text" name="q"
           data-cy="search"
           v-on:keyup="create"
           v-model="searchInput"
           class="placeholder-gray-800 w-full py-2 text-sm text-gray bg-white border border-gray-300 rounded-3xl pl-10 focus:outline-none focus:bg-grey focus:text-gray-900"
           placeholder="Add Channel" autoComplete="off">
  </div>
</template>

<script>

import {mapMutations} from "vuex";

export default {
  name: 'SearchBox',
  data: function () {
    return {
      searchInput: ''
    };
  },
  methods:{
    ...mapMutations(['addChannel','handleSearch']),
    create: function(e){
      if (e.keyCode === 13) {
        this.addChannel(this.searchInput)
        this.searchInput= ''
      }
    },
    search:function(){
      this.handleSearch(this.searchInput)
    }
  }
}

</script>
