
<script>

    import { essentialsTotal } from "../store";
  
    export let formStyles;
    export let h2Styles;
    export let inputContainerStyles;
    export let singleInputContainerStyles;
    export let labelStyles;
    export let inputStyles;
    export let buttonStyles;
  
    let isOpen = false;
  
    let walletKeysPhoneId = 0;
    let tpShovel = 0;
    let soaps = 0;
    let plb = 0;
    let survivalFirstAid = 0

    $: totalWeight = walletKeysPhoneId+tpShovel+soaps+plb+survivalFirstAid;
  
    function updateEssentialsStore(e) {
      essentialsTotal.set(totalWeight);
    }
  </script>
  
  <form
    on:submit|preventDefault={updateEssentialsStore}
    class={formStyles}
  >
    <h2
      class={h2Styles}
      on:click={() => {
        isOpen = !isOpen;
      }}
    >
      essentials
    </h2>
  
    {#if isOpen}
      <div class={inputContainerStyles}>
        <div class={singleInputContainerStyles}>
          <label for="walletKeysPhoneId" class={labelStyles}
            >walletKeysPhoneId:
          </label>
          <input
            id="walletKeysPhoneId"
            type="number"
            bind:value={walletKeysPhoneId}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="tpShovel" class={labelStyles}>tpShovel :</label>
          <input
            id="tpShovel"
            type="number"
            bind:value={tpShovel}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="soaps" class={labelStyles}>soaps :</label>
          <input
            id="soaps"
            type="number"
            bind:value={soaps}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
          <label for="plb" class={labelStyles}>plb :</label>
          <input
            id="plb"
            type="number"
            bind:value={plb}
            class={inputStyles}
          />
        </div>
        <div class={singleInputContainerStyles}>
            <label for="survivalFirstAid" class={labelStyles}>survivalFirstAid :</label>
            <input
              id="survivalFirstAid"
              type="number"
              bind:value={survivalFirstAid}
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
  
  