<script>
  import { luxuriesTotal } from "../store";

  export let formStyles;
  export let h2Styles;
  export let inputContainerStyles;
  export let singleInputContainerStyles;
  export let labelStyles;
  export let inputStyles;
  export let buttonStyles;

  let isOpen = false;

  let luxury00 = 0;
  let luxury01 = 0;
  let luxury02 = 0;

  $: totalWeight = luxury00 + luxury01 + luxury02;

  function updateLuxuriesStore(e) {
    luxuriesTotal.set(totalWeight);
  }
</script>

<form on:submit|preventDefault={updateLuxuriesStore} class={formStyles}>
  <h2
    class={h2Styles}
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    luxuries
  </h2>

  {#if isOpen}
    <div class={inputContainerStyles}>
      <div class={singleInputContainerStyles}>
        <label for="luxury00" class={labelStyles}>luxury00: </label>
        <input
          id="luxury00"
          type="number"
          bind:value={luxury00}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="luxury01" class={labelStyles}>luxury01: </label>
        <input
          id="luxury01"
          type="number"
          bind:value={luxury01}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="luxury02" class={labelStyles}>luxury02: </label>
        <input
          id="luxury02"
          type="number"
          bind:value={luxury02}
          class={inputStyles}
        />
      </div>
    </div>
    <button class={buttonStyles} type="submit"
      >update pack ( + {totalWeight} grams)</button
    >
  {/if}
</form>
