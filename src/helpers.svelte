<script context="module">
  import { scaleLinear } from "d3-scale";

  export function sortX(arr) {
    let x = [...arr].sort((a, b) => {
      return b.score.x - a.score.x;
    });
    return x;
  }

  export function sortY(arr) {
    let y = [...arr].sort((a, b) => {
      return b.score.y - a.score.y;
    });
    return y;
  }
</script>
