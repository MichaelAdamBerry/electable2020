<script>
  import { onMount } from "svelte";
  import { scaleLinear } from "d3-scale";
  import Board from "./Board.svelte";
  export let sorted;
  export let currentScores;
  //Shows board for each candidate with user data and global data
  let keys = Object.keys(currentScores);
  let w;
  $: userValues = {};
</script>

<style>
  .relative {
    position: relative;
  }

  .board {
    width: 300px;
    max-height: 300px;
    min-height: 300px;
  }

  .legend {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }

  .legend h3 {
    color: var(--lt-red);
  }

  .user-mark,
  .average-mark {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
  }

  .user-mark {
    background-color: var(--dk-rd);
  }
  .average-mark {
    background-color: #2f2f2f;
  }
  .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .c-header {
    display: flex;
    justify-content: space-around;
    padding: 1rem 2rem;
    background-color: var(--blu);
  }

  .c-header h2 {
    line-height: 50px;
    margin: 0;
  }

  .img-container img {
    width: 100%;
    height: auto;
  }

  .legend div.avg {
    color: black;
  }

  .legend div.user {
    color: var(--dk-rd);
  }

  @media (min-width: 600px) {
    .legend {
      justify-content: space-around;
      margin: 2rem auto;
    }
    .c-header {
      margin-top: 2rem;
    }

    .c-header h2 {
      line-height: 80px;
    }

    .img-container {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 850px) {
    .candidate-container {
      max-width: 600px;
      margin: auto;
      margin-bottom: 50px;
    }

    .c-header {
      background: none;
      border-top: solid var(--blu);
      border-bottom: solid var(--blu);
    }
  }
</style>

<div class="container">
  {#each keys as key}
    <div class="candidate-container" bind:clientWidth={w}>
      <div class="c-header">
        <div class="img-container">
          <img src={currentScores[key].src} alt={currentScores[key].name} />
        </div>
        <h2>{currentScores[key].name}</h2>

      </div>

      <div class="legend">
        <div class="user">
          <h3>Your Rating</h3>
          <p>{currentScores[key].userX}% Electability</p>
          <p>{currentScores[key].userY}% Favorbility</p>
        </div>

        <div class="avg">
          <h3>Average Rating</h3>
          <p>{Math.floor(currentScores[key].x)}% Electability</p>
          <p>{Math.floor(currentScores[key].y)}% Favorbility</p>
        </div>
      </div>
      <div class="relative">
        <div
          class="board absolute"
          style="transform:translate({(w - 300) / 2}px, 0px)">
          <div
            class="user-mark"
            style="transform: translate({currentScores[key].userCoords[0]}px, {currentScores[key].userCoords[1]}px);" />
          <div
            class="average-mark"
            style="transform: translate({currentScores[key].coords[0]}px, {currentScores[key].coords[1]}px);" />
          <Board />
        </div>
      </div>

    </div>
  {/each}
</div>
