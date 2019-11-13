<script>
  import { onMount } from "svelte";
  import { fly, scale, fade, blur } from "svelte/transition";
  import { scaleLinear } from "d3-scale";
  import { sortX, sortY } from "./helpers.svelte";
  import { elasticOut, quartInOut } from "svelte/easing";
  import Score from "./Score.svelte";
  import Completed from "./Completed.svelte";
  import Board from "./Board.svelte";
  import Popup from "./Popup.svelte";
  import Instructions from "./Instructions.svelte";

  //array of candidate objects
  export let data;

  export let status;
  export let renderedImages;
  export let updateSurvey;
  export let sorted;
  // reactive variable to track the active candidate by their index in data array.
  $: i = 0;
  $: active = data[i] ? data[i] : data[0];

  // intital width of board set to 300 - clientWidth of boardWrapperDiv bound to w
  $: w = 300;

  //Function called on pointer event inside board wrapper div
  //It adds score property to data array
  //And pushes new object to renderedImages array
  //Increments i variable
  //When i > data.length updates status of App to "complete"
  function handleBoardPress(e) {
    //Create D3 linear scales for points to percentage and percentage to point
    const toPctX = scaleLinear()
      .domain([0, w])
      .range([0, 100]);

    const toPctY = scaleLinear()
      .domain([0, w])
      .range([100, 0]);

    const toPntX = scaleLinear()
      .domain([0, 100])
      .range([0, w]);
    const toPntY = scaleLinear()
      .domain([0, 100])
      .range([w, 0]);

    //if survey not active  return
    if (status != "started") {
      return;
    }

    //set scaled values to data array
    data[i].score = {
      x: Math.floor(toPctX(e.offsetX)),
      y: Math.floor(toPctY(e.offsetY))
    };
    let obj = {
      src: active.src,
      //adjust rendered coordinate if image larger container
      x: e.offsetX + 50 > w ? w - 50 : e.offsetX,
      y: e.offsetY + 50 > w ? w - 50 : e.offsetY,
      n: active.candidateName
    };

    //set status of survey to "completed" if active index will be out of range
    //onComplete sorts returns sorted arrays in data.score.x & data.score.y
    if (renderedImages.length === data.length) {
      onComplete();
      updateSurvey("completed");
    }

    //update renderedImages array
    renderedImages = [...renderedImages, obj];

    if (i === data.length - 1) {
      updateSurvey("completed");
      onComplete();
      return;
    }
    //increment active index
    i = i + 1;
  }

  function handleBackButton() {
    if (i === 0) {
      return;
    }
    renderedImages = renderedImages.slice(0, -1);
    i = i - 1;
  }

  function handleSkipButton() {
    if (i === data.length - 1) {
      status = "completed";
      onComplete();
      return;
    }
    i = i + 1;
  }

  function onComplete() {
    let copy = [...data].filter(d => {
      return d.score != undefined;
    });
    sorted.x = [...sortX(copy)];
    sorted.y = [...sortY(copy)];
  }
</script>

<style>
  .scatterplotSection {
    position: absolute;
    left: 0px;
    width: 100%;
  }

  .scatter-plot {
    position: relative;
  }

  .headerContainerDiv {
    width: 100%;
    min-height: 120px;
    max-height: 120px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .bannerDiv {
    overflow: hidden;
  }

  .bannerDiv img {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .activeCandidateDiv {
    margin: auto;
    z-index: 200;
    grid-column: 1/5;
    grid-row: 1/3;
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

  .bannerDiv {
    grid-row: 1/4;
    grid-column: 1/5;
  }

  .filteredOverlay {
    opacity: 0.5;
    filter: grayscale(0.9);
  }

  .renderedDiv {
    border-radius: 50%;
    background-color: red;
    position: absolute;
    width: 50px;
    height: 50px;
    pointer-events: none;
  }

  .renderedImg {
    width: 100%;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  @media (min-width: 600px) {
    .scatterplotSection {
      position: initial;
      max-width: 500px;
      margin: auto;
      margin-top: 10vh;
    }
  }
  @media (min-width: 800px) {
    .scatterplotSection {
      margin-top: 5vh;
    }
  }
</style>

<section class="scatterplotSection">
  <div class="scatter-plot">

    <div transition:fly={{ y: -200 }} class="headerContainerDiv">
      <div class="bannerDiv">
        {#if status === null}
          <img
            src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572460254/candidates/bidenberniewarren_hcjfwl.svg"
            alt="graphic of candidates" />
        {:else}
          <svg
            class="filteredOverlay"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1196 793">
            <defs>
              <linearGradient
                id="a"
                x1="811.5"
                y1="196.5"
                x2="2.5"
                y2="196.5"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#1d59f4" />
                <stop offset="0" stop-color="#1f5af3" />
                <stop offset="0" stop-color="#265ff1" />
                <stop offset="0" stop-color="#2d65ee" />
                <stop offset="0.02" stop-color="#2f65ef" />
                <stop offset="0.15" stop-color="#3664f2" />
                <stop offset="0.51" stop-color="#3864f3" />
                <stop offset="0.51" stop-color="#3668f3" />
                <stop offset="0.51" stop-color="#2887f6" />
                <stop offset="0.51" stop-color="#1ba2f8" />
                <stop offset="0.51" stop-color="#11b8f9" />
                <stop offset="0.51" stop-color="#09c9fa" />
                <stop offset="0.51" stop-color="#04d4fb" />
                <stop offset="0.51" stop-color="#01dbfc" />
                <stop offset="0.51" stop-color="#00ddfc" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="5080.5"
                y1="-1037.5"
                x2="4280.5"
                y2="-1037.5"
                gradientTransform="translate(-4280 1630)"
                xlink:href="#a" />
              <linearGradient
                id="c"
                x1="4489.5"
                y1="1128.5"
                x2="3697.5"
                y2="1128.5"
                gradientTransform="translate(-3098 -732)"
                xlink:href="#a" />
            </defs>
            <title>board-bg</title>
            <rect
              x="2.5"
              y="0.5"
              width="809"
              height="392"
              stroke="#000"
              stroke-miterlimit="10"
              fill="url(#a)" />
            <rect
              x="0.5"
              y="392.5"
              width="800"
              height="400"
              transform="translate(801 1185) rotate(-180)"
              stroke="#000"
              stroke-miterlimit="10"
              fill="url(#b)" />
            <rect
              x="599.5"
              y="196.5"
              width="792"
              height="400"
              transform="translate(1392 -599) rotate(90)"
              stroke="#000"
              stroke-miterlimit="10"
              fill="url(#c)" />
          </svg>
        {/if}
      </div>
      {#each data as d}
        {#if status === 'started' && active.candidateName === d.candidateName}
          <div
            id={`img${active.candidateName}`}
            class="activeCandidateDiv"
            in:fly={{ delay: 300, duration: 300, x: -200 }}
            out:scale={{ start: 0.5 }}
            style={`background-image: url(${active.src})`} />
        {/if}
      {/each}
    </div>
    {#if status != null}
      <div
        bind:clientWidth={w}
        class="board-wrapper"
        on:pointerdown={e => handleBoardPress(e)}>
        {#each renderedImages as reimg}
          <div
            in:fly={{ duration: 600, x: w / 2 - reimg.x, y: reimg.y * -1 - 100, easing: quartInOut, opacity: 1 }}
            class="renderedDiv"
            style="transform: translate({reimg.x}px, {reimg.y}px);">
            <img class="renderedImg" src={reimg.src} alt={reimg.n} />
          </div>
        {/each}
        <Board />
      </div>
    {/if}
  </div>

  {#if status === 'started'}
    <Instructions {active} {i} {handleBackButton} {handleSkipButton} />
  {/if}

</section>
