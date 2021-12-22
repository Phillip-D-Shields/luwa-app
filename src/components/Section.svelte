<script>
  export let updateStore;
  export let formStyles;
  export let sectionTitle;
  export let titleStyles;
  export let buttonStyles;
  export let totalWeight;

  let isOpen = false;
</script>

<form
  on:submit|preventDefault={updateStore}
  class="text-right flex flex-col cursor-pointer {formStyles}"
>
  <h2
    class="text-3xl border-3 px-6 py-4 text-slate-900 {titleStyles}"
    on:click={() => {
      isOpen = !isOpen;
    }}
  >
    {sectionTitle}
  </h2>

  {#if isOpen}
    <div class="flex flex-col pt-6 px-4 items-end">
      <slot />
    </div>
    <button
      class="px-6 h-12 rounded w-1/2 self-end uppercase font-semibold tracking-wider my-6 mx-2 text-slate-900 {buttonStyles}"
      type="submit">add {totalWeight} grams to pack</button
    >
  {/if}
</form>
