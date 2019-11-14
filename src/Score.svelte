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
  .submit {
    margin: 3rem 0;
    border: solid var(--lt-rd);
  }

  .svg-btn {
    width: 24px;
    height: 24px;
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
    margin: 2rem auto;
  }

  .m-top {
    margin-top: 2rem;
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

  .beatingTrumpDiv,
  .favoriteCandidatesDiv {
    padding: 1rem 0;
    margin-bottom: 3rem;
  }

  .categoryHeadingDiv h2 {
    width: 100%;
    border-bottom: unset;
    font-size: 2rem;
    color: var(--dk-rd);
    margin: auto;
  }

  .categoryHeadingDiv {
    padding: 2rem;
    background-color: #2f2f2f55;
  }

  .headingDiv {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;

    background-color: var(--blu);
  }

  .headingDiv h2 {
    font-size: 2.5rem;
    margin: 0;
    border-bottom: unset;
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

  @media (min-width: 1000px) {
    .beatingTrumpDiv,
    .favoriteCandidatesDiv {
      display: flex;
      justify-content: space-between;
      margin: auto;
      max-width: 600px;
      padding: 1rem 0;
      margin-bottom: 3rem;
    }

    .categoryHeadingDiv h2 {
      width: 600px;
      border-bottom: unset;
      font-size: 2rem;
      color: var(--dk-rd);
      margin: auto;
    }

    .categoryHeadingDiv {
      padding: 2rem;
      background-color: #2f2f2f55;
    }

    .headingDiv {
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: calc((100vw - 600px) / 2);
      background-color: var(--blu);
    }

    .headingDiv h2 {
      font-size: 2.5rem;
      margin: 0;
      border-bottom: unset;
    }

    .winner {
      max-height: 100px;
      overflow: hidden;
    }

    p.submitP {
      width: 100%;
      margin: initial;
      text-align: left;
      font-style: initial;
      font-size: 1.4rem;
    }

    .submit {
      margin: 3rem 0;
      border: solid var(--lt-rd);
    }

    .submit button {
      font-size: 1.6rem;
    }

    table {
      margin: 2rem auto;
    }
    .scoreContainer {
      padding-bottom: 2rem;
    }
  }
</style>

<div class="scoreContainer">
  <Hero />

  {#if submit === false}
    <div class="headingDiv">
      <h2 class="categoryHeading">Your 2020 Score Card</h2>

      <p class="submitP">
        Submit score and see how your scores comapre to others
      </p>
      <p>These scores look right good?</p>
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
    </div>
    <div class="categoryHeadingDiv">
      <h2 class="categoryHeading">Who Can Beat Trump?</h2>
    </div>
    <div class="beatingTrumpDiv">
      <div class="card">
        <h2>Most Likely</h2>
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
            <img src={y[y.length - 1].loseImg} alt="least electable" />
          </div>
          <h3>{y[y.length - 1].candidateName}</h3>
        </div>
      </div>

    </div>
    <div class="categoryHeadingDiv">
      <h2 class="categoryHeading">Who Do You Like?</h2>
    </div>
    <div class="favoriteCandidatesDiv">
      <div class="card">
        <h2>Your Fav</h2>
        <div class="award">
          <div class="winner">
            <img src={x[0].winImg} alt="most electable" />
          </div>
          <h3>{x[0].candidateName}</h3>
        </div>
      </div>

      <div class="card">
        <h2>Least Fav</h2>
        <div class="award">
          <div class="winner">
            <img src={x[x.length - 1].loseImg} alt="least electable" />
          </div>
          <h3>{x[x.length - 1].candidateName}</h3>
        </div>
      </div>
    </div>
    <div class="categoryHeadingDiv">
      <h2 class="categoryHeading">Full Results</h2>
    </div>
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
                    <div class="svg-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path
                          fill="#2f2f2f"
                          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </div>
                  </button>
                {:else}
                  <button
                    class="edit-change"
                    on:click={() => {
                      viewAllY();
                      editModeY = true;
                      currentUpdate = i;
                    }}>
                    <div class="svg-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                          d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9
                          2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5
                          5H2v2h12z"
                          fill="#e0474c" />
                        <path fill="none" d="M0 0h24v24H0z" />
                      </svg>
                    </div>
                  </button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}

      </tbody>
    </table>

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
                    <div class="svg-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path
                          fill="#2f2f2f"
                          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </div>
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
                    <div class="svg-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path
                          d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9
                          2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5
                          5H2v2h12z"
                          fill="#e0474c" />
                        <path fill="none" d="M0 0h24v24H0z" />
                      </svg>
                    </div>
                  </button>
                {/if}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
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
