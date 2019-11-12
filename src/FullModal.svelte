<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .container {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--lt-gry);
    overflow: scroll;
  }
</style>

<div class="container" transition:fade={{ duration: 300 }}>
  <slot />
</div>
