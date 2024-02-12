// The monsters and socks
let monsters = [
	{
		name: 'monster1',
		alt: 'A yellow monster with a curly nose'
	},
	{
		name: 'monster2',
		alt: 'A yellow monster with a wide head, one eye, and an underbite'
	},
	{
		name: 'monster3',
		alt: 'A green monster with eyes on stalks and a mouth at the top of its head'
	},
	{
		name: 'monster4',
		alt: 'A red monster with horns, four eyes, and no legs'
	},
	{
		name: 'monster5',
		alt: 'A green monster with three horns on each side of its head, one eye, and a sad look on its face'
	},
	{
		name: 'monster6',
		alt: 'A green, triangle-shaped monster with sharp teeth, walking upside-down on its hands'
	},
	{
		name: 'monster7',
		alt: 'A purple monster with a single, sad looking eye and tentacles for arms'
	},
	{
		name: 'monster8',
		alt: 'A purple, oval-shaped monster with one eye and no arms or legs'
	},
	{
		name: 'monster9',
		alt: 'A blue, insect-like monster, with bug eyes, three body sections, and a pair of wings'
	},
	{
		name: 'monster10',
		alt: 'A blue monster with lopsided eyes on stalks and long, sharp teeth'
	},
	{
		name: 'monster11',
		alt: 'A furry gray monster with long arms and a happy face'
	},
	{
		name: 'sock',
		alt: 'A pair of athletic socks'
	}
];

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // get the parent element
  // let parentElement = document.querySelector(".row");

  // while there are still elements to shuffle
  while (0 !== currentIndex) {
    // pick a random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

    // // create inner div
    // let innerDiv = document.createElement("div");

    // // set className on temp div
    // innerDiv.setAttribute("class", "grid");
    // // create image element
    // let imageSrc = `<img src='./images/${temporaryValue}.svg' alt='' /> <p>${temporaryValue}`;
    // console.log("TEMP VAL -- ",temporaryValue)
    // innerDiv.innerHTML = imageSrc;
    // parentElement.appendChild(innerDiv);
  }
  return array;
}

let app = document.getElementById("app")
console.log(app)

let shuffledMonsters = shuffle(Array.from(monsters));
app.innerHTML =
  ` <h1>Monsters Inc.</h1>
    <div class='row'>
      ${shuffledMonsters.map(monster => {
        return `
        <div class='grid'>
          <img src='./images/${monster.name}.svg' alt='${monster.alt}'/>
        </div>`
      }).join("")}
    </div>`;

