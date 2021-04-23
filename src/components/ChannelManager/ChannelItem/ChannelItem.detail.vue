<template>
  <div class="flex items-center">
    <fa class="dragHandler cursor-move mr-2 text-gray-300" :icon="['fas','grip-vertical']"/>
    <div class="justify-center items-center flex bg-gray-200 rounded-md w-12">
      <fa :icon="['fab', channel.avatar]" class="text-xl text-gray-800 w-10 h-10 rounded-full"/>
    </div>
    <p class="ml-2 text-gray-700 font-semibold font-sans tracking-wide">{{ channel.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChannelItemDetail',
  props: {
    channel: Object
  }
}

</script>
