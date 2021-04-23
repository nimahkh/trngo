<template>
  <ul data-cy="channel-list" class="pt-2 px-3 w-full overflow-auto h-96 mb-5">
    <draggable handle=".dragHandler" v-model='channelList' @change="()=>toggleBottom(true)" group="channels">
      <transition-group>
        <li v-for="channel in channels"
            :key="channel.id"
            class="py-2 px-5 mb flex justify-between items-center bg-white rounded-lg">
          <ChannelItem v-bind:channel="channel"/>
        </li>
      </transition-group>
    </draggable>
  </ul>
</template>

<script>
import ChannelItem from "../ChannelItem";
import Draggable from "vuedraggable";
import {mapActions, mapMutations, mapState} from "vuex";


export default {
  mounted() {
    this.fetchChannels();
  },
  components: {
    ChannelItem,
    Draggable,
  },
  computed: {
    ...mapState(['channels']),
    channelList: {
      get() {
        return this.$store.state.channels
      },
      set(value) {
        this.$store.commit('reOrderList', value)
      }
    }
  },
  name: 'ChannelListComponent',
  methods: {
    ...mapActions(['fetchChannels']),
    ...mapMutations(['toggleBottom']),
  }
}
</script>
