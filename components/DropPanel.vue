<template>
  <div>

    <a
      href="#"
      @click.prevent="toggle"
    >
      <slot name="header" />
    </a>

    <div
      ref="panel"
      class="sled"
    >
      <slot name="panel" />
    </div>

  </div>
</template>

<script>
import Sled from '@ianwalter/sled'

export default {
  mounted () {
    this.sled = new Sled(this.$refs.panel)
  },
  methods: {
    toggle () {
      console.log('ENTER')
      this.sled.toggle()
    }
  }
}
</script>

<style>
.sled {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}
</style>
