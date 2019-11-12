<script>
  import TopModal from "./TopModal.svelte";
  export let imgUrl;
  export let displayName;
</script>

<style>
  .container {
    padding: 2rem;
  }

  .avatar {
    width: 70px;
    height: auto;
    border-radius: 50%;
  }
</style>

<TopModal>
  <div class="container">
    <div class="avatar">
      <img src={imgUrl} alt="user avatar" />
    </div>
    <p>You are logged in as {displayName}</p>
    <button>Log Out</button>
  </div>
</TopModal>
