<template>
  <div id="tab-bar">
    <slot>

    </slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
};

</script>

<style>

#tab-bar {
  display: flex;
  background-color: rgb(250, 250, 237);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100,100,100,0.8);
}

</style>
