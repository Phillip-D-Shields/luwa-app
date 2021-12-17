
<script>

  import { clothingTotal } from "../store";

  export let formStyles;
  export let h2Styles;
  export let inputContainerStyles;
  export let singleInputContainerStyles;
  export let labelStyles;
  export let inputStyles;
  export let buttonStyles;

  let isOpen = false;

  let baselayers = 0;
  let midlayers = 0;
  let outerlayers = 0;
  let hatsGloves = 0;
  let socksUndies = 0;

  $: totalWeight = baselayers + midlayers + outerlayers + hatsGloves + socksUndies;

  function updateClothingStore(e) {
    clothingTotal.set(totalWeight);
  }
</script>

<form
  on:submit|preventDefault={updateClothingStore}
  class={formStyles}
>
  <h2
    class={h2Styles}
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    clothing
  </h2>

  {#if isOpen}
    <div class={inputContainerStyles}>
      <div class={singleInputContainerStyles}>
        <label for="baselayers" class={labelStyles}
          >baselayers:
        </label>
        <input
          id="baselayers"
          type="number"
          bind:value={baselayers}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="midlayers" class={labelStyles}>midlayers :</label>
        <input
          id="midlayers"
          type="number"
          bind:value={midlayers}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="outerlayers" class={labelStyles}>outerlayers :</label>
        <input
          id="outerlayers"
          type="number"
          bind:value={outerlayers}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="hatsGloves" class={labelStyles}>hatsGloves :</label>
        <input
          id="hatsGloves"
          type="number"
          bind:value={hatsGloves}
          class={inputStyles}
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="socksUndies" class={labelStyles}>socksUndies :</label>
        <input
          id="socksUndies"
          type="number"
          bind:value={socksUndies}
          class={inputStyles}
        />
      </div>
    </div>
    <button
      class={buttonStyles}
      type="submit">update pack ( + {totalWeight} grams)</button
    >
  {/if}
</form>

