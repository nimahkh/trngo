<template>
  <div id="app" class="min-h-screen p-10 w-full bg-white flex items-center justify-center">
    <div class="border-2 border-grey p-3 w-2/5 flex flex-col items-center justify-center">
      <span class="text-2xl text-left	w-full font-bold pb-5 pl-5">Channels</span>
      <div class="shadow border-2 border-grey rounded-2xl p-3 w-full flex-col flex items-center justify-center">
        <SearchBox/>
        <ChannelList/>
        <BottomActions v-if="showBottom"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import SearchBox from "./SearchBox/index.js"
import BottomActions from "./BottomActions/index.js"
import ChannelList from "./ChannelList/index.js"

export default {
  mounted() {
    this.fetchChannels();
  },
  computed: {
    ...mapState(['channels','showBottom']),
    channelList: {
      get() {
        return this.$store.state.channels
      },
      set(value) {
        this.$store.commit('reOrderList', value)
      }
    }
  },
  components: {
    SearchBox,
    BottomActions,
    ChannelList
  },
  name: 'ChannelManager',
  methods: {
    ...mapActions(['fetchChannels'])
  }
}
</script>

