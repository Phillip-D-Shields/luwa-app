<script>
  import { eatDrinkTotal } from "../store";

  export let formStyles;
  export let h2Styles;
  export let inputContainerStyles;
  export let singleInputContainerStyles;
  export let labelStyles;
  export let inputStyles;
  export let buttonStyles;

  let isOpen = false;

  let fuel = 0;
  let stove = 0;
  let potsPans = 0;
  let platesBowls = 0;
  let cupsBottles = 0;
  let utensils = 0;
  let water = 0;
  let food = 0;

  $: totalWeight =
    fuel +
    stove +
    potsPans +
    platesBowls +
    cupsBottles +
    utensils +
    water +
    food;

  const updateEatDrinkStore = (e) => eatDrinkTotal.set(totalWeight);
</script>

<form
  on:submit|preventDefault={updateEatDrinkStore}
  class={formStyles}
>
  <h2
    class={h2Styles}
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    eat / drink
  </h2>

  {#if isOpen}
    <div class={inputContainerStyles}>
      <div class={singleInputContainerStyles}>
        <label for="fuel" class={labelStyles}>fuel :</label>
        <input id="fuel" type="number" bind:value={fuel} class={inputStyles} />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="stove" class={labelStyles}>stove :</label>
        <input id="stove" type="number" bind:value={stove} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="potsPans" class={labelStyles}>pots n pans :</label>
        <input id="potsPans" type="number" bind:value={potsPans} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="platesBowls" class={labelStyles}>plates n bowls :</label>
        <input id="platesBowls" type="number" bind:value={platesBowls} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="cupsBottles" class={labelStyles}>cups n bottles :</label>
        <input id="cupsBottles" type="number" bind:value={cupsBottles} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="utensils" class={labelStyles}>utensils :</label>
        <input id="utensils" type="number" bind:value={utensils} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="water" class={labelStyles}><small id="name-desc" class="f6 black-60 dib mb2 tr">1 liter of water weighs 1000 grams </small> water :</label>
        <input id="water" type="number" bind:value={water} class={inputStyles}/>
      </div>
      <div class={singleInputContainerStyles}>
        <label for="food" class={labelStyles}>food :</label>
        <input id="food" type="number" bind:value={food} class={inputStyles}/>
      </div>
      <button
        class={buttonStyles}
        type="submit">update pack ( + {totalWeight} grams)</button
      >
    </div>
  {/if}
</form>
