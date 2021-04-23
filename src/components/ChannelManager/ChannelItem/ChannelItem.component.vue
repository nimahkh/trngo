<template>
  <div class="flex flex-row justify-between w-full">
    <ChannelItemDetail v-bind:channel="channel"/>
    <ChannelItemActions v-bind:channel="channel"/>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import ChannelItemActions from "./ChannelItem.actions"
import ChannelItemDetail from "./ChannelItem.detail"

export default {
  components:{ChannelItemActions, ChannelItemDetail},
  mounted() {
    this.fetchChannels();
  },
  name: 'ChannelItem',
  props: {
    channel: Object
  },
  methods: {
    ...mapActions(['fetchChannels']),
    ...mapMutations(['removeChannel']),
  }
}

</script>
