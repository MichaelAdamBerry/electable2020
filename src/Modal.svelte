<script>
  import { fly } from "svelte/transition";
</script>

<style>
  .modal {
    position: fixed;
    top: 215px;
    left: 0px;
    bottom: 0;
    width: 100vw;
    background-color: white;
    z-index: 200;
    color: black;
    overflow: scroll;
  }
</style>

<div transition:fly={{ y: -300, delay: 250, duration: 300 }} class="modal">
  <slot />
</div>
