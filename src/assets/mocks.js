const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const mockImages = [
  "fall-guys__16x9.webp",
  "fall-guys__1x1.webp",
  "final-fantasy-xvi__16x9.jpeg",
  "final-fantasy-xvi__1x1.webp",
  "gran-turismo-7__16x9.webp",
  "gran-turismo-7__1x1.webp",
  "hogwarts-legacy__16x9.webp",
  "hogwarts-legacy__1x1.webp",
  "hotline-miami__16x9.webp",
  "hotline-miami__1x1.webp",
  "megaman-11__16x9.webp",
  "megaman-11__1x1.webp",
  "metal-gear-solid__16x9.webp",
  "metal-gear-solid__1x1.jpeg",
  "resident-evil-4__16x9.webp",
  "resident-evil-4__1x1.webp",
  "spiderman-2__16x9.webp",
  "spiderman-2__1x1.webp"
];

const mockWeekImages = [
  "fall-guys__16x9",
  "fall-guys__1x1",
  "final-fantasy-xvi__16x9",
  "final-fantasy-xvi__1x1",
  "gran-turismo-7__16x9",
  "gran-turismo-7__1x1",
  "hogwarts-legacy__16x9",
  "hogwarts-legacy__1x1",
  "hotline-miami__16x9",
  "hotline-miami__1x1",
  "megaman-11__16x9",
  "megaman-11__1x1",
  "metal-gear-solid__16x9",
  "metal-gear-solid__1x1",
  "resident-evil-4__16x9",
  "resident-evil-4__1x1",
  "spiderman-2__16x9",
  "spiderman-2__1x1"
];

const mockCalendar = {
  days: 31,
  firstDay: 1,
  year: 2024,
  month: 1
};

const mockGame = {
  id: "7060050195c6b3a514f7358",
  launchDate: "2023-06-20T14:36:38.034Z",
  title: 'Test Game: The Adventure',
  summary: 'This is a test game summary.',
  imageFilenameThumb: "fall-guys__1x1",
  imageFilenameFull: "fall-guys__16x9",
  learnMoreLink: "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
  purchaseLink: "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now",
  dom: 15,
};

const mockGames = [
  {
    "id": "939705715c6b3898dd3da5",
    "dom": 1,
    "launchDate": "2023-14-29T21:32:46.879Z",
    "title": "Metal Gear Solidv: The Phantom Pain",
    "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
    "imageFilenameThumb": "metal-gear-solid__1x1",
    "imageFilenameFull": "metal-gear-solid__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
    "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
  },
  {
    "id": "18213007415c6b3aceb83604",
    "dom": 2,
    "launchDate": "2024-09-13T09:01:30.152Z",
    "title": "Gran Turismo 7",
    "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
    "imageFilenameThumb": "gran-turismo-7__1x1",
    "imageFilenameFull": "gran-turismo-7__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
    "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
  },
  {
    "id": "1785476915c6b3a21620b48",
    "dom": 3,
    "launchDate": "2023-01-31T19:45:11.811Z",
    "title": "Megaman 11",
    "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
    "imageFilenameThumb": "megaman-11__1x1",
    "imageFilenameFull": "megaman-11__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
    "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
  },
  {
    "id": "2143690395c6b39ea9621c0",
    "dom": 4,
    "launchDate": "2023-07-18T04:21:17.875Z",
    "title": "Hotline Miami",
    "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
    "imageFilenameThumb": "hotline-miami__1x1",
    "imageFilenameFull": "hotline-miami__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
    "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
  },
  {
    "id": "2025599465c6b3a81c11541",
    "dom": 5,
    "launchDate": "2023-06-11T15:21:14.503Z",
    "title": "Resident Evil 4",
    "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
    "imageFilenameThumb": "resident-evil-4__1x1",
    "imageFilenameFull": "resident-evil-4__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
    "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
  },
  {
    "id": "4692393625c6b390c959715",
    "dom": 6,
    "launchDate": "2023-03-19T00:29:27.528Z",
    "title": "Spiderman 2",
    "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
    "imageFilenameThumb": "spiderman-2__1x1",
    "imageFilenameFull": "spiderman-2__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
    "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
  },
  {
    "id": "6418261375c6b39f9246ff9",
    "dom": 7,
    "launchDate": "2023-03-05T02:50:49.950Z",
    "title": "Final Fantasy XVI",
    "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
    "imageFilenameThumb": "final-fantasy-xvi__1x1",
    "imageFilenameFull": "final-fantasy-xvi__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
    "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
  },
  {
    "id": "6615829505c6b38b4e30e47",
    "dom": 8,
    "launchDate": "2023-06-19T10:14:52.687Z",
    "title": "Hogwarts Legacy",
    "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
    "imageFilenameThumb": "hogwarts-legacy__1x1",
    "imageFilenameFull": "hogwarts-legacy__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
    "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now"
  },
  {
    "id": "7060050195c6b3a514f7358",
    "dom": 9,
    "launchDate": "2023-06-20T14:36:38.034Z",
    "title": "Fall Guys",
    "summary": "Stumble towards greatness.<br>Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
    "imageFilenameThumb": "fall-guys__1x1",
    "imageFilenameFull": "fall-guys__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
    "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now"
  }
];

const mockWeeks = [
  [
    {
      "id": "939705715c6b3898dd3da5",
      "dom": 1,
      "launchDate": "2023-14-29T21:32:46.879Z",
      "title": "Metal Gear Solidv: The Phantom Pain",
      "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "imageFilenameThumb": "metal-gear-solid__1x1",
      "imageFilenameFull": "metal-gear-solid__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
      "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
    },
    {
      "id": "18213007415c6b3aceb83604",
      "dom": 2,
      "launchDate": "2024-09-13T09:01:30.152Z",
      "title": "Gran Turismo 7",
      "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
      "imageFilenameThumb": "gran-turismo-7__1x1",
      "imageFilenameFull": "gran-turismo-7__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
      "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
    },
    {
      "id": "1785476915c6b3a21620b48",
      "dom": 3,
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
    },
    {
      "id": "2143690395c6b39ea9621c0",
      "dom": 4,
      "launchDate": "2023-07-18T04:21:17.875Z",
      "title": "Hotline Miami",
      "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
      "imageFilenameThumb": "hotline-miami__1x1",
      "imageFilenameFull": "hotline-miami__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
      "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
    },
    {
      "id": "2025599465c6b3a81c11541",
      "dom": 5,
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
    },
    {
      "id": "4692393625c6b390c959715",
      "dom": 6,
      "launchDate": "2023-03-19T00:29:27.528Z",
      "title": "Spiderman 2",
      "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      "imageFilenameThumb": "spiderman-2__1x1",
      "imageFilenameFull": "spiderman-2__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
      "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
    },
    {
      "id": "6418261375c6b39f9246ff9",
      "dom": 7,
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
    }
  ],
  [
    {
      "id": "939705715c6b3898dd3da5",
      "dom": 8,
      "launchDate": "2023-14-29T21:32:46.879Z",
      "title": "Metal Gear Solidv: The Phantom Pain",
      "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "imageFilenameThumb": "metal-gear-solid__1x1",
      "imageFilenameFull": "metal-gear-solid__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
      "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
    },
    {
      "id": "18213007415c6b3aceb83604",
      "dom": 9,
      "launchDate": "2024-09-13T09:01:30.152Z",
      "title": "Gran Turismo 7",
      "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
      "imageFilenameThumb": "gran-turismo-7__1x1",
      "imageFilenameFull": "gran-turismo-7__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
      "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
    },
    {
      "id": "1785476915c6b3a21620b48",
      "dom": 10,
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
    },
    {
      "id": "2143690395c6b39ea9621c0",
      "dom": 11,
      "launchDate": "2023-07-18T04:21:17.875Z",
      "title": "Hotline Miami",
      "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
      "imageFilenameThumb": "hotline-miami__1x1",
      "imageFilenameFull": "hotline-miami__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
      "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
    },
    {
      "id": "2025599465c6b3a81c11541",
      "dom": 12,
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
    },
    {
      "id": "4692393625c6b390c959715",
      "dom": 13,
      "launchDate": "2023-03-19T00:29:27.528Z",
      "title": "Spiderman 2",
      "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      "imageFilenameThumb": "spiderman-2__1x1",
      "imageFilenameFull": "spiderman-2__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
      "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
    },
    {
      "id": "6418261375c6b39f9246ff9",
      "dom": 14,
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
    }
  ],
  [
    {
      "id": "939705715c6b3898dd3da5",
      "dom": 15,
      "launchDate": "2023-14-29T21:32:46.879Z",
      "title": "Metal Gear Solidv: The Phantom Pain",
      "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "imageFilenameThumb": "metal-gear-solid__1x1",
      "imageFilenameFull": "metal-gear-solid__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
      "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
    },
    {
      "id": "18213007415c6b3aceb83604",
      "dom": 16,
      "launchDate": "2024-09-13T09:01:30.152Z",
      "title": "Gran Turismo 7",
      "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
      "imageFilenameThumb": "gran-turismo-7__1x1",
      "imageFilenameFull": "gran-turismo-7__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
      "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
    },
    {
      "id": "1785476915c6b3a21620b48",
      "dom": 17,
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
    },
    {
      "id": "2143690395c6b39ea9621c0",
      "dom": 18,
      "launchDate": "2023-07-18T04:21:17.875Z",
      "title": "Hotline Miami",
      "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
      "imageFilenameThumb": "hotline-miami__1x1",
      "imageFilenameFull": "hotline-miami__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
      "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
    },
    {
      "id": "2025599465c6b3a81c11541",
      "dom": 19,
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
    },
    {
      "id": "4692393625c6b390c959715",
      "dom": 20,
      "launchDate": "2023-03-19T00:29:27.528Z",
      "title": "Spiderman 2",
      "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      "imageFilenameThumb": "spiderman-2__1x1",
      "imageFilenameFull": "spiderman-2__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
      "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
    },
    {
      "id": "6418261375c6b39f9246ff9",
      "dom": 21,
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
    }
  ],
  [
    {
      "id": "939705715c6b3898dd3da5",
      "dom": 22,
      "launchDate": "2023-14-29T21:32:46.879Z",
      "title": "Metal Gear Solidv: The Phantom Pain",
      "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "imageFilenameThumb": "metal-gear-solid__1x1",
      "imageFilenameFull": "metal-gear-solid__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
      "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
    },
    {
      "id": "18213007415c6b3aceb83604",
      "dom": 23,
      "launchDate": "2024-09-13T09:01:30.152Z",
      "title": "Gran Turismo 7",
      "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
      "imageFilenameThumb": "gran-turismo-7__1x1",
      "imageFilenameFull": "gran-turismo-7__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
      "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
    },
    {
      "id": "1785476915c6b3a21620b48",
      "dom": 24,
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
    },
    {
      "id": "2143690395c6b39ea9621c0",
      "dom": 25,
      "launchDate": "2023-07-18T04:21:17.875Z",
      "title": "Hotline Miami",
      "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
      "imageFilenameThumb": "hotline-miami__1x1",
      "imageFilenameFull": "hotline-miami__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
      "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
    },
    {
      "id": "2025599465c6b3a81c11541",
      "dom": 26,
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
    },
    {
      "id": "4692393625c6b390c959715",
      "dom": 27,
      "launchDate": "2023-03-19T00:29:27.528Z",
      "title": "Spiderman 2",
      "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      "imageFilenameThumb": "spiderman-2__1x1",
      "imageFilenameFull": "spiderman-2__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
      "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
    },
    {
      "id": "6418261375c6b39f9246ff9",
      "dom": 28,
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
    }
  ],
  [
    {
      "id": "6418261375c6b39f9246ff9",
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now",
      "dom": 29
    },
    {
      "id": "2025599465c6b3a81c11541",
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now",
      "dom": 30
    },
    {
      "id": "6418261375c6b39f9246ff9",
      "dom": 31,
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
    }
  ]
];


export {
  mockGame,
  mockGames,
  mockImages,
  mockWeekImages,
  mockWeeks,
  daysOfWeek,
  mockCalendar
};
