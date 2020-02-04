<script>
  import { onMount, beforeUpdate } from "svelte";
  export let status;
  export let toggleDropDown;

  $: name = "Eleftable";

  onMount(() => {
    if (name) {
      name = getName();
    }
  });

  beforeUpdate(() => {
    name = getName();
  });

  function getName() {
    if (status === "completed") {
      return "Results";
    } else if (status === "started") {
      return "Survey";
    } else {
      return "Home";
    }
  }
</script>

<style>
  .topbar-container {
    width: 100vw;
    height: 20px;
    padding: 15px 0 15px 0;
    background-color: #2b2b2b;
    color: var(--blu);
    display: grid;
    grid-template-columns: 15% auto 15%;
    grid-template-rows: 1fr;
    top: 0;
    right: 0;
  }

  .topbar-container div:first-of-type {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  .moreDiv {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
</style>

<div class="topbar-container">
  <div>
    <h1>{name}</h1>
  </div>
  <div class="moreDiv">
    <button on:click={toggleDropDown}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path fill="#2f2f2f00" d="M0 0h24v24H0V0z" />
        <path
          fill="#7acfd6"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2
          2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9
          2-2-.9-2-2-2z" />
      </svg>
    </button>
  </div>
</div>
