<script>
  export let item;
  export let itemText;
  export let value;
</script>

<div class="flex justify-end items-center py-2 w-full">
  <label for={item} class="w-2/4 pr-2">{itemText} :</label>
  <input
    id={item}
    type="number"
    class="w-1/3 text-slate-700 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none "
    bind:value
  />
</div>
