const mockData = {
  votes: {
    abc: {
      x: {
        biden: { x: 0, y: 100 },
        warren: { x: 75, y: 25 },
        booker: { x: 20, y: 0 },
        sanders: { x: 92, y: 88 }
      },
      y: {
        biden: { x: 0, y: 100 },
        warren: { x: 75, y: 25 },
        booker: { x: 20, y: 0 },
        sanders: { x: 92, y: 88 }
      }
    }
  },
  candidates: {
    biden: { x: 50, y: 50, count: 1 },
    warren: { x: 25, y: 25, count: 1 },
    booker: { x: 10, y: 10, count: 2 },
    sanders: { x: 90, y: 90, count: 1 }
  }
};

function calculateNewPercents(userValues, currentScore, candidate) {
  let count = currentScore[candidate].count;
  let y =
    (currentScore[candidate].y * count + userValues.y[candidate].y) /
    (count + 1);
  let x =
    (currentScore[candidate].x * count + userValues.x[candidate].x) /
    (count + 1);
  return { x: x, y: y, count: count + 1 };
}

test("percents update as expected", () => {
  expect(
    calculateNewPercents(mockData.votes.abc, mockData.candidates, "biden")
  ).toEqual({ x: 25, y: 75, count: 2 });

  expect(
    calculateNewPercents(mockData.votes.abc, mockData.candidates, "warren")
  ).toEqual({ x: 50, y: 25, count: 2 });
});
