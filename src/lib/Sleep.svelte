<script>
  import Section from '../components/Section.svelte'
  import ItemInput from '../components/ItemInput.svelte';
  import { sleepTotal } from "../store";
  // sleep data
  let sleepBag = 0;
  let sleepPad = 0;
  let sleepLiner = 0;
  let sleepPillow = 0;

  $: sleepItemsTotal = sleepBag + sleepPad + sleepLiner + sleepPillow;

  function updateSleepStore() {
    sleepTotal.set(sleepItemsTotal);
  }
</script>

<!-- sleep section -->
<Section
  updateStore={() => updateSleepStore()}
  formStyles="bg-blue-900"
  titleStyles="bg-blue-700 hover:bg-blue-800 hover:text-slate-700"
  sectionTitle="sleep"
  buttonStyles="bg-blue-700 hover:bg-blue-800 hover:text-slate-700"
  totalWeight={sleepItemsTotal}
>
  <ItemInput bind:value={sleepBag} item={sleepBag} itemText="sleeping bag" />
  <ItemInput bind:value={sleepPad} item={sleepPad} itemText="sleeping pad" />
  <ItemInput
    bind:value={sleepLiner}
    item={sleepLiner}
    itemText="sleeping bag liner"
  />
  <ItemInput bind:value={sleepPillow} item={sleepPillow} itemText="pillow" />
</Section>
