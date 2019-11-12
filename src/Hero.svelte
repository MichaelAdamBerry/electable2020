<script>
  import { fly } from "svelte/transition";
  export let noheight = false;
</script>

<style>
  .main-image {
    width: 100vw;
    background-color: var(--blu);
  }

  .main-image img {
    width: 100%;
    height: auto;
    filter: url("#x-rays");
  }
</style>

<filter
  id="x-rays"
  x="-10%"
  y="-10%"
  width="120%"
  height="120%"
  filterUnits="objectBoundingBox"
  primitiveUnits="userSpaceOnUse"
  color-interpolation-filters="sRGB">
  <feColorMatrix
    type="matrix"
    values="0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0"
    in="SourceGraphic"
    result="colormatrix" />
  <feComponentTransfer in="colormatrix" result="componentTransfer">
    <feFuncR type="table" tableValues="0.3 1 1" />
    <feFuncG type="table" tableValues="0.44 0.8 0.4" />
    <feFuncB type="table" tableValues="0.62 0.4 0.4" />
    <feFuncA type="table" tableValues="0 1" />
  </feComponentTransfer>
  <feBlend
    mode="hard-light"
    in="componentTransfer"
    in2="SourceGraphic"
    result="blend" />
</filter>

<div in:fly={{ duration: 500, x: -400 }} class="main-image">
  <img
    src="https://res.cloudinary.com/dscjol9s7/image/upload/v1572846556/debate-pic_ugszxm-removebg-preview_eqsxxx.png"
    alt="debate stage candidates" />
</div>
