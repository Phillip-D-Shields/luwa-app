<script>
  import Section from "../components/Section.svelte";
  import ItemInput from "../components/ItemInput.svelte";
  import { essentialsTotal } from "../store";

  let pack = 0;
  let walletKeysPhoneId = 0;
  let tpShovel = 0;
  let soaps = 0;
  let plb = 0;
  let survivalFirstAid = 0;

  $: totalWeight =
    pack + walletKeysPhoneId + tpShovel + soaps + plb + survivalFirstAid;

  function updateEssentialsStore() {
    essentialsTotal.set(totalWeight);
  }
</script>

<Section
  updateStore={() => updateEssentialsStore()}
  formStyles="bg-amber-900"
  titleStyles="bg-amber-700 hover:bg-amber-800 hover:text-slate-700"
  sectionTitle="essentials"
  buttonStyles="bg-amber-700 hover:bg-amber-800 hover:text-slate-700"
  totalWeight={totalWeight}
>
<ItemInput bind:value={pack} item={pack} itemText="pack with rain fly" />
  <ItemInput
    bind:value={walletKeysPhoneId}
    item={walletKeysPhoneId}
    itemText="wallet, keys, phone, and ID"
  />
  <ItemInput bind:value={tpShovel} item={tpShovel} itemText="tp and shovel" />
  <ItemInput bind:value={soaps} item={soaps} itemText="soaps" />
  <ItemInput bind:value={plb} item={plb} itemText="personal locator beacon and compass" />
  <ItemInput
    bind:value={survivalFirstAid}
    item={survivalFirstAid}
    itemText="survival gear and first aid kit"
  />
</Section>
