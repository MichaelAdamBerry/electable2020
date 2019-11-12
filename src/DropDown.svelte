<script>
  import { fly } from "svelte/transition";
  export let signOut;
  export let user;
</script>

<style>
  .container {
    position: absolute;
    opacity: 0.99;
    z-index: 500;
    top: 50px;
    right: 0px;
    width: 50vw;
    max-width: 200px;
    color: var(--lt-gry);
    background-color: #2f2f2f;
  }

  p {
    font-style: italic;
    color: var(--blu);
  }

  .img-container {
    width: 50px;
    height: 50px;
    margin: auto;
  }

  button {
    background-color: var(--lt-rd);
    width: 100%;
    color: var(--lt-gry);
  }

  .user-card {
    padding: 1rem;
    width: 70%;
    margin: auto;
  }

  h3,
  p {
    text-align: center;
  }

  .img-container img {
    width: 50px;
    height: 50px;
  }
</style>

<div transition:fly={{ y: -400, opacity: 1 }} class="container">

  <div class="user-card">
    <div class="img-container">
      <img src={user.photoURL} alt="" />
    </div>
    <h3>{user.displayName}</h3>
    <p>Signed In</p>
    <div class="btn">
      <button on:click={signOut}>Sign Out</button>
    </div>
  </div>

</div>
