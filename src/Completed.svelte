<script>
  import FullModal from "./FullModal.svelte";
  export let updateSurvey;

  export let i;
</script>

<style>
  .completedDiv {
    height: 100vh;
    width: 100%;
    padding: 2rem;
    background-color: #fff5;
  }

  button {
    width: 100px;
    height: 2.5rem;
    color: white;
    margin-left: calc(50vw - 100px) px;
    background-color: #3664f2;
    border: none;
    font-size: 1rem;
    border-radius: 20px;
  }
</style>

<FullModal>
  <div class="completedDiv">
    <h2>Thanks for participating!</h2>

    <div class="optionsDiv">
      <button
        on:click={() => {
          updateSurvey('myResults');
        }}>
        View Your Results
      </button>
      <button
        on:click={() => {
          updateSurvey('allResults');
        }}>
        View All Results
      </button>
    </div>
  </div>
</FullModal>
