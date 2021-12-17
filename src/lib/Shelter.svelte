
<script>

    import { shelterTotal } from "../store";
  
    export let formStyles;
    export let h2Styles;
    export let inputContainerStyles;
    export let singleInputContainerStyles;
    export let labelStyles;
    export let inputStyles;
    export let buttonStyles;
  
    let isOpen = false;
  
    let tent = 0;
    let rope = 0;
    let packLiner = 0;
    let tarp = 0;

    $: totalWeight = tent + rope + packLiner + tarp;
  
    function updateShelterStore(e) {
      shelterTotal.set(totalWeight);
    }
  </script>
  
  <form
    on:submit|preventDefault={updateShelterStore}
    class={formStyles}
  >
    <h2
      class={h2Styles}
      on:click={() => {
        isOpen = !isOpen;
      }}
    >
      shelter
    </h2>
  
    {#if isOpen}
      <div class={inputContainerStyles}>
        <div class={singleInputContainerStyles}>
          <label for="tent" class={labelStyles}
            >tent:
          </label>
          <input
            id="tent"
            type="number"
            bind:value={tent}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="rope" class={labelStyles}>rope :</label>
          <input
            id="rope"
            type="number"
            bind:value={rope}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="packLiner" class={labelStyles}>packLiner :</label>
          <input
            id="packLiner"
            type="number"
            bind:value={packLiner}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="tarp" class={labelStyles}>tarp :</label>
          <input
            id="tarp"
            type="number"
            bind:value={tarp}
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
  
  