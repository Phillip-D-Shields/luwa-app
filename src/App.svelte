<script>
  import Sleep from "./lib/Sleep.svelte";
  import EatDrink from "./lib/EatDrink.svelte";
  import Clothing from "./lib/Clothing.svelte";
  import Shelter from "./lib/Shelter.svelte";
  import Essentials from "./lib/Essentials.svelte";
  import Luxuries from "./lib/Luxuries.svelte";
  import Footer from "./lib/Footer.svelte";
  // import Chart from "./lib/Chart.svelte";
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
    $sleepPercentage,
    $eatDrinkPercentage,
    $clothingPercentage,
    $shelterPercentage,
    $essentialsPercentage,
    $luxuriesPercentage,
  ];


  let chartConfig = {
    type: "pie",
    data: {
      // labels: [
      //   "slee",
      //   "eat/drink",
      //   "clothing",
      //   "Shelter",
      //   "essentials",
      //   "luxuries",
      // ],
      datasets: [
        {
          // label: "# of Votes",
          // data: [1,1,1,1,1,1],
          data: chartData,
          backgroundColor: [
            "#991b1b",
            "#3f6212",
            "#115e59",
            "#5b21b6",
            "#9a3412",
            "#1e293b",
          ],
          // borderColor: [
          //   "rgba(255, 99, 132, 1)",
          //   "rgba(54, 162, 235, 1)",
          //   "rgba(255, 206, 86, 1)",
          //   "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
          // ],
          // borderWidth: 1,
        },
      ],
    },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
  };

setInterval(() => {
  chartConfig.data.datasets[0].data = chartData
}, 1000);


</script>

<header class="font-sans w-full sticky top-0 py-4 px-6 bg-slate-900/95">
  <div class="bg-slate-800/95 h-full flex justify-between text-center p-4">
    <div>
      <h1 class="text-emerald-300 text-5xl">luwa pack app</h1>
      <h4 class="text-slate-500 text-lg pt-4">
        simple app to watch those grams
      </h4>
    </div>
    <div class="flex w-full justify-around items-center">
      <div class="w-1/3 text-3xl text-white">
        pack weight {$packTotal} grams
      </div>
      <!-- chart here -->
      <!-- <div class="w-1/3">
        <Chart />
      </div> -->

      <div class="w-1/3 p-4">
        <canvas use:renderChart={chartConfig} />
      </div>
    </div>
  </div>
</header>

<main class="font-sans">
  <section class="flex flex-col overflow-auto pt-">
    <div class="flex flex-col">
      <Sleep
        formStyles="flex flex-col bg-red-900 text-white text-right"
        h2Styles="text-5xl bg-red-800 border-2 border-red-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-red-900 bg-red-100 text-red-900 my-4 mx-2 hover:bg-red-300"
      />
      <EatDrink
        formStyles="flex flex-col bg-lime-900 text-white text-right"
        h2Styles="text-5xl bg-lime-800 border-2 border-lime-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-lime-900 bg-lime-100 text-lime-900 my-4 mx-2 hover:bg-lime-300"
      />
      <Clothing
        formStyles="flex flex-col bg-teal-900 text-white text-right"
        h2Styles="text-5xl bg-teal-800 border-2 border-teal-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-teal-900 bg-teal-100 text-teal-900 my-4 mx-2 hover:bg-teal-300"
      />
      <Shelter
        formStyles="flex flex-col bg-violet-900 text-white text-right"
        h2Styles="text-5xl bg-violet-800 border-2 border-violet-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-violet-900 bg-violet-100 text-violet-900 my-4 mx-2 hover:bg-violet-300"
      />
      <Essentials
        formStyles="flex flex-col bg-orange-900 text-white text-right"
        h2Styles="text-5xl bg-orange-800 border-2 border-orange-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-orange-900 bg-orange-100 text-orange-900 my-4 mx-2 hover:bg-orange-300"
      />
      <Luxuries
        formStyles="flex flex-col bg-slate-900 text-white text-right"
        h2Styles="text-5xl bg-slate-800 border-2 border-slate-900 px-6 py-4"
        inputContainerStyles="flex flex-col py-2 px-4 items-end"
        singleInputContainerStyles="flex justify-center items-center py-2 w-1/2"
        labelStyles="w-2/4 text-lg font-bold pr-2"
        inputStyles="w-1/4 text-slate-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
        buttonStyles="px-6 h-12 rounded m-auto uppercase font-semibold tracking-wider border-2 border-slate-900 bg-slate-100 text-slate-900 my-4 mx-2 hover:bg-slate-300"
      />
    </div>
  </section>
  <Footer />
</main>
