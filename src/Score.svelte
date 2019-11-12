<script>
  import {
    interpolateRdBu,
    interpolateGreys,
    interpolateGreens
  } from "d3-scale-chromatic";
  import { rgb } from "d3-color";
  import { scaleLinear } from "d3-scale";
  import { interpolateHcl } from "d3-interpolate";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fade, fly, scale } from "svelte/transition";
  import {
    onSurveySubmit,
    getCandidateValuesById,
    resetCandidateValues
  } from "./Api.svelte";
  import FullModal from "./FullModal.svelte";
  import Results from "./Results.svelte";

  import Hero from "./Hero.svelte";
  export let sorted;

  export let sortX;
  export let sortY;
  export let user;
  let currentScores = {};

  onMount(async () => {
    // !RESET VARIABLE FOR TESTING PURPOSES! Danger! if reset is true, candidate values are reset to zero for testing;
    let reset = false;
    console.log("score rendering");

    if (!reset) {
      const toPntX = scaleLinear()
        .domain([0, 100])
        .range([0, 300]);
      const toPntY = scaleLinear()
        .domain([0, 100])
        .range([300, 0]);

      const toPctX = scaleLinear()
        .domain([0, 300])
        .range([0, 100]);

      const toPctY = scaleLinear()
        .domain([0, 300])
        .range([100, 0]);

      currentScores = await sorted.x.reduce((acc, d) => {
        let id = d.key;
        let userX = d.score.x;
        let userY = d.score.y;
        let userCoords = [toPntX(userX), toPntY(userY)];
        let src = d.src;
        let name = d.candidateName;

        getCandidateValuesById(id).then(data => {
          let coords = [Math.floor(toPntX(data.x)), Math.floor(toPntX(data.y))];

          acc[id] = {
            name: name,
            userX: userX,
            userY: userY,
            userCoords: userCoords,
            coords: coords,
            src: d.src,
            ...data
          };
          acc;
        });

        return acc;
      }, {});
    } else {
      resetCandidateValues(sorted.x);
    }
  });

  $: showFullX = true;
  $: showFullY = true;
  $: uid = user.uid;
  $: x = showFullX ? sorted.x : sorted.x.splice(0, 3);
  $: y = showFullY ? sorted.y : sorted.y.splice(0, 3);

  let submit = false;

  $: editModeX = false;
  $: editModeY = false;
  $: currentUpdate = null;

  $: userInfo = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber
  };

  let yColor = scaleLinear()
    .domain([100, 0])
    .interpolate(interpolateHcl)
    .range([rgb("#7acfd6"), rgb("#f1f0ee")]);

  let xColor = scaleLinear()
    .domain([100, 0])
    .interpolate(interpolateHcl)
    .range([rgb("#F7B733"), rgb("#f1f0ee")]);

  function viewAllX() {
    showFullX = true;
  }

  function viewAllY() {
    showFullY = true;
  }

  function viewMinY() {
    showFullY = false;
  }

  function viewMinX() {
    showFullX = false;
  }
</script>

<style>
  .scoreContainer {
    background-color: var(--lt-gry);
  }

  .img {
    width: 40px;
    height: 40px;
    display: inline-flex;
    border-radius: 50%;
    overflow: hidden;
  }

  .candidate {
    display: flex;
  }

  .candidate p {
    margin: 0;
    margin-left: 1rem;
  }

  .submitP {
    text-align: right;
    font-style: italic;
    opacity: 0.8;
    margin-left: 1rem;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
  }

  .submitP button {
    background: none;
    border: none;
    /* font-size: 1.3rem; */
    /* margin-top: 1.3rem; */
    /* text-align: left; */
    margin-bottom: 0;
    border-bottom: solid;
    font-size: unset;
    margin-top: unset;
  }

  .showMoreBtn {
    float: right;
    margin-right: 2rem;
    margin-top: 0;
    opacity: 0.8;
    font-style: italic;
    font-size: 1rem;
  }

  .submitSuccessP {
    text-align: center;
    color: var(--lt-red);
  }
  img {
    width: 40px;
    height: 40px;
  }

  table,
  tbody {
    width: 100%;
    margin: auto;
  }

  table {
    border-spacing: 0px;
  }

  .m-top {
    margin-top: 2rem;
  }

  p.m-top {
    margin-bottom: 0;
  }

  td {
    line-height: 50px;
    font-size: 1.3rem;
    margin: 3px;
  }

  /* table:last-of-type {
    margin-top: 1.3rem;
  } */

  th {
    margin-top: 0.5rem;
    text-align: left;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    background: #f2f2f2;
  }

  h2 {
    font-weight: 200;
    text-align: left;
    margin-left: 1rem;
    margin-top: 2rem;

    width: fit-content;
    padding-bottom: 0.7rem;
    border-bottom: solid 1px var(--blu);
    color: var(--lt-rd);
  }

  h3 {
    font-style: italic;
    font-weight: 200;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    text-align: right;
  }
  button {
    background: none;
    border: none;
    font-size: 1.3rem;
    margin-top: 1.3rem;
    text-align: left;
  }

  button:focus {
    outline: white;
  }

  button.edit-change {
    margin: 0;
    position: relative;
    width: 40px;
    height: 40px;
  }

  .submit {
    width: 80%;
    margin: auto;
  }

  .submit button {
    width: 100%;
    background-color: var(--blu);
    color: var(--lt-rd);
    font-size: 1.2rem;
    text-align: center;
  }

  input {
    height: 40px;
    font-size: 1.3rem;
    margin: 0;
  }

  .invalid:focus {
    outline-color: red;
  }

  .btnWrapper {
    position: relative;
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }

  button.edit-icon {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 0;
  }

  .edit-icon img {
    opacity: 0.7;
  }

  .award {
    display: flex;
    min-height: 100px;
  }

  .award h3 {
    margin-top: initial;
    margin-bottom: initial;
    line-height: 100px;
  }

  .winner img {
    width: 150px;
    height: auto;
  }

  @media (min-width: 600px) {
    .card {
      width: 50%;
      margin: auto;
    }

    table {
      width: 70%;
      margin: auto;
      max-width: 600px;
    }

    .submit {
      width: 200px;
    }

    .submitP {
      width: 70%;
      margin: auto;
      font-size: 1.2rem;
    }

    .showMoreBtn {
      margin-right: 15%;
    }

    .m-top {
      margin-bottom: 0;
      margin: auto;
      margin-top: 5rem;
      font-size: 1.3rem;
      font-style: italic;
      color: #2f2f2f;
      text-align: center;
    }
  }
</style>

<div class="scoreContainer">
  <h2>Your 2020 Score Card</h2>
  <Hero />

  {#if submit === false}
    <p class="submitP">
      Submit score to see how your scores comapre to other users
    </p>
    <p class="submitP">
      Look good?
      <button
        on:click={() => {
          console.log('currentScores are ', currentScores);
          onSurveySubmit(sorted.x, sorted.y, userInfo, currentScores);
          submit = true;
        }}>
        Submit Score
      </button>
    </p>

    <div class="card">
      <h2>Most Likely to Beat Trump</h2>
      <div class="award">
        <div class="winner">
          <img src={y[0].winImg} alt="most electable" />
        </div>
        <h3>{y[0].candidateName}</h3>
      </div>
    </div>

    <div class="card">
      <h2>Least Likely</h2>
      <div class="award">
        <div class="winner">
          <img src={y[y.length - 1].winImg} alt="least electable" />
        </div>
        <h3>{y[y.length - 1].candidateName}</h3>
      </div>
    </div>

    <div class="card">
      <h2>Your Favorite Candidate</h2>
      <div class="award">
        <div class="winner">
          <img src={x[0].winImg} alt="most electable" />
        </div>
        <h3>{x[0].candidateName}</h3>
      </div>
    </div>

    <div class="card">
      <h2>Least Favorite</h2>
      <div class="award">
        <div class="winner">
          <img src={x[x.length - 1].winImg} alt="least electable" />
        </div>
        <h3>{x[x.length - 1].candidateName}</h3>
      </div>
    </div>

    <p class="m-top">Edit candidate score by selecting the ➖ icon</p>
    <table>

      <tr>
        <th>Most Electable</th>
        <th>％</th>
        <th>✏️</th>
      </tr>
      <tbody>
        {#each y as d, i}
          <tr
            in:fly={{ x: 200, duration: 500 }}
            out:fade={{ duration: 300 }}
            style="background-color: {yColor(y[i].score.y)};">
            <td>
              <div class="candidate">
                <div class="img">
                  <img src={d.src} alt="headshot for {d.candidateName}" />
                </div>
                <p>{d.candidateName.slice(d.candidateName.indexOf(' ') + 1)}</p>
              </div>
            </td>

            {#if editModeY && i === currentUpdate}
              <td>
                <input
                  class:invalid={y[i].score.y < 0 || y[i].score.y > 100 || !y[i].score.y}
                  on:keydown={e => {
                    if (e.key === 'Enter') {
                      if (!y[i].score.y) {
                        y[i].score.y = 0;
                        return;
                      } else if (y[i].score.y < 0 || y[i].score.y > 100) {
                        alert('Value entered outside range. Enter a number between 0 and 100');
                        return;
                      } else {
                        console.log('enter pressed');
                        editModeY = false;
                        currentUpdate = null;
                        y = [...sortY(y)];
                      }
                    }
                  }}
                  on:blur|capture={() => {
                    if (!y[i].score.y || y[i].score.y < 0 || y[i].score.y > 100) {
                      y[i].score.y = 0;
                      return;
                    } else {
                      console.log('enter pressed');
                      editModeY = false;
                      currentUpdate = null;
                      y = [...sortY(y)];
                    }
                  }}
                  type="number"
                  bind:value={y[i].score.y}
                  min="1"
                  max="100" />
              </td>
            {:else}
              <td>{d.score.y}%</td>
            {/if}

            <td>
              <div class="btnWrapper">
                {#if editModeY && i === currentUpdate}
                  <button
                    transition:scale={{ easing: quintOut }}
                    class="edit-icon"
                    on:click={() => {
                      editModeY = false;
                      currentUpdate = null;
                    }}>
                    <img
                      src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572817267/icon/add-24px_hz5evx.svg"
                      alt="" />
                  </button>
                {:else}
                  <button
                    class="edit-change"
                    on:click={() => {
                      viewAllY();
                      editModeY = true;
                      currentUpdate = i;
                    }}>
                    <img
                      src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572817238/icon/remove-24px_ik72gt.svg"
                      alt="
                      " />
                  </button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}

      </tbody>
    </table>
    {#if !showFullY}
      <button class="showMoreBtn" on:click={viewAllY}>Show More</button>
    {:else}
      <button class="showMoreBtn" on:click={viewMinY}>Show Less</button>
    {/if}

    <table class="m-top">
      <tr>
        <th>By Favorbility</th>
        <th>%</th>
        <th>✏️</th>
      </tr>
      <tbody>
        {#each x as d, i}
          <tr style="background-color: {xColor(x[i].score.x)};">
            <td>
              <div class="candidate">
                <div class="img">
                  <img src={d.src} alt="headshot for {d.candidateName}" />
                </div>
                <p>{d.candidateName.slice(d.candidateName.indexOf(' ') + 1)}</p>
              </div>
            </td>
            {#if editModeX && i === currentUpdate}
              <td>
                <input
                  class:invalid={x[i].score.x < 0 || x[i].score.x > 100 || !x[i].score.x}
                  on:keydown={e => {
                    if (e.key === 'Enter') {
                      if (!x[i].score.x) {
                        x[i].score.x = 0;
                        return;
                      } else if (x[i].score.x < 0 || x[i].score.x > 100) {
                        alert('Value entered outside range. Enter a number between 0 and 100');
                        return;
                      } else {
                        editModeX = false;
                        currentUpdate = null;
                        x = [...sortX(x)];
                      }
                    }
                  }}
                  on:blur|capture={() => {
                    if (!x[i].score.x || x[i].score.x < 0 || x[i].score.x > 100) {
                      x[i].score.x = 0;
                      return;
                    } else {
                      editModeX = false;
                      currentUpdate = null;
                      x = [...sortX(x)];
                    }
                  }}
                  type="number"
                  bind:value={x[i].score.x}
                  min="1"
                  max="100" />
              </td>
            {:else}
              <td>{d.score.x}%</td>
            {/if}

            <td>
              <div class="btnWrapper">
                {#if editModeX && i === currentUpdate}
                  <button
                    transition:scale={{ easing: quintOut }}
                    class="edit-icon"
                    on:click={() => {
                      editModeX = false;
                      currentUpdate = null;
                    }}>

                    <img
                      src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572817267/icon/add-24px_hz5evx.svg"
                      alt="add" />

                  </button>
                {:else}
                  <button
                    transition:scale={{ easing: quintOut }}
                    class="edit-icon"
                    on:click={() => {
                      viewAllX();
                      editModeX = true;
                      currentUpdate = i;
                    }}>

                    <img
                      src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572817238/icon/remove-24px_ik72gt.svg"
                      alt="edit" />

                  </button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    {#if !showFullX}
      <button class="showMoreBtn" on:click={viewAllX}>Show More</button>
    {:else}
      <button class="showMoreBtn" on:click={viewMinX}>Show Less</button>
    {/if}

    <div class="submit">
      <button
        on:click={() => {
          console.log('currentScores are ', currentScores);
          onSurveySubmit(sorted.x, sorted.y, userInfo, currentScores);
          submit = true;
        }}>
        Submit Score
      </button>
    </div>
  {:else}
    <p in:fade={{ duration: 200 }} class="submitSuccessP">
      Your response has been recorded!
    </p>
    <p class="submitSuccessP">
      Here's how your scores line up with other submissions
    </p>
    <Results {currentScores} {sorted} />
  {/if}
</div>
