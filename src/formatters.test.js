let data = [
  {
    name: "first",
    score: {
      x: 40,
      y: 50
    }
  },
  {
    name: "second",
    score: {
      x: 60,
      y: 49
    }
  },
  {
    name: "correct",
    score: {
      x: 100,
      y: 200
    }
  }
];

let sortedY = sortY();
let sortedX = sortX();

test("x y sort functions sort x and y values highest to lowest", () => {
  expect(sortedY[0].name).toMatch("correct");
  expect(sortedY[0].score.y).toBe(200);
  expect(sortedX[0].name).toBe("correct");
  expect(sortedX[0].score.x).toBe(100);
});

function sortX() {
  let x = data.sort((a, b) => {
    return b.score.x - a.score.x;
  });
  return x;
}

function sortY() {
  let y = data;
  y.sort((a, b) => {
    return b.score.y - a.score.y;
  });
  return y;
}
