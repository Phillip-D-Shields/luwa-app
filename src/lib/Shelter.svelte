<script>
  import Section from "../components/Section.svelte";
  import ItemInput from "../components/ItemInput.svelte";
  import { shelterTotal } from "../store";

  let tent = 0;
  let rope = 0;
  let packLiner = 0;
  let tarp = 0;

  $: totalWeight = tent + rope + packLiner + tarp;

  function updateShelterStore() {
    shelterTotal.set(totalWeight);
  }
</script>

<Section
  updateStore={() => updateShelterStore()}
  formStyles="bg-stone-900"
  titleStyles="bg-stone-700 hover:bg-stone-800 hover:text-slate-700"
  sectionTitle="shelter"
  buttonStyles="bg-stone-700 hover:bg-stone-800 hover:text-slate-700"
  totalWeight={totalWeight}
>
  <ItemInput bind:value={tent} item={tent} itemText="tent" />
  <ItemInput bind:value={rope} item={rope} itemText="rope" />
  <ItemInput bind:value={packLiner} item={packLiner} itemText="pack liner" />
  <ItemInput bind:value={tarp} item={tarp} itemText="tarp" />
</Section>
