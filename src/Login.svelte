<script>
  import { fade } from "svelte/transition";
  import FullModal from "./FullModal.svelte";
  import LandingAnimation from "./LandingAnimation.svelte";
  export let login;
  export let loaded;
</script>

<style>
  .main {
    width: 100%;
    text-align: center;
    padding-top: 100px;
  }

  h1 {
    font-size: 3rem;
    color: var(--dk-rd);
  }

  h1,
  h4 {
    font-family: "spectral", serif;
  }

  h4 {
    font-size: 1.4rem;
  }

  h4,
  h1,
  p {
    padding: 0 1rem;
  }

  p {
    width: 70%;
    margin: auto;
    font-size: 1.2rem;
    color: #2f2f2f;
  }

  button {
    width: 200px;
    height: 60px;
    background-color: var(--lt-rd);
    border: none;
    font-size: 1.2rem;
    color: white;
  }

  @media (min-width: 600px) {
    .main {
      width: 50%;
      max-width: 500px;
      margin: auto;
      padding: 3rem;
      margin-top: 50px;
      background-color: var(--blu);
    }

    h4 {
      margin-top: 3rem;
      font-size: 2.4rem;
    }

    button {
      margin-top: 100px;
    }
    button {
      margin-top: 3rem;
    }
  }

  .animation {
    width: 80%;
    margin: auto;
  }
</style>

<FullModal>

  <div transition:fade={{ duration: 500 }} class="main">
    <h1>Eleftable</h1>
    <div class="animation">
      {#if loaded}
        <LandingAnimation loaded />
      {/if}
    </div>
    <h4>Who Can Beat Trump?</h4>
    <p>
      Rank candidates, see recent polls, and help us figure out who the best
      candidate to take on Donal Trump
    </p>
    <button on:click={login}>Login With Google</button>
  </div>
</FullModal>
