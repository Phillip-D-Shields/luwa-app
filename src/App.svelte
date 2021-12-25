<script>
  import Sleep from "./lib/Sleep.svelte";
  import EatDrink from "./lib/EatDrink.svelte";
  import Clothing from "./lib/Clothing.svelte";
  import Shelter from "./lib/Shelter.svelte";
  import Essentials from "./lib/Essentials.svelte";
  import Luxuries from "./lib/Luxuries.svelte";
  import Footer from "./lib/Footer.svelte";
  import { renderChart } from "./lib/renderChart";

  import {
    sleepTotal,
    eatDrinkTotal,
    clothingTotal,
    shelterTotal,
    essentialsTotal,
    luxuriesTotal,
    packTotal,
    sleepPercentage,
    eatDrinkPercentage,
    clothingPercentage,
    shelterPercentage,
    essentialsPercentage,
    luxuriesPercentage,
  } from "./store";

  // export let styles;
  $: chartData = [
    $essentialsPercentage,
    $sleepPercentage,
    $eatDrinkPercentage,
    $clothingPercentage,
    $shelterPercentage,
    $luxuriesPercentage,
  ];

  let showChart = false;

  let chartConfig = {
    type: "pie",
    data: {
      datasets: [
        {
          data: chartData,
          backgroundColor: [
            "#b91c1c",
            "#1D4ED8",
            "#0F766E",
            "#374151",
            "#44403C",
            "#a16207",
          ],
        },
      ],
    },
  };

  setInterval(() => {
    chartConfig.data.datasets[0].data = chartData;
  }, 1000);
</script>

<main
  class="font-sans relative bg-slate-900 text-slate-200 h-screen w-full overflow-y-scroll"
>
  <header class="font-sans w-full fixed top-0 py-4 px-2 bg-slate-900/95">
    <div class="bg-slate-800/95 p-4">
      <div
        class="text-cyan-300 text-5xl py-2 flex justify-around items-center cursor-pointer"
        on:click={() => (showChart = !showChart)}
      >
        <h1>luwa pack app</h1>

        {#if !showChart}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        {/if}
        <h1 class="text-3xl">
          current pack : {$packTotal} grams
        </h1>
      </div>

      {#if showChart}
        <div class="flex w-full justify-around items-center">
          <table class="w-1/3 text-center text-slate-300">
            <thead>
              <tr>
                <th>section</th>
                <th>weight</th>
                <th>% of pack</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-red-700">
                <td>essentials</td>
                <td>{$essentialsTotal} gm</td>
                <td>{$essentialsPercentage} %</td>
              </tr>
              <tr class="bg-blue-700">
                <td>sleep</td>
                <td>{$sleepTotal} gm</td>
                <td>{$sleepPercentage} %</td>
              </tr>
              <tr class="bg-teal-700">
                <td>eat / drink</td>
                <td>{$eatDrinkTotal} gm</td>
                <td>{$eatDrinkPercentage} %</td>
              </tr>
              <tr class="bg-gray-700">
                <td>clothing</td>
                <td>{$clothingTotal} gm</td>
                <td>{$clothingPercentage} %</td>
              </tr>
              <tr class="bg-stone-700">
                <td>shelter</td>
                <td>{$shelterTotal} gm</td>
                <td>{$shelterPercentage} %</td>
              </tr>
              <tr class="bg-yellow-700">
                <td>luxuries</td>
                <td>{$luxuriesTotal} gm</td>
                <td>{$luxuriesPercentage} %</td>
              </tr>
            </tbody>
          </table>
          <!-- chart here -->
          <div class="w-1/3 p-4">
            <canvas use:renderChart={chartConfig} />
          </div>
        </div>
      {/if}
    </div>
  </header>

  <section class="flex flex-col pt-48 px-4 py-6 overflow-auto">
    <div class="flex flex-col">
      <!-- section input components -->
      <Essentials />
      <Sleep />
      <EatDrink />
      <Clothing />
      <Shelter />
      <Luxuries />
    </div>
  </section>
  <Footer />
</main>
