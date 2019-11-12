<script>
  import { fade } from "svelte/transition";
  import FullModal from "./FullModal.svelte";
  export let login;
</script>

<style>
  .main {
    width: 100%;
    text-align: center;

    height: 50vh;
    padding-top: 100px;
  }

  h3 {
    font-size: 3rem;
    color: var(--dk-rd);
  }

  h3,
  h4 {
    font-family: "spectral", serif;
  }

  h4 {
    font-size: 1.4rem;
  }

  h4,
  h3,
  p {
    padding: 0 1rem;
  }

  button {
    width: 80%;
    height: 60px;
    background-color: var(--blu);
    border: none;
    font-size: 1.4rem;
  }

  @media (min-width: 600px) {
    .main {
      width: 50%;
      margin: auto;
    }

    h4,
    button {
      margin-top: 100px;
    }
  }
</style>

<FullModal>

  <div transition:fade={{ duration: 500 }} class="main">
    <h3>Eleftable</h3>
    <h4>Who Can Beat Trump?</h4>
    <p>
      Rank candidates, see recent polls, and help us figure out who the best
      candidate to take on Donal Trump
    </p>
    <button on:click={login}>Login With Google</button>
  </div>
</FullModal>
