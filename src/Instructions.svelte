<script>
  export let i;
  export var handleBackButton;
  export var handleSkipButton;
  export let active;
  let w;
</script>

<style>
  button {
    color: #2f2f2f;
    border: none;
    margin: 0;
    padding: 0;
    background-color: #2f2f2f00;
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 900;
  }

  button:first-of-type {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-self: center;
  }

  button:last-of-type {
    grid-row: 1/3;
    grid-column: 3/4;
    justify-self: center;
  }

  .btns {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;

    background-color: #2f2f2f;
    display: grid;
    grid-template-columns: 15% auto 15%;
    grid-template-rows: 1fr 1fr;
  }

  h2 {
    grid-row: 1/3;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
  }

  .svg-container {
    width: 20px;
    height: 20px;
  }

  h2,
  p {
    color: var(--lt-gry);
  }

  svg {
    fill: var(--lt-gry);
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 11px;
  }
</style>

<div bind:clientWidth={w} class="instructions">

  <div class="btns">
    <button on:click={handleBackButton}>
      <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16
            3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03
            17.15 8 12.5 8z" />
        </svg>
      </div>

      <p>back</p>

    </button>
    <h2>{active.candidateName}</h2>
    <button on:click={handleSkipButton}>
      <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96
            7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13
            16h9V7l-3.6 3.6z" />
        </svg>
      </div>
      <p>skip</p>
    </button>
  </div>
</div>
