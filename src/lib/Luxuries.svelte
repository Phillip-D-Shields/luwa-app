<script>
  import Section from "../components/Section.svelte";
  import ItemInput from "../components/ItemInput.svelte";
  import { luxuriesTotal } from "../store";


  let luxury00 = 0;
  let luxury01 = 0;
  let luxury02 = 0;

  $: totalWeight = luxury00 + luxury01 + luxury02;

  function updateLuxuriesStore(e) {
    luxuriesTotal.set(totalWeight);
  }
</script>

<Section
  updateStore={() => updateLuxuriesStore()}
  formStyles="bg-yellow-900"
  titleStyles="bg-yellow-700 hover:bg-yellow-800 hover:text-slate-700"
  sectionTitle="luxuries"
  buttonStyles="bg-yellow-700 hover:bg-yellow-800 hover:text-slate-700"
  totalWeight={totalWeight}
>
<ItemInput bind:value={luxury00} item={luxury00} itemText="first luxury" />
<ItemInput bind:value={luxury01} item={luxury01} itemText="second luxury" />
<ItemInput bind:value={luxury02} item={luxury02} itemText="third luxury" />

</Section>
