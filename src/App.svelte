<script>
  import { onMount } from "svelte";
  import { auth, googleProvider } from "./firebase.js";
  import { authState } from "rxfire/auth";
  import { sortX, sortY } from "./helpers.svelte";
  import Login from "./Login.svelte";
  import Plot from "./Plot.svelte";
  import TopBar from "./TopBar.svelte";
  import Landing from "./Landing.svelte";
  import Score from "./Score.svelte";
  import DropDown from "./DropDown.svelte";

  let loaded = false;
  $: sorted = { x: [], y: [] };
  $: status = null;
  $: renderedImages = [];

  let data;
  let data_full = [
    {
      key: "booker",
      in_next_debate: true,
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573676804/icon/AP_18235542761934-768x516-removebg-preview_uc82ph.png",
      candidateName: "Cory Booker",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125016/candidates/Yz_PLR20_400x400_bm8ayo.jpg"
    },
    {
      key: "biden",
      in_next_debate: true,
      candidateName: "Joe Biden",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573676704/icon/joe-cool-removebg-preview_heqqiw.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572124964/candidates/Biden_Square_wecwag.png"
    },
    {
      key: "warren",
      in_next_debate: true,
      candidateName: "Elizabeth Warren",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573676232/1000x-1-removebg-preview_esssmz.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125725/candidates/RUqnwGsy_400x400_k9ag5f.jpg"
    },
    {
      key: "harris",
      in_next_debate: true,
      candidateName: "Kamala Harris",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573676422/rs-kamala-harris-2e88a6ad-c1ad-4e59-b091-5b25c2f39163-removebg-preview_ffxdza.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125344/candidates/Kamala_Harris_uy0eaj.png"
    },
    {
      key: "buttigieg",
      in_next_debate: true,
      candidateName: "Pete Buttigieg",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077214/icon/Pete-Buttigieg-1-removebg-preview_i8mbkc.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125093/candidates/Pete_Buttigieg_utcjel.jpg"
    },

    {
      key: "yang",
      in_next_debate: true,
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077345/icon/andrew-yang-houston-debate-removebg-preview_zobbdu.png",
      candidateName: "Andrew Yang",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125829/candidates/Andrew_Yang_u52msp.png"
    },

    {
      key: "gabbard",
      in_next_debate: true,
      candidateName: "Tulsi Gabbard",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077498/icon/gettyimages-1139098772-612x612-removebg-preview_nuyc6t.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125288/candidates/Gabbard__282_29_uye5jc.jpg"
    },
    {
      key: "castro",
      in_next_debate: false,
      candidateName: "Julian Castro",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077645/icon/08092019-JulianCastro-002-3x2-1080-removebg-preview_amkgvd.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125119/candidates/Julian_Castro_seeol1.png"
    },

    {
      key: "williamson",
      in_next_debate: false,
      candidateName: "Marianne Williamson",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077839/icon/20151207-ss-mini-5-949x534-removebg-preview_cqpxtc.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125801/candidates/Marianne_Williamson_Pres_fapaq3.jpg"
    },
    {
      key: "steyer",
      in_next_debate: true,
      candidateName: "Tom Steyer",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573077967/icon/Election_2020_Democrats_12995-removebg-preview_sh09by.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125686/candidates/Tom_Steyer_Square_jtdvxu.jpg"
    },
    {
      key: "sanders",
      in_next_debate: true,
      candidateName: "Bernie Sanders",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573078167/icon/APTOPIX-DEM-2016-Sand_Horo2-removebg-preview_wdioef.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125593/candidates/Bernie_Sanders_Square_yygfyx.jpg"
    },
    {
      key: "messam",
      in_next_debate: false,
      candidateName: "Wayne Messam",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573078374/icon/707567872-removebg-preview_qwzaql.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125503/candidates/Wayne_Messam_cw0epd.png"
    },
    {
      key: "delaney",
      in_next_debate: false,
      candidateName: "John Delaney",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573078553/icon/john-delaney-02-gty-jef-190222_hpEmbed_22x15_992-removebg-preview_mbms8o.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125196/candidates/John_Delaney_Square_yl0bky.jpg"
    },
    {
      key: "bullok",
      in_next_debate: false,
      candidateName: "Steve Bullok",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573078740/icon/im-90718-removebg-preview_c4lg3i.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572125064/candidates/Steve_Bullock_Square_wsivki.jpg"
    },
    {
      key: "bennet",
      in_next_debate: false,
      candidateName: "Michael Bennet",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573078958/icon/2019-01-24_SenMichaelBennet_p6aptq-removebg-preview_qx8nvf.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572283882/candidates/michael-bennet-official-photo-1561687536_jdcgjm.jpg"
    },
    {
      key: "sestak",
      in_next_debate: false,
      candidateName: "Joe Sestak",
      winImg:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1573079189/icon/195px-Joe_Sestak_2008-removebg-preview_gotvyv.png",
      src:
        "https://res.cloudinary.com/dscjol9s7/image/upload/v1572284180/candidates/ji5k8gdhyhixkqcv2izj.jpg"
    }
  ];

  //TODO Fetch current percentage score and write to $: currentValues
  //By default only the candidates that have qualified for the next debate are shown
  onMount(() => {
    data = data_full.filter(d => d.in_next_debate);
    loaded = true;
  });

  $: showDropDown = false;
  $: user = false;

  const unsubscribe = authState(auth).subscribe(u => {
    user = u;
    console.log(user);
  });

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function signOut() {
    auth.signOut();
  }

  function toggleDropDown() {
    if (!showDropDown) {
      showDropDown = true;
      console.log("showing drop down", showDropDown);
    } else {
      showDropDown = false;
      console.log("not showing drop down", showDropDown);
    }
  }

  function updateSurvey(statusInput) {
    status = statusInput;
  }
</script>

<style>
  :global(body) {
    overflow: hidden;
    background: #24242422;
  }

  :root {
    --blu: #7acfd6;
    --lt-rd: #e0474c;
    --dk-rd: #b11a21;
    --lt-gry: #f1f0ee;
  }
  body {
    padding: 0;
    overflow: scroll;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:600|Spectral&display=swap"
    rel="stylesheet" />
</svelte:head>
<body>
  {#if !user}
    <Login {login} {loaded} />
  {:else}
    <main>
      <TopBar {status} {toggleDropDown} />
      {#if showDropDown}
        <DropDown {signOut} {user} />
      {/if}
      {#if status === null}
        <Landing {status} {updateSurvey} {data} />
      {:else if status === 'started'}
        <div>
          <Plot
            {data}
            {sorted}
            {status}
            {renderedImages}
            {data}
            {updateSurvey} />
        </div>
      {:else if status === 'completed'}
        <Score {sorted} {sortX} {sortY} {user} />
      {/if}
    </main>
  {/if}
</body>
