<script>
  import Section from "../components/Section.svelte";
  import ItemInput from "../components/ItemInput.svelte";
  import { eatDrinkTotal } from "../store";

  // eat drink data
  let fuel = 0;
  let stove = 0;
  let potsPans = 0;
  let platesBowls = 0;
  let cupsBottlesBladders = 0;
  let utensils = 0;
  let water = 0;
  let food = 0;

  $: total =
    fuel +
    stove +
    potsPans +
    platesBowls +
    cupsBottlesBladders +
    utensils +
    water +
    food;

  const updateEatDrinkStore = () => eatDrinkTotal.set(total);
</script>

<Section
  updateStore={() => updateEatDrinkStore()}
  formStyles="bg-teal-900"
  titleStyles="bg-teal-700 hover:bg-teal-800 hover:text-slate-700"
  sectionTitle="eat and drink"
  buttonStyles="bg-teal-700 hover:bg-teal-800 hover:text-slate-700"
  totalWeight={total}
>
  <ItemInput bind:value={fuel} item={fuel} itemText="fuel" />
  <ItemInput bind:value={stove} item={stove} itemText="stove" />
  <ItemInput
    bind:value={potsPans}
    item={potsPans}
    itemText="pots and pans"
  />
  <ItemInput
    bind:value={platesBowls}
    item={platesBowls}
    itemText="plates and bowls"
  />
  <ItemInput
    bind:value={cupsBottlesBladders}
    item={cupsBottlesBladders}
    itemText="cups, bottles, and bladders"
  />
  <ItemInput
    bind:value={utensils}
    item={utensils}
    itemText="utensils"
  />
  <ItemInput
    bind:value={water}
    item={water}
    itemText="water (1 liter of water = 1000 grams)"
  />
  <ItemInput
    bind:value={food}
    item={food}
    itemText="food and snacks"
  />
</Section>
