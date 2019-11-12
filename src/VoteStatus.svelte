<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  //prop value if board is complete
  export let hasVoted;

  //document id
  export let uid;
</script>

<p>has voted is {hasVoted}</p>
{#if hasVoted}
  <p>You have already voted</p>
{:else}
  <p>Rank the canditates</p>
{/if}
