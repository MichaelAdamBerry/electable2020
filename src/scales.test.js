import { scaleLinear } from "d3-scale";

let w = 300;

//coordinate to percent
const toPctX = scaleLinear()
  .domain([0, w])
  .range([0, 100]);

//percent to coordinate
//Y axis - DOM value inversed - lower DOM pos higher value
const toPntY = scaleLinear()
  .domain([0, 100])
  .range([w, 0]);

test("d3 scales x y points to base 100 percentage value", () => {
  expect(toPctX(300)).toBe(100);
  expect(toPctX(150)).toBe(50);
  expect(toPctX(0)).toBe(0);
});

test("d3 scales percentage value to coordinate value", () => {
  () => {
    expect(toPntY(100)).toBe(0);
    expect(toPntY(50)).toBe(150);
    expect(toPntY(0)).toBe(300);
  };
});
