<template>
    <div class="flex">
      <button aria-label="Edit user"
              class="p-1 focus:outline-none focus:shadow-outline text-teal-500 hover:text-teal-600"
              @click="onDelete(channel)">
        Remove
      </button>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'ChannelItemActions',
  props: {
    channel: Object
  },
  methods: {
    ...mapMutations(['removeChannel']),
    onDelete(channel) {
      this.removeChannel(channel)
    }
  }
}

</script>
