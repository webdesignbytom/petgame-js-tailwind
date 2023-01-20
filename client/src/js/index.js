const mainContainer = document.getElementById('main__container');

const itemsAvailable = [
  {
    name: 'Bone',
    desc: 'It was free',
    type: 'junk',
    use: 10,
  },
  {
    name: 'Potion',
    desc: 'Health plus 10',
    type: 'heal',
    use: 10,
  },
  {
    name: 'Cheese',
    desc: 'Delicious treat',
    type: 'food',
    use: 10,
  },
  {
    name: 'Phoenix Down',
    desc: 'Restores health from 0 to 20 in battle',
    type: 'heal',
    use: 10,
  },
];

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.kills = 0;
    this.deaths = 0;
    this.fights = 0;
    this.level = 1;
    this.image =
      'https://migrainecanada.org/wp-content/uploads/2019/07/occipital_nerves.jpg';
    this.items = [
      {
        name: 'Potion',
        desc: 'Health plus 10',
        type: 'heal',
        use: 10,
        quantity: 10,
      },
      {
        name: 'Cheese',
        desc: 'Delicious treat',
        type: 'food',
        use: 10,
        quantity: 10,
      },
    ];
    this.weapons = [
      {
        name: 'Mega Sword',
        strength: +5,
        image: `🗡️`,
        quantity: 10,
      },
      {
        name: 'Bow and Arrow',
        strength: +8,
        image: `🏹`,
        quantity: 10,
      },
    ];
    this.magic = [
      {
        name: 'Fireball',
        damage: 10,
        image: `🔥`,
        type: 'fire',
        quantity: 10,
      },
      {
        name: 'Blizzard',
        damage: 8,
        image: `❄️`,
        type: 'ice',
        quantity: 10,
      },
      {
        name: 'Thunder',
        damage: 13,
        image: `⚡`,
        type: 'lightning',
        quantity: 10,
      },
    ];
  }
}

function createNewCharacter(name) {
  console.log('creating new character');

  // setTimeout(() => {
  //   const testButton = document.createElement('button');
  //   testButton.innerText = 'Submit';
  //   testButton.style.backgroundColor = 'silver'
  //   mainContainer.appendChild(testButton);
  //   testButton.onclick = () => {
  //     console.log('working')
  //   }
  // }, 3000);
}

createNewCharacter();
