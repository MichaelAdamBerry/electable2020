<script>
  import { onMount } from "svelte";
  import { draw, fade } from "svelte/transition";
  import {
    quintOut,
    elasticInOut,
    elasticIn,
    bounceOut,
    backOut
  } from "svelte/easing";

  export let loaded;
</script>

<style>
  div {
    transform: rotate(-13deg);
  }
</style>

<div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1021.6 668.6">
    <title>map</title>
    {#if true}
      <g in:fade={{ duration: 400 }}>
        <path
          d="M913.4,250.9c2,9.4,9,15.9,13.9,23.5,1.4,2.3,3.5,1.5,5.2,2.5-.6,3.7-3.2,7.8,2.9,10.4a32.5,32.5,0,0,0,1.5-17.4c-.2-1.3-.7-2.7-.4-4,1.3-7.4-1.5-12.9-7.5-17.1-1.2-.7-1.9-2.2-2.6-3.4s-.8-3.6,1.1-4.4a3.1,3.1,0,0,1,3.9.9l.5.5c5.2,5.7,6.4,5.5,9-2s3.6-13.8,5.8-20.6a14,14,0,0,0-2.3-12.9c-2.2-2.7-1.7-4.9.5-7.6,9.2-11.6,17.7-23.9,31.5-30.9,3.2-1.6,4.9-4.8,6.3-7.6s2.9-3.1,5.2-3.4c9.1-1.3,13.4-8.1,17.5-15,1.3-2.2.4-3.3-2-4.1s-4.1.4-5,2.6-1.3,5.1-5,5.6-4.8.4-5.9-2.1-4.1-7.2-4.7-11.5a18.2,18.2,0,0,0-3.2-8.7c-3.4-4.5-.6-10,1.5-14.2,3.7-7.3,7.7-14.5,13.3-20.6,2.8-3.1,2.8-7.2,3-11,.2-5.6,2.3-7.8,8-8,1.7-.1,3.1.1,4.6-1.5a55.1,55.1,0,0,0,8.8-12.1c3-5.2,2.3-9.2-2.4-12.8s-10.1-9-15.1-13.5a14.1,14.1,0,0,1-3.8-7.6c-1.7-7.3-4.4-13.9-10.1-19.1S979.8,0,975.9,4.9c-.7.9-1.3,2-2,3s-3.3,2.8-6,2.1c-5.6-1.6-6.8-.5-7,5.4-.4,11.3-.6,22.8-1.8,33.9-1.8,16.1-10.4,28.4-25.1,36.8a265.6,265.6,0,0,1-36.7,17.1c-8.6,3.4-12.6,10.4-17.4,17.2a55.1,55.1,0,0,0-5.5,10.5c.9,2.8,3.3,2.5,5.5,2.5s3-.5,4.1,1.4-.2,3-1.1,4a23.9,23.9,0,0,0-4.1,6.2c.4,2.2,2.8,2.9,3.9,5-4.6,5.8-11.2,7.7-17.8,9.4s-16.5,3-24.1,7.3a36.6,36.6,0,0,0-6.4,4.7c-.1,3.8,2.9,4.9,4.5,7s2.9,5,.6,8c-3.9,5.1-6.9,10.8-12.5,14.6s-12.4,11.5-19,17-11.4,7.7-17.2,11.2a56.3,56.3,0,0,0-7.2,5.4,9.2,9.2,0,0,1-6.2,1.8"
          fill="none"
          style="stroke: #e0474c; stroke-linecap: round; stroke-linejoin: round;
          stroke-width:2;" />
        <path
          d="M926.9,360.4c.8-.7,1.8-1.3,2.5-2,5.5-5.7,5.4-6.7-.7-11.7,2-3.1,3.7-5.4,8.3-3.5s5.6-2.7,7.3-5.4a19.8,19.8,0,0,0,2.1-5.9c.6-3.1-2.2-5.8-4.9-4.4a51.7,51.7,0,0,1-11.1,3.7c-2.4.6-5.6,1.2-7-2.4,1.1-2.2,2.7-3.9,5.5-3.4s5.5-1.4,7.5-3.5,2.9-5.3-.5-7.9c-1.4-1.1-2.4-1.6-2.6-3.6-.3-3.7-4-3.9-6.4-3.9-13.2-.2-25.7-4-38.5-6.6l-50.5-10.5-44.5-9.5c-1.1-.2-2-.7-3.5-.1-23.7,9.2-48,16.5-72,24.5-50.8,17.2-101.7,34.1-152.5,51.1-12.5,4.2-25,8.7-37.5,12.9-2.8.9-3.6,2.2-3.6,5.1.2,31.6.1,63.3.1,95"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M637.4,170.6c-22.1-1.3-44.3-1.7-66.5-3.1-8.1-.6-16.3-.4-24.5-.9l-27-1.2c-21.8-.8-43.7-1.5-65.5-2.9-8.1-.6-16.3-.5-24.5-.9s-18.3-.8-27.5-1.2c-21.7-.9-43.3-1.5-65-2.9-8.3-.6-16.7-.2-25-1s-14.4.3-21.5-1.1"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M747.9,182.4c-1.4-3.9-.2-7.6,1.6-11a37.7,37.7,0,0,0,3.9-9c2.5-11.3-7.5-24.8-19.5-23.1-2.8.5-5.3-.5-8-1.3-4.5-1.3-7,1.9-5.5,6.4s-4.4,15.7-9,17c-1.9.5-3.2-1.3-5.4-1.6-.8,6.9-4,13.4-3.6,20.6.6,9.5,2.2,18.8,8.6,26.4,3.1,3.8,3.1,8,2.3,12.1a52.4,52.4,0,0,1-7.5,17.9c-6.5,9.9-13.2,5.4-16.9-1.9s-3.7-13.3-4.4-20c-1.4-15.6-2.4-31.2,1.9-46.5.5-1.8-.3-3-2.5-5.6-2.9.2-4.3,2.7-5.4,4.6-2.3,4.4-30.8,3.8-41.1,3.2"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2" />
        <path
          d="M294.4,78.9c-1.8,5.7-.9,11.7-1.4,17.5-1.2,14-1.4,28-2.7,42-1.1,12.3-1.2,24.7-2.8,37-.7,5.3-.5,10.7-.9,16-1.2,13.1-1.3,26.3-2.2,39.5-1.2,17.3-2.8,34.6-3.9,52-.9,13-1,26-2.2,39s-1.7,25-2.7,37.5-1.5,24.3-2.3,36.5-1.3,26.7-2.8,40c-.6,5.6-.3,11.3-.9,17s-.3,10.4-1.2,15.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M54.9,94.9c-1.3-1.2-3.2-10.2-4.5-10.5-4.8-1.4-4.6,13.3-4.9,16.5-1.4,11.7-5.8,22.4-10.6,33a39.8,39.8,0,0,1-4.5,6.5c-2.3,3.1-4.7,6.2-5.4,10-1.1,6-6.4,9.3-8.8,14.4a12.7,12.7,0,0,0-1.4,6.1c-.3,7.8-1.2,15.7-1.9,23.5-.3,3.2-.7,6.2-.1,9.5s-.6,7.7-2.5,10.9a67.6,67.6,0,0,1-6.7,10.3c-4.1,5.1-2.6,9.4-.5,13.7S7.6,250,6.7,255.9s-1.7,9.2-2,14c-.1,3.1.1,5.9,1.8,8.5a29,29,0,0,1,4.5,14c.2,4.4,2.4,8.2,5.4,11.5,1.9-.5,2.9-2.6,5-2.5a48.4,48.4,0,0,1,1.7,5.4c.8,2.7.2,3.9-2.2,5.1s-3.9,5.4-2,9,2.7,9.8,8.4,12.2c2.7,1.1,2.2,4.7-.4,6.8-4.7,3.8-4.5,3.7-1.1,9s6.5,8.6,6.2,14.5c-.1,1.6,1,3.2,2.4,4.5,6,5.4,7.5,12.3,6.6,20-.3,2.3,0,4.7-.1,7a6.4,6.4,0,0,0,5,6.9,48.5,48.5,0,0,1,26,16.6c1.2,1.4,3,1.7,4.5,2.6s4.3,1.8,4.4,3.9c.2,5.1,3.7,6.1,7.6,7a8.8,8.8,0,0,1,6.5,5.5c1.8,4.6,3.6,9.4,5.6,13.9a6.6,6.6,0,0,1,.4,3.6c-1.1,6.5-1.2,6.4,4.5,9.5a28.1,28.1,0,0,0,12.5,3.3,111.1,111.1,0,0,1,19,3.3c3.2.7,6.2,1.9,9.5,1.9s6.4.5,8.6,3.5a6.7,6.7,0,0,0,2.9,2.4c10.8,3.9,19.6,11,29,17.1s22.5,10.8,32,19c6.9,6,15.4,5.1,23.5,6.5,15.1,2.7,30.4,2.7,45.5,5,2.2.3,3.3-.6,3-3s0-2.3,0-3.5c0-3.4,1.9-4.4,5-4,9.2,1.1,18.4.4,27.5.4,3.4-.1,5.6.8,7.6,3.5,5.6,7.8,11.7,15.1,19.3,21.3s9.5,12.5,12.3,20.2,5.7,16.5,15.3,19.7c3.2,1.1,6.1,3.1,9,4.9,6.4,4,11.3,3.2,16-2.5s11.2-10.2,19.5-10.6c6.3-.3,11,2.2,15,6.6,1.4,1.6,2.7,3.3,4,5,3.4,4.4,7.8,7.9,9.2,13.9,1,4.1,4.6,7.3,7.9,10,7.1,6,11.7,14.2,18.3,20.7,3.2,3.2,4.7,7.9,4.7,12.9,0,2.8-.5,5.6.8,8.5,2.5,6.1,6.9,8.5,13.1,9,8.5.7,16,4.5,24.1,6.8,2.9.8,6.9,3,10.2-.6-1.6-4.2-5-6.9-7-10.6-3-5.7-4.7-11.2-1.7-17.1,1.7-3.3-2.6-4.9-1.5-7.5s4.9-2.3,4-6c-.4-1.8-.1-3.7-.1-6.1s4.7-1.8,2.6-5.5c-.2-.4.9-2.3,1.4-2.3,4.3-.3,6-3.3,7.5-6.6s5.4,0,7.1-3,.9-5.2,3.5-6.4a7,7,0,0,1,3.9-.3c10.8,1.4,12.5-.1,17.9-10.9,3-6,7.4-10.9,11.2-16.3,1.6,1,2.8,1.6,3.9,2.4s.9,4.5,4,4,6.3-1,9.1-3,3-3.5,5.3-4.7c4-2,7.8-.9,11.6-.3,8.7,1.6,17,1.4,25-2.9a11.7,11.7,0,0,1,10-.5c1.3.6,1.7-.4,2.5-.5.5-2.1-1.3-3.2-2.1-4.5s.4-2.5.6-3.6,2.4-.5,3.5.5,3.6,4,3.5,7,.2,5,0,7.5.5,4.5,3,5.5,4.4.9,6-.6,4.8-2.8,8-2.5c6.1.5,8.4-2.9,5.4-7.8a11.4,11.4,0,0,1-1.4-6c2.8-1.3,4.4-.3,6.1,1.3a47.1,47.1,0,0,0,12.9,9.1,9,9,0,0,0,4.5,1c3.1,0,3.9-1.8,2.4-3.9s-3.7-5.2-6.9-6.1-2.8-2.1-4.1-3.3c1.1-3.3,4.9-3.4,6.3-6.4-1.9-1.9-4.3-2.9-6.7-2.2-4,1.2-6.6-.3-8.8-3.6-2.7,1.9-5.5,1.5-8.2,1.5s-4.2.4-4.5-2.5.9-4.2,3.5-5.1a12.6,12.6,0,0,1,9.4.7,15.3,15.3,0,0,0,15.1-.6c4.8-2.6,9.8-4.6,15.5-4.6,4,0,5.1-4.5,8.1-6.4,4.3,5.3,10.3,3.8,15.9,4,1.4,0,1.9-.6,2-2,.3-3.1,2.4-3.5,5-3.6s8-.8,12-.9c6.5-.1,12.6.9,17.6,5.9,8.3,8.3,12.7,8.1,22.4-.4a16.1,16.1,0,0,1,10-4.6c6.9-.6,11.6,1.3,14.7,8,1.7,3.8,5.3,6.8,9.3,8.5,5.5,2.3,6.7,7.1,7.5,12.1s.6,7.7,1,11.5.9,5.5,5,6.2,5.1,2.8,2.5,6.3c-.9,1.3-.4,2.3.5,3.5,2.4,3.9,6.6,6.6,7.6,11.5.3,1.3,1.9,1.6,3.4,1.5s5.7-.8,5.5,3.5c8.2,3.8,7.7,14.2,14.9,19.2,3.1,2.2,5.7,5.5,9.1,7.8,1,.6,2.8,1.2,2.9,2,.6,5.5,3.5,3.3,6.1,2l2-1c5.9-2.4,7.3-4.9,6-11a39.9,39.9,0,0,1-.2-16.5c2-9.3-1.1-17.5-3.2-26-2.6-10.5-11.4-16.8-16.6-25.5-.7-1.2-1.5-2.3-2.4-3.6l3.9-2.4a3.8,3.8,0,0,0-.5-1.5c-9-9.7-14.9-21-19.1-33.5-.5-1.7-.4-4.3-3.4-4.6s-.9,3.5-3,4.1-.2,1.7-2.1,1.4c-1.9-1.9-3.4-4.1-.4-6.9s2.6-4.7,2.5-7.5c-.3-6.3.3-12.7-.8-19s.6-11.1,3.7-16.1c1.4-2.2,3.9-4.5.7-7.5-.8-.9,0-2.8,1.8-4A83.6,83.6,0,0,0,893.2,414c4.1-8.3,11-15.1,16.7-22.6,2.5-3.2,5-5.9,5.8-10.5s5-7.4,8.7-10,8-7.2,13-9.6c.8-.4,1.2-1.9,1.8-2.9-3.9-2.4-6.2,3.7-9.8,1.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2" />
        <path
          d="M161.4,469.4h696"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M666.9,103.4c-8.9-1-14.9,4.5-20.9,9.6a59.5,59.5,0,0,0-11.6,12.9,22.2,22.2,0,0,1-12,9.5c-3.8,1.1-6.3-.4-6.9-4.5a9.2,9.2,0,0,0-3.1-5.5c-5.6,1.3-9.6,5.7-15,7.6-1.3-3.7-1.1-3.7,1.5-7.1,7.6-10.4,16.2-19.8,27-27l4.2-3a12,12,0,0,0-9.6-1.4,56.1,56.1,0,0,1-25.1.9c-2.5-.5-5.1-.4-7.5-1.1s-5.6-1-6.5-4.4-3.7-3.7-6.5-2.5c-6.3,2.9-12.9,2.5-19.5,2.5-3.3,0-6-.8-7-4.5s-4.6-6.4-7-9.5-3.4-2.1-5.6-.7c.1,1.8.5,4-1.4,5.7a6.8,6.8,0,0,1-5,1.5c-11.1-.3-22,2.1-33,2.8a302.7,302.7,0,0,1-33,0c-3.9-.2-7.7.1-11.5.2-17.2.2-34.3.6-51.5.4-14.9-.1-29.7-1.6-44.5-3.3a140.2,140.2,0,0,0-22.5-1.1c-17.3.8-34.2-2.3-51-5.9-8.7-2-17.7-2.9-26.5-4.7-12-2.3-24.2-3.8-36-7.7-7.2-2.4-15-2.9-22.5-4.2-15.2-2.6-30.1-6.5-45-10.3s-29.5-8-44-12.6c-7.4-2.3-15.3-3.4-22.9-5-.5,4.8,6.4,8.4,1.4,13.8,3.3,3.1,2.1,7.5,2.5,11.6.1.9-.3,1.8-1,1.9-6.1,1.2-4.7,6.6-4.7,10.1-.1,5.5-3.8,5.7-7.3,7S71.9,74,70,71.8c2.7-2.8,7-1.7,9.4-4.4.3-1.6-.4-2.8-1.4-4.1A3.3,3.3,0,0,1,78,59c4.7-4.3.3-6.9-2.2-7.9-8.2-3.5-15.2-9.3-23.7-12.8-4.2,1.3-3.7,5.2-3,8s.5,7.3-.1,11.1c-.8,5.8-.6,11.7,3.9,16.6l-3.1,3c1.5,2.3,3.8,4.5.7,7.4-1.5,1.4-.3,3.1.4,4.5s3.2,3,3,5.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2" />
        <path
          d="M180.4,56.9c-1.2,17.3-1.3,34.7-2.9,52-.7,7.1-.6,14.3-.8,21.5q-.6,16.5-1.5,33c-.9,16-1,32-2.7,48-.8,7.3-.4,14.6-.9,22-1.2,17.8-1,35.7-2.4,53.5-1.2,16-.9,32-2.7,48-.8,7.4-.2,15-.9,22.5-1,10.9-.3,22-1.3,33-1.5,15.8-1.3,31.7-2.7,47.5-1.1,11.3-.8,22.7-1.2,34-.1,2.3-.7,4.7-1,7"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        />
        <path
          d="M167.4,296.4c-9.2-.8-18.4-1.5-27.5-2.9-3.9-.6-8-.6-12-1-13.4-1.2-26.7-2.6-40-4-15.3-1.7-30.7-2.4-46-4.3-8.1-1-16.4-1-24.5-2.7a14.6,14.6,0,0,0-8,.4"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        />
        <path
          d="M892.4,413.9a34.4,34.4,0,0,0-4.5-.5h-83c-1.9,0-3.5-.2-5.1,1.9-12.6,17-25.6,33.7-38.4,50.6-.6.8-1,1.7-1.5,2.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        />
        <path
          d="M663.4,104.4a18.7,18.7,0,0,1-2.4,10.5c-2.3,4.2-1.1,7,3.4,8.9a74.9,74.9,0,0,0,12.5,4.5c6.3,1.4,11.5-1.8,16.5-4.9s7.9-5.5,12.1-7.9c1.7-1,3.8-2,6-.4a1.2,1.2,0,0,1,.4.8c0,7.1,1.6,8.5,8.5,7.4,3.3-.5,6.6-2,9.6.9-4.7,7.9-8.4,8.1-15.1,6.6a11.5,11.5,0,0,0-11.1,3,85.4,85.4,0,0,0-6.4,7.1c-3.4,3.9-4.2,3.9-8,.4-.6-.5-.7-1.5-1.5-1.9a2.9,2.9,0,0,0-2.9,2.5c-.1,7.7-5.6,13.1-8.6,19.5-1.4,3-3.4,5.8-2.5,9.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2" />
        <path
          d="M292.4,94.9l-52.5-9.5-57-11a10.5,10.5,0,0,0-2.5,0"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M811.4,217.4l53.5,17c16,4.9,31.7,10.5,48,14.5.1,0,0,.7,0,1"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M789.4,278.9c-3.8-5.2-4.1-11.7-5.8-17.6-2.5-8.5-5.6-17-6.7-25.9-.5-3.6-3-4.6-6.5-4.1s-7.4-.9-5-6.4,3.6-13.2,8.4-18.6,3-10.8,1.5-16.4-5.1-10.3-6.5-16c-.7-2.9-4.7-3.5-7.4-1.5a65.9,65.9,0,0,0-6.9,6c-3.9,4.1-8.6,5.4-14.1,6.1-12,1.5-24.1,1.8-36,4.4"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M100.9,158.4c-1.8.8-3.6.4-5.5.5-8.8.5-13.3,5.2-14,15a30.1,30.1,0,0,0,.1,6c1.4,10,11.2,15,20.4,10.4.8-.4,1.4-.1,2-.4"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M842.9,429.9h-1c-4.5-.2-9.3-.1-11.4,4.5s-3.1,11.1.4,16.5c2.1,3.1,7,3.9,12.5,2"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:draw={{ duration: 3000, easing: backOut }} />
        <path
          d="M519.4,508.9a176.7,176.7,0,0,1-2.9,24c-.8,4.5,1.7,9.1.9,13.7"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M689.9,364.9c-.3,6.2,2.2,11.9,3.1,18a49.7,49.7,0,0,0,3.3,13c.8,1.8,1,3.7,3.1,4.5"
          fill="none"
          stroke="#e0474c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M711.4,366.4c-1.6,7.6-2.8,15.3-5.9,22.5-1.8,4.1-2.6,8.7-6.1,12-1,1-1.1,2.5-1,4"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M111.4,374.9c-4.1-7.1-4.7-15.3-6.4-23-.5-2.5-1.5-4.9-1.2-7.5s-1.3-.2-1.9-.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M122.4,342.9c-1,11.9-3.5,23.3-11,33-.1.1.3.7.5,1"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M838.9,266.9c5-1.3,6.5-5.9,8.9-9.6a3.3,3.3,0,0,0-1.3-4.5c-2.5-1.5-5-2.7-7.4-4.1-2.7,3.7-2,17.5,1.3,29.2"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M923.4,123.9c.5,9.2-2.5,18.2-2.1,27.5.1,1.2-.9,2.5-1.4,3.7"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M859.4,247.9c-1.3,2.9-.3,6-.8,9s-.8,5.1-4,7.3-3.8,7.3-3.7,11.7"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M215.9,249.4c.3,9.7-1.3,19.3,0,29"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />

        <path
          d="M494.9,113.9c-.1,5.2.1,10.3-.9,15.5s.1,8.7.9,13"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M98.9,339.9c-.8,7.7-1.7,15.3-2.4,23-.2,1.7-.4,3.2-1.6,4.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M905.4,136.9c-2.1,5.4-1.2,11.1-.7,16.5.3,3.1.1,6.4,1.2,9.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M458.9,275.9a91.3,91.3,0,0,1-1.2,25c-1.1,5.2.4,11,.7,16.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M445.9,113.9c2.4,8.3,2.9,17.1,7,25,.5,1-.2,2.1-1,3"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M481.9,114.9c-2,5-.6,10.5-2.9,15.5-1.5,3.3-2.2,6.8-5.8,8.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M82.4,352.9c-2.2,6.2-.4,12.3-.1,18.5.1,1.8,1.2,3.7.1,5.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M949.4,125.9c1,7.7.3,15.3-.6,23-.5,4.7.7,10,.1,15"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M823.9,425.9a103.6,103.6,0,0,1-1.9,21.5c-.4,2.4.6,5,.9,7.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M513.9,510.9c-7.3,1.3-14.7-.2-22.3.8-.6,12.3.7,24.6-1.2,36.7"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M912.4,250.9c-3.3,5.4-1.3,10.3,1.6,14.9s4.2,7.1.8,10.9c1.2,2.2,4.3,2.4,4.7,5.2s-2.5,2.2-2.4,4.1,7.5,4.5,1.9,8.8c1.5,2.2,3.8,3.5,5.7,4.8-.7,3.3-5.5,1.6-5.8,5.3"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M929.9,128.9c3.2,11.8.2,24.1,2.5,36"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M920.9,163.9c1.1-8.5-5.6-13.7-8.7-20.4-1.1-2.5-2.8-5.3-5.8-6.7-1.4-.6-2-2.3-2-3.9"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M464.9,120.4c-4.1,4.5-5,10.8-8.8,15.6a37.1,37.1,0,0,1-2.7,2.9"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M436.9,278.9c2.1,9.1,1.5,18.3,1.5,27.5-.1,3.1.8,6,1,9s1.5,1.3,2.5,1.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M516.4,547.1c6.4-.2,12.6,1.9,19,1.3"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M726.4,371.9c-.5.5-1.2.9-1.5,1.5-4.8,9.7-9.9,19.3-10,30.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M464.9,113.9a68.4,68.4,0,0,0,7.5,24.5,10.1,10.1,0,0,1,.5,2.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M439.4,300.4l17.5,1"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M730.4,158.9c.6,5-1.7,9.3-4.1,13.4-.5,1-.9,1.6-.4,2.6"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M808.9,432.4c2.3.9,3.1,2.3,2.6,5a34.1,34.1,0,0,0,.4,16.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M96.9,374.9c-2.7-8.7-7.1-16.4-14-22.5a4.7,4.7,0,0,1-1.5-3.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M727.9,362.9c-2.5,5.6.3,10.7,1.4,16,1.9,8.6,4,17.1,9.1,24.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M947.9,148.9a36.8,36.8,0,0,1-15.5-.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M241.4,242.9c-1.3,4.4-.9,8.5.4,13,2.4,8.4,4,16.9,8.6,24.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M506.9,531.9c-4.8-1.1-9.7-.2-14.5-.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M858.9,262.4c4.6,3.6,4.7,9.7,8,14"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M239.9,252.4c-6,8-8.7,17.3-10.5,27"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M812.4,436.4c4.7,2.5,4.9,8.5,9,11.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M252.4,39.9c.1,4.4.3,8.9-2,13"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M238.4,40.9a26.7,26.7,0,0,0,.9,14,6.7,6.7,0,0,1-.4,5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M224.9,244.9c-.3.6.7,1.7-.5,2-5.6,1.2-11.3,2.1-17,.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M242.9,42.9c1.3,1.9.8,3.9.6,6s-.8,5.8.9,8.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M483.9,142.4c6.7,1.6,13.3.6,20,0"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M223.9,278.9c-6-.1-12,2.3-18,0"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M720.4,385.9c3.1,1,6.2,2.3,9.5,1"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M228.4,42.9c1.2,4.2.5,8.4-.6,12.5a5.2,5.2,0,0,0,.1,3.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M730.4,167.9c.3,3,.7,6,1,9"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M236.4,48.9c-.4,2.9-3.7,4.7-3,8"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M502.9,111.9c-5.1.6-10.3,2.1-15.5.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M721.4,168.9c-1.1,2.6-.2,5.3-.5,8"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M244.4,45.9c3.6,3.3,6.3,7,7,12"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M743.9,159.9l-4.3.9c-.4,4.9-1.3,9.7-.2,14.6"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M721.4,160.9c0,2.4,0,4.9,1.5,7"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M742.9,175.9c-3-.4-6,1.2-9,0"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        />
        <path
          d="M230.4,49.9c2,.7,0,3.3,2,4"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M738.9,161.4c-1.2-1.1-2.7-.2-4-.5"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M111.9,161.4c-6.4,5.9-7.7,21.9.5,28,3.2,2.5,7.5,2.7,10.5,0l1-1c10.5-11.5,7.4-14.4-1.1-21.4-2.9-2.5-5.8-5.8-10.4-5.6"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
        <path
          d="M409.4,280.4a6.3,6.3,0,0,0-2,1c-7.3,7.7-6.5,25.1,1.5,32a8.7,8.7,0,0,0,12,0,27.3,27.3,0,0,0,7.1-9c2.2-5,2.3-8.9-1.7-12.4s-9.6-9.7-16.4-11.6"
          fill="none"
          stroke="#2f2f2f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          transition:fade={{ delay: 1500 }} />
      </g>
    {/if}
  </svg>
</div>
