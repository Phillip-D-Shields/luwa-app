import { derived, writable } from "svelte/store";

export const sleepTotal = writable(0);
export const eatDrinkTotal = writable(0);
export const clothingTotal = writable(0);
export const shelterTotal = writable(0);
export const essentialsTotal = writable(0);
export const luxuriesTotal = writable(0);


// ! derived can be used to sum and average, document has good examples
export const packTotal = derived(
  [
    sleepTotal,
    eatDrinkTotal,
    clothingTotal,
    shelterTotal,
    essentialsTotal,
    luxuriesTotal,
  ],
  ([
    $sleepTotal,
    $eatDrinkTotal,
    $clothingTotal,
    $shelterTotal,
    $essentialsTotal,
    $luxuriesTotal,
  ]) =>
    $sleepTotal +
    $eatDrinkTotal +
    $clothingTotal +
    $shelterTotal +
    $essentialsTotal +
    $luxuriesTotal
);

export const sleepPercentage = derived(
  [packTotal, sleepTotal], ([$packTotal, $sleepTotal]) => (($sleepTotal / $packTotal) * 100
).toFixed(2))
export const eatDrinkPercentage = derived(
  [packTotal, eatDrinkTotal], ([$packTotal, $eatDrinkTotal]) => (($eatDrinkTotal / $packTotal) * 100
).toFixed(2))
export const clothingPercentage = derived(
  [packTotal, clothingTotal], ([$packTotal, $clothingTotal]) => (($clothingTotal / $packTotal) * 100
).toFixed(2))
export const shelterPercentage = derived(
  [packTotal, shelterTotal], ([$packTotal, $shelterTotal]) => (($shelterTotal / $packTotal) * 100
).toFixed(2))
export const essentialsPercentage = derived(
  [packTotal, essentialsTotal], ([$packTotal, $essentialsTotal]) => (($essentialsTotal / $packTotal) * 100
).toFixed(2))
export const luxuriesPercentage = derived(
  [packTotal, luxuriesTotal], ([$packTotal, $luxuriesTotal]) => (($luxuriesTotal / $packTotal) * 100
).toFixed(2))


// TODO : derived store to show percentages used for bargraph
