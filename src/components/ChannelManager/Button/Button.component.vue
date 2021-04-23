<template>
  <button @click="clicked" :class="className">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    className: String
  },
  methods: {
    clicked() {
      this.$emit('handleClick');
    }
  }
}
</script>
