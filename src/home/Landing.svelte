<script>
  import { fade, fly } from "svelte/transition";
  // import Modal from "./Modal.svelte";
  import Hero from "../Hero.svelte";
  // import FullModal from "./FullModal.svelte";
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
    width: 80%;
    height: 60px;
    background-color: var(--blu);
    border: none;
    font-size: 1.4rem;
    margin-top: 1rem;
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
        <h3>What make a candidate electable?</h3>
      </div>

      <div in:fade={{ duration: 300, delay: 400 }}>
        <p>
          Gauging the electability of a candidate is a tricky but important
          metric to explore.
        </p>
        <p>
          In 2008, before winning the Iowa Caucus, Barack Obama was thought to
          be unelectable in a general election. In 2016, some political pundits
          said there was no way Hillary Clinton could lose to Donald Trump. So
          as we enter the 2020 primary, maybe Democratic voters shouldn't worry
          so much about who they imagine to be electable or not and just vote
          for the candidate they agree with the most.
        </p>
        <div in:fade={{ duration: 300, delay: 1000 }}>
          <p>
            On the other hand -- that some candidates are likely to fare better
            than others in a head to head match up against President Trump is
            undeniable, especially given that the winner of Electoral College
            will likely be decided by voters from a handful of states.
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
          represents your opinion of their policy goals.
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
