// prob 1
const accountInfo = { username: "coder99", email: "coder@example.com" };
const gameStats = { level: 42, score: 9001, lastPlayed: "yesterday" };
const newProfile = {
  ...accountInfo,
  ...gameStats,
};
console.log(newProfile);

const { username } = newProfile;
const { score } = newProfile;
console.log(username, score);
// prob 2
const inventory = {
  apples: 15,
  bananas: 42,
  cherries: 100,
};
const newArray = Object.entries(inventory); // it returns a 2d array
console.log(newArray);
for (const item of newArray) {
  console.log(item);
  const [appleItems, bananaItems, cherrieItem] = item;
  console.log(appleItems,bananaItems,cherrieItem);
}

// prob 3
const appConfig = {
  theme: 'dark',
  version: '1.0.4'
};
// Object.seal(appConfig)
// appConfig.theme = 'light'
// appConfig.lang = 'en'
// console.log(appConfig);

// Object.freeze(appConfig)
// appConfig.theme = 'light'
// appConfig.lang = 'en'
// console.log(appConfig);

// prob 3



