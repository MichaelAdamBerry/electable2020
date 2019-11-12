<script>
  import firebase from "firebase/app";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import VoteStatus from "./VoteStatus.svelte";
  export let displayName;
  export let photoURL;
  export let uid;

  let candidates = {
    biden: [0.1, 0.2],
    warren: [0.4, 0.3],
    booker: [0.5, 0.5],
    harris: [0.1, 0.2]
  };

  //on page load check database for vote document
  //set value
  let hasVoted;
  var prevVote = db.collection("votes").doc(uid);
  prevVote.get().then(doc => {
    if (doc.exists) {
      hasVoted = true;
    } else {
      hasVoted = false;
    }
  });

  //allows us to iterate over candidate object
  var keys = Object.keys(candidates);

  $: if (hasVoted === true) {
    keys.forEach(key => {
      candidates[key][0] = -1;
      candidates[key][1] = -1;
    });
  }

  // Writes [x, y] values of each candidate -
  //stored in document with id of user id
  // called on submit
  async function writeVotes() {
    let vote = await db
      .collection("votes")
      .doc(uid)
      .get();
    if (vote.exists) {
      hasVoted = true;
      return;
    } else {
      db.collection("votes")
        .doc(uid)
        .set(candidates);

      incrementTotals();
      writeUserData();
      hasVoted = true;
    }
  }

  // Writes updates for each candidates total values
  //Write update for total amount of votes
  function incrementTotals() {
    keys.forEach(i => {
      db.collection("totals")
        .doc(i)
        .update({
          x: firebase.firestore.FieldValue.increment(candidates[i][0]),
          y: firebase.firestore.FieldValue.increment(candidates[i][1])
        });
    });
    db.collection("numVotes")
      .doc("count")
      .update({ total: firebase.firestore.FieldValue.increment(1) });
  }

  // rough implementation of query to database for
  //totalXY and numVotes to get average score
  async function getAverage(key) {
    let votes = await db
      .collection("totals")
      .doc(key)
      .get();
    let count = await db
      .collection("numVotes")
      .doc("count")
      .get();
    let { total } = await count.data();
    let { x, y } = await votes.data();
    let res = [x / total, y / total];
    console.log(res);
    return res;
  }

  async function decrementTotals() {
    // get users value with uid
    let docRef = await db
      .collection("votes")
      .doc(uid)
      .get();
    if (!docRef.exists) {
      console.error("cannot decrement totals for document that does not exist");
      return false;
    }
    let data = await docRef.data();
    console.log("data", data);
    //decement totals for each candidate
    keys.forEach(i => {
      db.collection("totals")
        .doc(i)
        .update({
          x: firebase.firestore.FieldValue.increment(data[i][0] * -1),
          y: firebase.firestore.FieldValue.increment(data[i][1] * -1)
        });
    });
    //decrement number of votes cast
    db.collection("numVotes")
      .doc("count")
      .update({ total: firebase.firestore.FieldValue.increment(-1) });
    //delete document
  }

  function clear() {
    let docRef = db.collection("votes").doc(uid);
    docRef
      .delete()
      .then(() => {
        console.log("document deleted for user with uid", uid);
      })
      .catch(e => console.log("error removing document", e));

    alert("removing from database");
  }

  function writeUserData() {
    const user = {
      displayName: displayName,
      uid: uid,
      photoURL: photoURL
    };
    let docRef = db.collection("users").doc(uid);
    docRef.get().then(doc => {
      if (!doc.exists) {
        docRef.set(user);
      }
    });
  }

  function validateSubmission() {
    if (hasVoted) {
      console.log("you can't vote twice");
      return false;
    }
    let valid = true;
    keys.forEach(k => {
      if (valid != false) {
        valid =
          candidates[k][0] > 0 &&
          candidates[k][0] < 1 &&
          candidates[k][1] > 0 &&
          candidates[k][1] < 1;
      } else {
        return false;
      }
    });
    console.log("Form is valid");
    return true;
  }

  let display = false;
  let msg = "";
</script>

{#if display === true}
  }
  {#if hasVoted}
    <button
      on:click={() => {
        decrementTotals().then(() => {
          clear();
        });
      }}>
      Update Your Vote
    </button>
  {/if}
  <VoteStatus {uid} {hasVoted} />
  <h2>Candidates</h2>

  {#each keys as key}
    <h3>{key}</h3>
    <span>x</span>
    <input type="number" bind:value={candidates[key][0]} />
    <span>y</span>
    <input type="number" bind:value={candidates[key][1]} />
  {/each}

  <button
    on:click={() => {
      let isValid = validateSubmission();
      msg = isValid ? 'Form is ok to send to DB' : 'Not right';
      if (isValid) {
        writeVotes();
        console.log('write function fired to database');
      }
    }}>
    Validate
  </button>
  <h4>{msg}</h4>
{/if}
