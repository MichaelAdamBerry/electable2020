<script>
  import { onMount } from "svelte";
  $: showLoader = true;

  onMount(() => {
    setTimeout(() => {
      showLoader = false;
      console.log("timer fired from loader");
    }, 3000);
  });
</script>

<style>
  .container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-color: peru;
  }
</style>

<div>
  {#if $showLoader}
    <div class="container">
      <slot>
        <h1>Loading Now</h1>
      </slot>
    </div>
  {/if}
</div>
