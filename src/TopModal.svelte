<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .modal {
    position: fixed;
    top: 0vh;
    left: 0px;
    width: 100vw;
    height: 40vh;
    background-color: #2f2f2fd9;
    z-index: 200;
    color: #fff;
  }
</style>

<div transition:fade={{ delay: 250, duration: 300 }} class="modal">
  <slot />
</div>
