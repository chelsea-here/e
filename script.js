const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = ["Cher", "The Beatles", "Kendrick Lamar", "Eminem", "Beyonce"];
const prices = [1500, 100, 50, 23, 9999];
const occupations = [
  "veterinarian",
  "coder",
  "deep space explorer",
  "photographer",
  "marine biologist",
];

//TODO:
// MAKE AN UPDATE TO AN EXISTING FREELANCERS PRICE - VERIFY AVERAGE UPDATES
// ADD FREELANCERS ONTO THE EXISTING LIST WITH FEW SECOND DELAY

const gridContainer = document.querySelector(".grid-container");

function avgPrice(arr, price) {
  const prices = arr.map((obj) => obj.price);
  const sum = prices.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  const avgSpan = document.querySelector(".average");
  avgSpan.textContent = `$ ${avg}`;
  console.log(avg * 1);
}

function gridFill(arr) {
  const numRows = arr.length + 1; //calculate based on length of array + 1 for column titles
  const numCols = Object.keys(arr[0]).length; //calculates number of keys in index 0 of array.
  console.log(numRows);
  console.log(numCols);

  // arrayOfObjectValues = Object.values(arr[i]);

  for (let i = 0; i < arr.length; i++) {
    //for each item in the array
    for (const [key, value] of Object.entries(arr[i])) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.textContent = `${value}`;
      gridContainer.appendChild(gridItem);
      // console.log(arr[i]);
      // console.log(`${value}`);
    }
  }
}

gridFill(freelancers);
avgPrice(freelancers);
