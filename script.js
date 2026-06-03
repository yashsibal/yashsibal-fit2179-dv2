const embedOptions = {
  actions: false,
  renderer: "svg"
};

// The page embeds the Vega-Lite specifications inline for reliability on GitHub Pages.
// The same human-readable .vg.json specifications are also available in the /js folder.
const chartSpecs = {
  "chart1": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Walking and fitness dominate the top activities",
      "subtitle": "Adult participation rate by activity, AusPlay Jan-Dec 2025"
    },
    "data": {
      "url": "data/top_activities.csv"
    },
    "width": "container",
    "height": {
      "step": 28
    },
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "field": "activity",
        "type": "nominal",
        "sort": "-x",
        "title": null
      },
      "x": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "title": "Adult participation rate (%)"
      },
      "color": {
        "field": "activity_group",
        "type": "nominal",
        "title": "Activity group",
        "scale": {
          "domain": [
            "Fitness / lifestyle",
            "Outdoor recreation",
            "Traditional sport",
            "Other activity"
          ],
          "range": [
            "#10B981",
            "#F59E0B",
            "#2563EB",
            "#94A3B8"
          ]
        }
      },
      "tooltip": [
        {
          "field": "activity",
          "title": "Activity"
        },
        {
          "field": "activity_group",
          "title": "Group"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        },
        {
          "field": "estimated_participants",
          "title": "Estimated adult participants",
          "format": ","
        }
      ]
    }
  },
  "chart2": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Most active adults include non-sport activities in their routine",
      "subtitle": "Categories are not competing sports; they describe whether participation was sport-related, non-sport-related, or both."
    },
    "data": {
      "url": "data/sport_non_sport_overall.csv"
    },
    "width": "container",
    "height": 120,
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "value": 50
      },
      "x": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "stack": "zero",
        "title": "Share of adult population (%)"
      },
      "color": {
        "field": "category",
        "type": "nominal",
        "title": null,
        "scale": {
          "domain": [
            "Sport-related only",
            "Non-sport only",
            "Both sport and non-sport"
          ],
          "range": [
            "#2563EB",
            "#10B981",
            "#8B5CF6"
          ]
        }
      },
      "order": {
        "field": "category",
        "sort": "ascending"
      },
      "tooltip": [
        {
          "field": "category",
          "title": "Category"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        }
      ]
    }
  },
  "chart3": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Older age groups lean more toward non-sport activity",
      "subtitle": "Adult participation by age group and sport/non-sport relationship, AusPlay Jan-Dec 2025"
    },
    "data": {
      "url": "data/sport_non_sport_by_age.csv"
    },
    "width": "container",
    "height": 260,
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "field": "age_group",
        "type": "ordinal",
        "title": "Age group",
        "sort": [
          "15-17",
          "18-24",
          "25-34",
          "35-44",
          "45-54",
          "55-64",
          "65+"
        ]
      },
      "x": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "stack": "zero",
        "title": "Participation rate (%)"
      },
      "color": {
        "field": "category",
        "type": "nominal",
        "title": null,
        "scale": {
          "domain": [
            "Sport-related only",
            "Non-sport only",
            "Both sport and non-sport"
          ],
          "range": [
            "#2563EB",
            "#10B981",
            "#8B5CF6"
          ]
        }
      },
      "tooltip": [
        {
          "field": "age_group",
          "title": "Age group"
        },
        {
          "field": "category",
          "title": "Category"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        }
      ]
    }
  },
  "chart4": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Flexible activities sit at the centre of adult participation",
      "subtitle": "Selected lifestyle and fitness activities, AusPlay Jan-Dec 2025"
    },
    "data": {
      "url": "data/flexible_activities.csv"
    },
    "width": "container",
    "height": {
      "step": 30
    },
    "mark": {
      "type": "bar",
      "tooltip": true,
      "color": "#10B981"
    },
    "encoding": {
      "y": {
        "field": "activity",
        "type": "nominal",
        "sort": "-x",
        "title": null
      },
      "x": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "title": "Adult participation rate (%)"
      },
      "tooltip": [
        {
          "field": "activity",
          "title": "Activity"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        },
        {
          "field": "estimated_participants",
          "title": "Estimated adult participants",
          "format": ","
        }
      ]
    }
  },
  "chart5": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Traditional sports still matter, but sit below the biggest fitness activities",
      "subtitle": "Selected traditional sports ranked by adult participation, AusPlay Jan-Dec 2025"
    },
    "data": {
      "url": "data/traditional_sports.csv"
    },
    "width": "container",
    "height": {
      "step": 30
    },
    "layer": [
      {
        "mark": {
          "type": "rule",
          "color": "#CBD5E1",
          "strokeWidth": 3
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": "-x",
            "title": null
          },
          "x": {
            "datum": 0,
            "type": "quantitative"
          },
          "x2": {
            "field": "participation_rate_pct"
          }
        }
      },
      {
        "mark": {
          "type": "point",
          "filled": true,
          "size": 120,
          "color": "#2563EB",
          "tooltip": true
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": "-x",
            "title": null
          },
          "x": {
            "field": "participation_rate_pct",
            "type": "quantitative",
            "title": "Adult participation rate (%)",
            "scale": {
              "domain": [
                0,
                7
              ]
            }
          },
          "tooltip": [
            {
              "field": "activity",
              "title": "Activity"
            },
            {
              "field": "participation_rate_pct",
              "title": "Participation rate (%)",
              "format": ".1f"
            },
            {
              "field": "estimated_participants",
              "title": "Estimated adult participants",
              "format": ","
            }
          ]
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "left",
          "dx": 8,
          "fontSize": 11,
          "color": "#475569"
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": "-x",
            "title": null
          },
          "x": {
            "field": "participation_rate_pct",
            "type": "quantitative"
          },
          "text": {
            "field": "participation_rate_pct",
            "format": ".1f"
          }
        }
      }
    ],
    "resolve": {
      "scale": {
        "x": "shared",
        "y": "shared"
      }
    }
  },
  "chart6": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Age changes the activity mix",
      "subtitle": "Darker cells show higher adult participation rates within each activity and age group"
    },
    "data": {
      "url": "data/activity_by_age.csv"
    },
    "width": "container",
    "height": 390,
    "mark": {
      "type": "rect",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "field": "activity",
        "type": "nominal",
        "title": null,
        "sort": [
          "Walking",
          "Fitness/Gym",
          "Running/jogging",
          "Swimming",
          "Cycling",
          "Football/soccer",
          "Basketball",
          "Tennis",
          "Australian football",
          "Cricket",
          "Netball",
          "Yoga",
          "Pilates"
        ]
      },
      "x": {
        "field": "age_group",
        "type": "ordinal",
        "title": "Age group",
        "sort": [
          "15-17",
          "18-24",
          "25-34",
          "35-44",
          "45-54",
          "55-64",
          "65+"
        ]
      },
      "color": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "title": "Participation rate (%)",
        "scale": {
          "scheme": "tealblues"
        }
      },
      "tooltip": [
        {
          "field": "activity",
          "title": "Activity"
        },
        {
          "field": "age_group",
          "title": "Age group"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        }
      ]
    }
  },
  "chart7": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "A projected map of adult participation",
      "subtitle": "Circle colour shows participation rate; circle size shows estimated adult participants"
    },
    "data": {
      "url": "data/state_participation.csv"
    },
    "width": "container",
    "height": 360,
    "projection": {
      "type": "mercator",
      "center": [
        134,
        -28
      ],
      "scale": 650
    },
    "layer": [
      {
        "mark": {
          "type": "circle",
          "opacity": 0.9,
          "stroke": "#FFFFFF",
          "strokeWidth": 1.5,
          "tooltip": true
        },
        "encoding": {
          "longitude": {
            "field": "longitude",
            "type": "quantitative"
          },
          "latitude": {
            "field": "latitude",
            "type": "quantitative"
          },
          "size": {
            "field": "estimated_adult_participants",
            "type": "quantitative",
            "title": "Estimated adult participants",
            "scale": {
              "range": [
                180,
                3200
              ]
            }
          },
          "color": {
            "field": "participation_rate_pct",
            "type": "quantitative",
            "title": "Participation rate (%)",
            "scale": {
              "domain": [
                83,
                93
              ],
              "scheme": "tealblues"
            }
          },
          "tooltip": [
            {
              "field": "state_name",
              "title": "State/Territory"
            },
            {
              "field": "participation_rate_pct",
              "title": "Participation rate (%)",
              "format": ".1f"
            },
            {
              "field": "estimated_adult_participants",
              "title": "Estimated adult participants",
              "format": ","
            }
          ]
        }
      },
      {
        "mark": {
          "type": "text",
          "fontSize": 11,
          "fontWeight": "bold",
          "dy": -16,
          "color": "#111827"
        },
        "encoding": {
          "longitude": {
            "field": "longitude",
            "type": "quantitative"
          },
          "latitude": {
            "field": "latitude",
            "type": "quantitative"
          },
          "text": {
            "field": "state_abbr"
          },
          "tooltip": [
            {
              "field": "state_name",
              "title": "State/Territory"
            },
            {
              "field": "participation_rate_pct",
              "title": "Participation rate (%)",
              "format": ".1f"
            }
          ]
        }
      }
    ]
  },
  "chart8": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "The map pattern is clearer as a ranking",
      "subtitle": "Adult participation at least once per year, 2025"
    },
    "data": {
      "url": "data/state_participation.csv"
    },
    "width": "container",
    "height": {
      "step": 34
    },
    "layer": [
      {
        "mark": {
          "type": "bar",
          "tooltip": true,
          "cornerRadiusEnd": 5
        },
        "encoding": {
          "y": {
            "field": "state_name",
            "type": "nominal",
            "sort": "-x",
            "title": null
          },
          "x": {
            "field": "participation_rate_pct",
            "type": "quantitative",
            "title": "Participation rate (%)",
            "scale": {
              "domain": [
                82,
                94
              ]
            }
          },
          "tooltip": [
            {
              "field": "state_name",
              "title": "State/Territory"
            },
            {
              "field": "participation_rate_pct",
              "title": "Participation rate (%)",
              "format": ".1f"
            },
            {
              "field": "estimated_adult_participants",
              "title": "Estimated adult participants",
              "format": ","
            }
          ],
          "color": {
            "field": "state_abbr",
            "type": "nominal",
            "legend": null,
            "scale": {
              "range": [
                "#0f766e",
                "#2563eb",
                "#f59e0b",
                "#10b981",
                "#64748b",
                "#8b5cf6",
                "#db2777",
                "#14b8a6"
              ]
            }
          }
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "left",
          "dx": 6,
          "fontSize": 11,
          "color": "#475569"
        },
        "encoding": {
          "y": {
            "field": "state_name",
            "type": "nominal",
            "sort": "-x",
            "title": null
          },
          "x": {
            "field": "participation_rate_pct",
            "type": "quantitative"
          },
          "text": {
            "field": "participation_rate_pct",
            "format": ".1f"
          }
        }
      }
    ]
  },
  "chart9": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Large states have more participants, but not always higher participation rates",
      "subtitle": "ABS total population combined with AusPlay adult participation rate"
    },
    "data": {
      "url": "data/state_population_participation.csv"
    },
    "width": "container",
    "height": 330,
    "mark": {
      "type": "circle",
      "opacity": 0.82,
      "stroke": "#FFFFFF",
      "strokeWidth": 1.2,
      "tooltip": true
    },
    "encoding": {
      "x": {
        "field": "population_2025",
        "type": "quantitative",
        "title": "Total state/territory population, Sep 2025",
        "axis": {
          "format": "~s"
        }
      },
      "y": {
        "field": "participation_rate_pct",
        "type": "quantitative",
        "title": "Adult participation rate (%)",
        "scale": {
          "domain": [
            82,
            94
          ]
        }
      },
      "size": {
        "field": "estimated_adult_participants",
        "type": "quantitative",
        "title": "Estimated adult participants",
        "scale": {
          "range": [
            120,
            1800
          ]
        }
      },
      "color": {
        "field": "state_abbr",
        "type": "nominal",
        "title": "State/Territory"
      },
      "tooltip": [
        {
          "field": "state_name",
          "title": "State/Territory"
        },
        {
          "field": "population_2025",
          "title": "ABS population 2025",
          "format": ","
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        },
        {
          "field": "estimated_adult_participants",
          "title": "Estimated adult participants",
          "format": ","
        }
      ]
    }
  },
  "chart10": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "The biggest gender gaps appear in specific activity choices",
      "subtitle": "Male and female adult participation rates by selected activity"
    },
    "data": {
      "url": "data/gender_by_activity.csv"
    },
    "width": "container",
    "height": {
      "step": 24
    },
    "transform": [
      {
        "calculate": "datum.gender == 'Female' ? 'Female' : 'Male'",
        "as": "gender_label"
      }
    ],
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "field": "activity",
        "type": "nominal",
        "sort": "-x",
        "title": null
      },
      "x": {
        "field": "participation_rate_signed_pct",
        "type": "quantitative",
        "title": "Participation rate (%)",
        "axis": {
          "labelExpr": "abs(datum.value)"
        }
      },
      "color": {
        "field": "gender",
        "type": "nominal",
        "title": null,
        "scale": {
          "domain": [
            "Female",
            "Male"
          ],
          "range": [
            "#DB2777",
            "#2563EB"
          ]
        }
      },
      "tooltip": [
        {
          "field": "activity",
          "title": "Activity"
        },
        {
          "field": "gender",
          "title": "Gender"
        },
        {
          "field": "participation_rate_pct",
          "title": "Participation rate (%)",
          "format": ".1f"
        }
      ]
    }
  },
  "chart11": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "autosize": {
      "type": "fit",
      "contains": "padding"
    },
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "Each activity has a different life-stage profile",
      "subtitle": "Participation rate by age group for selected activities"
    },
    "data": {
      "url": "data/age_profiles.csv"
    },
    "width": 130,
    "height": 95,
    "facet": {
      "field": "activity",
      "type": "nominal",
      "columns": 3,
      "title": null
    },
    "spec": {
      "mark": {
        "type": "line",
        "point": true,
        "tooltip": true,
        "color": "#0F766E"
      },
      "encoding": {
        "x": {
          "field": "age_group",
          "type": "ordinal",
          "sort": [
            "15-17",
            "18-24",
            "25-34",
            "35-44",
            "45-54",
            "55-64",
            "65+"
          ],
          "title": null,
          "axis": {
            "labelAngle": -35,
            "labelFontSize": 8,
            "title": null
          }
        },
        "y": {
          "field": "participation_rate_pct",
          "type": "quantitative",
          "title": "%",
          "axis": {
            "labelFontSize": 8,
            "title": "%"
          }
        },
        "tooltip": [
          {
            "field": "activity",
            "title": "Activity"
          },
          {
            "field": "age_group",
            "title": "Age group"
          },
          {
            "field": "participation_rate_pct",
            "title": "Participation rate (%)",
            "format": ".1f"
          }
        ]
      }
    },
    "resolve": {
      "scale": {
        "y": "independent"
      }
    }
  },
  "chart12": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#1F2937",
        "titleColor": "#111827",
        "gridColor": "#E5E7EB",
        "domainColor": "#CBD5E1",
        "tickColor": "#CBD5E1",
        "labelFontSize": 11,
        "titleFontSize": 11
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 160,
        "labelFontSize": 10,
        "titleFontSize": 10
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 15,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#111827",
        "subtitleColor": "#4B5563"
      },
      "bar": {
        "cornerRadiusEnd": 4
      }
    },
    "title": {
      "text": "The final picture: sport and fitness sit on a participation spectrum",
      "subtitle": "Circle size shows adult participation rate; position is a derived storytelling classification."
    },
    "width": "container",
    "height": 260,
    "layer": [
      {
        "data": {
          "values": [
            {
              "x1": 1,
              "x2": 10,
              "y": 100
            }
          ]
        },
        "mark": {
          "type": "rule",
          "stroke": "#CBD5E1",
          "strokeWidth": 6
        },
        "encoding": {
          "x": {
            "field": "x1",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.5
              ]
            },
            "axis": null
          },
          "x2": {
            "field": "x2"
          },
          "y": {
            "field": "y",
            "type": "quantitative",
            "scale": {
              "domain": [
                70,
                130
              ]
            },
            "axis": null
          }
        }
      },
      {
        "data": {
          "values": [
            {
              "x": 1.25,
              "y": 119,
              "label": "Traditional organised sport",
              "colour": "#2563EB"
            },
            {
              "x": 8.75,
              "y": 119,
              "label": "Flexible lifestyle fitness",
              "colour": "#0f766e"
            }
          ]
        },
        "mark": {
          "type": "text",
          "fontSize": 12,
          "fontWeight": "bold"
        },
        "encoding": {
          "x": {
            "field": "x",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.5
              ]
            },
            "axis": null
          },
          "y": {
            "field": "y",
            "type": "quantitative",
            "scale": {
              "domain": [
                70,
                130
              ]
            },
            "axis": null
          },
          "text": {
            "field": "label"
          },
          "color": {
            "field": "colour",
            "type": "nominal",
            "scale": null,
            "legend": null
          }
        }
      },
      {
        "data": {
          "url": "data/sport_fitness_spectrum.csv"
        },
        "mark": {
          "type": "circle",
          "opacity": 0.86,
          "stroke": "#FFFFFF",
          "strokeWidth": 1.2,
          "tooltip": true
        },
        "encoding": {
          "x": {
            "field": "spectrum_score",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.5
              ]
            },
            "axis": null
          },
          "y": {
            "datum": 100,
            "type": "quantitative",
            "scale": {
              "domain": [
                70,
                130
              ]
            },
            "axis": null
          },
          "size": {
            "field": "participation_rate_pct",
            "type": "quantitative",
            "title": "Participation rate (%)",
            "scale": {
              "range": [
                100,
                4000
              ]
            }
          },
          "color": {
            "field": "side",
            "type": "nominal",
            "title": null,
            "scale": {
              "domain": [
                "Traditional sport",
                "Flexible lifestyle fitness"
              ],
              "range": [
                "#2563EB",
                "#10B981"
              ]
            }
          },
          "tooltip": [
            {
              "field": "activity",
              "title": "Activity"
            },
            {
              "field": "side",
              "title": "Type"
            },
            {
              "field": "participation_rate_pct",
              "title": "Participation rate (%)",
              "format": ".1f"
            },
            {
              "field": "estimated_participants",
              "title": "Estimated adult participants",
              "format": ","
            }
          ]
        }
      },
      {
        "data": {
          "url": "data/sport_fitness_spectrum.csv"
        },
        "mark": {
          "type": "text",
          "dy": 58,
          "fontSize": 10,
          "baseline": "top",
          "color": "#111827"
        },
        "encoding": {
          "x": {
            "field": "spectrum_score",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.5
              ]
            },
            "axis": null
          },
          "y": {
            "datum": 100,
            "type": "quantitative",
            "scale": {
              "domain": [
                70,
                130
              ]
            },
            "axis": null
          },
          "text": {
            "field": "activity"
          }
        }
      }
    ]
  }
};

function showChartError(selector, error) {
  console.error(`Could not render ${selector}`, error);
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = `<p class="chart-error">This chart could not be loaded. Please check that the data CSV files are in the /data folder.</p>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  Object.entries(chartSpecs).forEach(([chartId, spec]) => {
    const selector = `#${chartId}`;
    const element = document.querySelector(selector);
    if (!element) return;
    vegaEmbed(selector, spec, embedOptions).catch(error => showChartError(selector, error));
  });
});
