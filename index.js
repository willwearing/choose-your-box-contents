// shopping cart counter
let count = 0;
const minItems = 0;
const maxItems = 6;

// progress bar
const progressBarFull = document.getElementById("progressBarFull");
progressBarFull.style.display = "none";

function increase(count) {
  progressBarFull.style.display = "block";
  progressBarFull.style.width = `${(count / maxItems) * 100}%`;
}

function decrease(count) {
  progressBarFull.style.width = `${(count / maxItems) * 100}%`;
}

// cards

const cardContents = [
  {
    title: "Fruits",
    image:
      "https://carebook.com/wp-content/uploads/2019/07/iStock-862097208.jpg",
    description:
      "Okay, so fruits aren't vegetables. Everyone gets confused sometimes",
    output: "",
  },
  {
    title: "Greens",
    image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
    description: "Make salad bases, or add a leafy crunch to sandwiches",
    output: "",
  },
  {
    title: "Roots & Stems",
    image:
      "https://media1.fdncms.com/inlander/imager/u/original/20406757/health6-1-fdddbc014712dd8c.jpg",
    description: "Sweet and/or savoury, roots add substance to a dish",
    output: "",
  },
  {
    title: "Sprouts & Herbs",
    image:
      "https://cdn.shopify.com/s/files/1/0156/0137/products/Basil_plant_1280x960_0fc95446-605c-49e3-aa42-c6f3a171b8ae.jpg",
    description: "Garlic, chives, dill... add some depth to dishes",
    output: "",
  },
];

const container = document.getElementById("shop");

cardContents.forEach((result, idx) => {
  const card = document.createElement("div");
  card.classList = "card-body";
  const content = `
  <div class="card">
    <div>
        <img class="card-images" src="${result.image}" alt="">
    </div>
    <div class= "card-wrap" id="card${idx + 1}">
        <div class="card-desc-wrap">
            <h5 class="card-title">${result.title}</h5>
            <p>${result.description}</p>
            <p>${result.output}</p>
        </div>   
        <div class="incrementor-wrap">
            <button id="incrementor-takeaway" onclick="subtractCount(counter${
              idx + 1
            })">
                <p>-</p>
            </button>
            <p id="counter${idx + 1}">0</p>
            <button id="incrementor-add" onclick="addCount(counter${idx + 1})">
                <p>+</p>
            </button>
        </div> 
    </div>

  </div>
  `;
  container.innerHTML += content;
});

//add/remove to cart control logic

function addCount(counterId) {
  if (Number(counterId.innerHTML) < maxItems && count < maxItems) {
    counterId.innerHTML = Number(counterId.innerHTML) + 1;
    count += 1;
    increase(count);
  }
}

function subtractCount(counterId) {
  if (Number(counterId.innerHTML) > 0 && count > 0) {
    counterId.innerHTML = Number(counterId.innerHTML) - 1;
    count -= 1;
    decrease(count);
  }
}
