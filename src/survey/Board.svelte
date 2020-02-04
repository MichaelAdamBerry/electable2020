<script>
  import { scaleLinear } from "d3-scale";

  let width = 345;

  let axis = [0, 1, 2, 3, 4, 5, 6];

  let axisScale = scaleLinear()
    .domain([0, 6])
    .range([0, 345]);
</script>

<style>
  path {
    stroke-width: 1;
    stroke: #d0d0d0;
    stroke-opacity: 0.7;
  }

  path.bold {
    stroke-width: 2;
    stroke: #2f2f2f;
  }

  text {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 100;
    font-stretch: normal;
    font-size: 15px;
    line-height: 1.2;
    font-family: "Cabin" sans-serif;
  }

  text.middle-align {
    text-anchor: middle;
    stroke: 1;
  }

  text.pad {
    fill: #fbfbfb;
    stroke: #fbfbfb;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20;
  }
</style>

<svg viewBox="0 0 345 345">
  <defs>
    <style>
      @import url("https://fonts.googleapis.com/css?family=Cabin&display=swap");
    </style>
  </defs>
  <style>

  </style>
  <rect width="345" height="345" fill="#fbfbfb" />
  {#each axis as l}
    <path d="M {axisScale(l)}, 0 L {axisScale(l)}, 345" />
    <path d="M 0, {axisScale(l)} L 345, {axisScale(l)}" />
    <path class="bold" d="M {axisScale(3)}, 10 L {axisScale(3)}, 330" />
    <path class="bold" d="M 15, {axisScale(3)} L 330, {axisScale(3)}" />

    <text class="middle-align pad" x={axisScale(3)} y="45">Most Electable</text>
    <text class="middle-align" x={axisScale(3)} y="45">Most Electable</text>

    <text class="middle-align pad" x={axisScale(3)} y="300">
      Least Electable
    </text>
    <text class="middle-align" x={axisScale(3)} y="300">Least Electable</text>

    <text class="start-align pad" y={axisScale(3) - 12} x="33">Least</text>
    <text class="start-align" y={axisScale(3) - 12} x="33">Least</text>
    <text class="start-align pad" y={axisScale(3) + 23} x="25">Favorite</text>
    <text class="start-align" y={axisScale(3) + 22} x="25">Favorite</text>

    <text class="start-align pad" y={axisScale(3) - 12} x="280">Most</text>
    <text class="start-align" y={axisScale(3) - 12} x="280">Most</text>
    <text class="start-align pad" y={axisScale(3) + 23} x="270">Favorite</text>
    <text class="start-align" y={axisScale(3) + 23} x="270">Favorite</text>
    <path
      d="M 13, {axisScale(3)} 18, {axisScale(3) + 5} 18, {axisScale(3) - 5} z" />
    <path
      d="M 332, {axisScale(3)} 327, {axisScale(3) + 5} 327, {axisScale(3) - 5} z" />

    <path
      d="M {axisScale(3)}, 10 {axisScale(3) + 5}, 15 {axisScale(3) - 5}, 15 z" />

    <path
      d="M {axisScale(3)}, 330 {axisScale(3) + 5}, 325 {axisScale(3) - 5}, 325 z" />
  {/each}
</svg>
