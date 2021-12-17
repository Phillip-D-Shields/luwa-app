<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  import {
    sleepPercentage,
    eatDrinkPercentage,
    clothingPercentage,
    shelterPercentage,
    essentialsPercentage,
    luxuriesPercentage,
  } from "../store";

  let ctx;
  let myChart;
  //   export let data
  //  console.log($sleepPercentage);

  onMount(async () => {
    if (myChart) myChart.destroy();
    var myChart = new Chart(ctx, {
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
            data: [1,1,1,1,1,1],
            // data: [
            //   $sleepPercentage,
            //   $eatDrinkPercentage,
            //   $clothingPercentage,
            //   $shelterPercentage,
            //   $essentialsPercentage,
            //   $luxuriesPercentage,
            // ],
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
    });
  });

  //   const createChart = async () => {
  //       if (myChart) myChart.destroy();
  //       var myChart = new Chart(ctx, {
  //       type: "pie",
  //       data: {
  //         // labels: [
  //         //   "sleep",
  //         //   "eat/drink",
  //         //   "clothing",
  //         //   "Shelter",
  //         //   "essentials",
  //         //   "luxuries",
  //         // ],
  //         datasets: [
  //           {
  //             // label: "# of Votes",
  //             data: [$sleepPercentage,$eatDrinkPercentage,$clothingPercentage,$shelterPercentage,$essentialsPercentage,$luxuriesPercentage],
  //             backgroundColor: [
  //               "#991b1b",
  //               "#3f6212",
  //               "#115e59",
  //               "#5b21b6",
  //               "#9a3412",
  //               "#1e293b",
  //             ],
  //             // borderColor: [
  //             //   "rgba(255, 99, 132, 1)",
  //             //   "rgba(54, 162, 235, 1)",
  //             //   "rgba(255, 206, 86, 1)",
  //             //   "rgba(75, 192, 192, 1)",
  //             //   "rgba(153, 102, 255, 1)",
  //             //   "rgba(255, 159, 64, 1)",
  //             // ],
  //             // borderWidth: 1,
  //           },
  //         ],
  //       },
  //       //   options: {
  //       //     scales: {
  //       //       y: {
  //       //         beginAtZero: true,
  //       //       },
  //       //     },
  //       //   },
  //     });
  //   };

  // afterUpdate(createChart)
</script>

<canvas id="myChart" width="50" height="50" bind:this={ctx} />
