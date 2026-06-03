const embedOptions = {
  actions: false,
  renderer: "svg"
};

const charts = [
  ["#chart1", "js/01_top_activities_bar.vg.json"],
  ["#chart2", "js/02_sport_vs_fitness_stacked_bar.vg.json"],
  ["#chart3", "js/03_sport_non_sport_by_age_stacked_bar.vg.json"],
  ["#chart4", "js/04_flexible_activities_bar.vg.json"],
  ["#chart5", "js/05_traditional_sports_lollipop.vg.json"],
  ["#chart6", "js/06_activity_by_age_heatmap.vg.json"],
  ["#chart7", "js/07_state_participation_map.vg.json"],
  ["#chart8", "js/08_state_ranking_bar.vg.json"],
  ["#chart9", "js/09_population_vs_participation_scatter.vg.json"],
  ["#chart10", "js/10_gender_diverging_bar.vg.json"],
  ["#chart11", "js/11_age_profile_small_multiples.vg.json"],
  ["#chart12", "js/12_sport_to_fitness_spectrum.vg.json"]
];

charts.forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, embedOptions).catch(error => {
    console.error(`Could not load ${spec}`, error);
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = `<p class="chart-error">This chart could not be loaded. Check the file path: ${spec}</p>`;
    }
  });
});
