<template>
  <div class="right-panel-components-container">
    <div class="title">{{element.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'End',
  props: ['element']
}
</script>

<style lang="scss" scoped>
@import "package/styles/right-panel-container";
</style>
