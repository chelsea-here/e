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

//TODO:
// MAKE AN UPDATE TO AN EXISTING FREELANCERS PRICE - VERIFY AVERAGE UPDATES
// ADD FREELANCERS ONTO THE EXISTING LIST WITH FEW SECOND DELAY

const gridContainer = document.querySelector(".grid-container");

function avgPrice(arr) {
  const prices = arr.map((obj) => obj.price);
  const sum = prices.reduce((acc, curr) => acc + curr, 0);
  const avg = Math.round(sum / arr.length);
  const avgSpan = document.querySelector(".average");
  avgSpan.textContent = `$ ${avg}`;
}

function render(arr) {
  gridContainer.replaceChildren();
  for (let i = 0; i < arr.length; i++) {
    for (const [key, value] of Object.entries(arr[i])) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      if (key === "price") {
        gridItem.textContent = `$ ${value}`;
      } else {
        gridItem.textContent = `${value}`;
      }
      gridContainer.appendChild(gridItem);
    }
  }
  avgPrice(arr);
}

// console.log(arr[i]);
// console.log(`${value}`);

function randomFreelancer() {
  const names = ["Cher", "The Beatles", "Kendrick Lamar", "Eminem", "Beyonce"];
  const prices = [1500, 100, 50, 23, 9999];
  const occupations = [
    "veterinarian",
    "coder",
    "deep space explorer",
    "photographer",
    "marine biologist",
  ];

  const nameIdx = Math.floor(Math.random() * names.length);
  const priceIdx = Math.floor(Math.random() * prices.length);
  const occupationIdx = Math.floor(Math.random() * occupations.length);
  const freelancer = {
    name: names[nameIdx],
    price: prices[priceIdx],
    occupation: occupations[occupationIdx],
  };
  return freelancer;
}

// function assumes index is known
function updateValue(arr, indexToUpdate, keyToUpdate, newValue) {
  if (indexToUpdate >= 0 && indexToUpdate < arr.length) {
    arr[indexToUpdate][keyToUpdate] = newValue;
  }
  return arr;
}

render(freelancers);

setTimeout(() => {
  updateValue(freelancers, 2, "price", 300);
  render(freelancers);
}, 3000);

const interval = setInterval(() => {
  freelancers.push(randomFreelancer());
  render(freelancers);
  if (freelancers.length === 12) {
    clearInterval(interval);
  }
}, 5000);
