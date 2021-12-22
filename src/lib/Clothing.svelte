<script>
  import Section from "../components/Section.svelte";
  import ItemInput from "../components/ItemInput.svelte";
  import { clothingTotal } from "../store";

  let baselayers = 0;
  let midlayers = 0;
  let outerlayers = 0;
  let hatsGloves = 0;
  let socksUndies = 0;

  $: totalWeight =
    baselayers + midlayers + outerlayers + hatsGloves + socksUndies;

  function updateClothingStore() {
    clothingTotal.set(totalWeight);
  }
</script>

<Section
  updateStore={() => updateClothingStore()}
  formStyles="bg-gray-900"
  titleStyles="bg-gray-700 hover:bg-gray-800 hover:text-slate-700"
  sectionTitle="clothing"
  buttonStyles="bg-gray-700 hover:bg-gray-800 hover:text-slate-700"
  totalWeight={totalWeight}
>
  <ItemInput bind:value={baselayers} item={baselayers} itemText="base layers" />
  <ItemInput
    bind:value={midlayers}
    item={midlayers}
    itemText="insulation layers"
  />
  <ItemInput
    bind:value={outerlayers}
    item={outerlayers}
    itemText="outer shells"
  />
  <ItemInput
    bind:value={hatsGloves}
    item={hatsGloves}
    itemText="hats and gloves"
  />
  <ItemInput
    bind:value={socksUndies}
    item={socksUndies}
    itemText="socks and undies"
  />
</Section>
