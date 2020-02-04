<script context="module">
  import firebase from "firebase/app";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // in firebase console create candidate collection and documents for each.

  //TODO Test these functions

  // Writes votes to each user in database as an object
  // {user: uid, favoriteRanking: xArr, electableRanking: yArr}
  //votes (collection) -> uid (document) -> {user: uid, favoriteRanking : xArr, electableRanking : yArr } (fields)
  export async function writeVotesToUser(xArr, yArr, userInfo) {
    let uid = userInfo.uid;
    function formatData(arr) {
      return arr.map(d => {
        let obj = {
          candidateName: d.candidateName,
          key: d.key,
          score: d.score
        };
        return obj;
      });
    }

    let userData = {
      user_info: userInfo,
      rank_by_fav: formatData(xArr),
      rank_by_electable: formatData(yArr)
    };
    db.collection("votes")
      .doc(uid)
      .set(userData);
  }

  // multiplies percentage value by number of votes then divides it by updated count to get new percentage
  function calculateNewPercents(userValues, currentScore, candidate) {
    let count = currentScore.count;
    let y = (currentScore.y * count + userValues.y) / (count + 1);
    let x = (currentScore.x * count + userValues.x) / (count + 1);
    return { x: x, y: y, count: count + 1 };
  }

  //data structured as {x: new percentage, y: new percentage, updated count}
  export function updateCandidateById(cid, data) {
    db.collection("candidates")
      .doc(cid)
      .update(data)
      .then(() => {
        console.log(cid, "updated");
      });
  }

  //get current values on load of Score or App component save to local data as totals
  export async function getCandidateValuesById(cid) {
    let ref = await db.collection("candidates").doc(cid);
    let data = await ref.get();
    return data.data();
  }

  //on submit - loop candidates FOR EACH Element Voted on
  // get current candidate scores (deal with undefined values) ->
  //calculateNewScores
  //update candidate values
  //write user data

  export function onSurveySubmit(xArr, yArr, userInfo, currentScores) {
    //loops y array gets the last name to pull value from database
    xArr.forEach(async candidate => {
      let key = candidate.key;
      let userValues = candidate.score;
      let current = currentScores[key];
      let updatedScore = await calculateNewPercents(userValues, current, key);

      updateCandidateById(key, updatedScore);
      writeVotesToUser(xArr, yArr, userInfo);
    });
  }

  export function resetCandidateValues(data) {
    let zero = { x: 0, y: 0, count: 0 };
    data.forEach(async candidate => {
      db.collection("candidates")
        .doc(candidate.key)
        .update(zero)
        .then(() => {
          console.log(candidate.key, "updated");
        });
    });
  }
</script>
