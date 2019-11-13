<script>
  import { fade, fly } from "svelte/transition";
  import Modal from "./Modal.svelte";
  import Hero from "./Hero.svelte";
  import FullModal from "./FullModal.svelte";
  import About from "./About.svelte";

  export let updateSurvey;
  export let status;
  export let data;

  let about = false;
</script>

<style>
  .container {
    background-color: var(--lt-gry);
  }
  .welcomeDiv {
    padding: 10% 5%;
  }

  .title {
    display: flex;
    justify-content: space-evenly;
  }

  button {
    margin-top: 1rem;
    width: 150px;

    height: 40px;
    color: #2f2f2f;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: var(--blu);
    border: none;
  }

  button.aboutBtn {
    background-color: #2f2f2f00;
    background-image: none;
    color: #2f2f2f;
    font-style: italic;
    border-bottom: solid #2f2f2f;
    font-size: 0.8rem;

    margin-top: none;
    margin-left: initial;
  }

  .btnWrapper {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  h3 {
    margin-top: 1rem;
    padding-top: 0.5rem;
    text-align: left;
    border-top: solid var(--lt-rd);
    width: 100%;
    margin-bottom: 0;
  }
  @media (min-width: 500px) {
    .welcomeDiv {
      max-width: 500px;
      margin: auto;
    }
  }
</style>

<div class="container">
  <Hero />
  {#if status === null}
    <div class="welcomeDiv">
      <div class="title">
        <h3>Here's What Matters : Who Can Beat Donald Trump?</h3>
      </div>

      <div in:fade={{ duration: 300, delay: 400 }}>
        <p>
          Gauging the electability of a candidate is a problematic but important
          metric to explore.
        </p>
        <p>
          In 2008, Barak Obama was seen by many as unelectable and the thought
          of Donald Trump
          <span class="italic">actually</span>
          winning the presidency in 2016 seemed unthinkable to many a pundit and
          insider.
        </p>
        <div in:fade={{ duration: 300, delay: 1000 }}>
          <p>
            However -- that some candidates are likely to fare better than
            others in a head to head match up against President Trump is
            undeniable, especially when one considers that it will likely be
            voters from only a handful of states which will decide the outcome
            of the 2020 election.
          </p>
        </div>
      </div>
      <div in:fade={{ duration: 300, delay: 1600 }}>
        <p>
          This ranking sytem will help you visually map the Democratic
          candidates by favorbility and electability.
        </p>
        <p>
          Grade candidates by positioning them on an area of a grid. The Y-Axis
          represents how likely they would be to beat Trump and the X-Axis
          represents your opinion of their policy goals..
        </p>
      </div>
      {#if about}
        <div class="btnWrapper">
          <button class="aboutBtn" on:click={() => (about = false)}>
            show less
          </button>
        </div>
        <About />
      {:else}
        <div class="btnWrapper">
          <button class="aboutBtn" on:click={() => (about = true)}>
            About this Project
          </button>
        </div>
      {/if}
      <div class="btnWrapper">
        <button
          on:click={() => {
            console.log('modal button was clicked');
            updateSurvey('started');
          }}>
          Get Started
        </button>
      </div>
    </div>
  {/if}
</div>
