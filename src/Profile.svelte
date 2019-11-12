<script>
  import { fly } from "svelte/transition";
  export let displayName;
  export let photoURL;
  export let uid;
  export let signOut;
</script>

<style>
  .container {
    position: relative;
  }
  .dropDown {
    position: fixed;
    top: 0px;
    left: 50%;
    min-height: 200px;
    background-color: #2f2f2f;
    margin-left: 50%;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  h3 {
    font-size: 1.1rem;
  }

  button {
    background-color: #2f2f2f00;
    color: white;
    border: none;
  }
</style>

<div class="container">
  <slot>
    <div transition:fly={{ y: -200 }} class="dropDown">
      <h3>{displayName}</h3>
      <img src={photoURL} alt={`avatar for ${displayName}`} />
      <p>Siged in as {displayName}</p>
      <button on:click={signOut}>Log Out</button>
    </div>
  </slot>
</div>
