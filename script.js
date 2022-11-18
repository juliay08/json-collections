let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title" : "Day 1",
    "color" : "#FFFDF0",
    "picture" : "day1.jpg",
    "description" : ["Sign up"]
  },
  {
    "title" : "Day 2",
    "color" : "#ECFEFB",
    "picture" : "day2.jpg",
    "description" : ["Credit card checkout"]
  },
  {
    "title" : "Day 3",
    "color" : "#CEBB95",
    "picture" : "day3.jpg",
    "description" : ["Landing page (above the fold)"]
  },
  {
    "title" : "Day 4",
    "color" : "#D9D9D9",
    "picture" : "day4.jpg",
    "description" : ["Calculator"]
  },
  {
    "title" : "Day 5",
    "color" : "#EEEAF4",
    "picture" : "day5.jpg",
    "description" : ["App icon"]
  },
  {
    "title" : "Day 6",
    "color" : "#D7E9EF",
    "picture" : "day6.jpg",
    "description" : ["User profile"]
  },
  {
    "title" : "Day 12",
    "color" : "#D8F0E0",
    "picture" : "day12.jpg",
    "description" : ["E-commerce shop (single item)"]
  },
  {
    "title" : "Day 13",
    "color" : "#E9B39C",
    "picture" : "day13.jpg",
    "description" : ["Direct messaging"]
  },
  {
    "title" : "Day 14",
    "color" : "#CFE8EE",
    "picture" : "day14.jpg",
    "description" : ["Countdown timer"]
  },
  {
    "title" : "Day 15",
    "color" : "#A8A5B6",
    "picture" : "day15.jpg",
    "description" : ["On/off switch"]
  },
  {
    "title" : "Day 23",
    "color" : "#C7B9FF",
    "picture" : "day23.jpg",
    "description" : ["Onboarding"]
  },
  {
    "title" : "Day 24",
    "color" : "#4F55E4",
    "picture" : "day24.jpg",
    "description" : ["Boarding pass"]
  },
  {
    "title" : "Day 26",
    "color" : "#FDBEC3",
    "picture" : "day26.jpg",
    "description" : ["Subscribe"]
  },
  {
    "title" : "Day 30",
    "color" : "#B3B0B9",
    "picture" : "day30.jpg",
    "description" : ["Pricing"]
  },
  {
    "title" : "Day 43",
    "color" : "#BBE2D9",
    "picture" : "day43.jpg",
    "description" : ["Food/drink menu"]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
};

function createElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color']
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentImage = document.createElement("IMG");
  newContentImage.classList.add("designImage");
  newContentImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newContentImage);

  let newContentDescription = document.createElement("H4");
  newContentDescription.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDescription);

  contentGridElement.appendChild(newContentElement);
}
