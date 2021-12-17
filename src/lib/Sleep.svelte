<script>
  import { sleepTotal } from "../store";

  export let formStyles;
  export let h2Styles;
  export let inputContainerStyles;
  export let singleInputContainerStyles;
  export let labelStyles;
  export let inputStyles;
  export let buttonStyles;

  let isOpen = true;

  let bag = 0;
  let pad = 0;
  let liner = 0;
  let pillow = 0;

  $: totalWeight = bag + pad + liner + pillow;

  function updateSleepStore() {
    sleepTotal.set(totalWeight);
  }
</script>

<form on:submit|preventDefault={updateSleepStore} class={formStyles}>
  <h2
    class={h2Styles}
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    sleep
  </h2>

  {#if isOpen}
    <div class={inputContainerStyles}>
      <div class={singleInputContainerStyles}>
        <label for="bag" class={labelStyles}
          ><span class="normal gray">sleeping</span> bag:
        </label>
        <input id="bag" type="number" bind:value={bag} class={inputStyles} />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="pad" class={labelStyles}>pad :</label>
        <input id="pad" type="number" bind:value={pad} class={inputStyles} />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="liner" class={labelStyles}>liner :</label>
        <input
          id="liner"
          type="number"
          bind:value={liner}
          class={inputStyles}
          placeholder=false
        />
      </div>
      <div class={singleInputContainerStyles}>
        <label for="pillow" class={labelStyles}>pillow :</label>
        <input
          id="pillow"
          type="number"
          bind:value={pillow}
          class={inputStyles}
        />
      </div>
    </div>
    <button class={buttonStyles} type="submit"
      >update pack ( + {totalWeight} grams)</button
    >
  {/if}
</form>
