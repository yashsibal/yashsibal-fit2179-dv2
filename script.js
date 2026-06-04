const embedOptions = {
  actions: false,
  renderer: "svg"
};

// All visualisations are Vega-Lite specifications. Values are embedded for reliable GitHub Pages rendering.
// Human-readable .vg.json copies of these specifications are available in the /js folder.
const chartSpecs = {
  "chart1": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Walking and fitness dominate the top activities",
      "subtitle": "Adult participation rate by activity, AusPlay Jan-Dec 2025"
    },
    "data": {
      "values": [
        {
          "activity": "Walking",
          "raw_activity": "Walking (Recreational)",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 50.2,
          "estimated_participants": 11363621,
          "rank": 1
        },
        {
          "activity": "Fitness/Gym",
          "raw_activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 34.1,
          "estimated_participants": 7719043,
          "rank": 2
        },
        {
          "activity": "Bush walking",
          "raw_activity": "Bush walking",
          "activity_group": "Outdoor recreation",
          "participation_rate_pct": 17.47,
          "estimated_participants": 3953952,
          "rank": 3
        },
        {
          "activity": "Running/jogging",
          "raw_activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 16.53,
          "estimated_participants": 3740484,
          "rank": 4
        },
        {
          "activity": "Swimming",
          "raw_activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 15.39,
          "estimated_participants": 3483472,
          "rank": 5
        },
        {
          "activity": "Cycling",
          "raw_activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "participation_rate_pct": 8.29,
          "estimated_participants": 1877339,
          "rank": 6
        },
        {
          "activity": "Pilates",
          "raw_activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 7.18,
          "estimated_participants": 1625325,
          "rank": 7
        },
        {
          "activity": "Football/soccer",
          "raw_activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "participation_rate_pct": 5.62,
          "estimated_participants": 1273027,
          "rank": 8
        },
        {
          "activity": "Yoga",
          "raw_activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "participation_rate_pct": 5.07,
          "estimated_participants": 1148005,
          "rank": 9
        },
        {
          "activity": "Tennis",
          "raw_activity": "Tennis",
          "activity_group": "Traditional sport",
          "participation_rate_pct": 4.94,
          "estimated_participants": 1118407,
          "rank": 10
        }
      ]
    },
    "width": "container",
    "height": {
      "step": 30
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
        "title": null,
        "axis": {
          "labelLimit": 150
        }
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
            "#10b981",
            "#f59e0b",
            "#2563eb",
            "#94a3b8"
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Most active adults include non-sport activity",
      "subtitle": "Sport/non-sport relationship among adults, AusPlay Jan-Dec 2025"
    },
    "data": {
      "values": [
        {
          "category": "Sport-related only",
          "story_group": "Sport-linked",
          "participation_rate_pct": 12.93,
          "category_order": 1
        },
        {
          "category": "Non-sport only",
          "story_group": "Lifestyle / fitness-linked",
          "participation_rate_pct": 34.98,
          "category_order": 2
        },
        {
          "category": "Both sport and non-sport",
          "story_group": "Mixed",
          "participation_rate_pct": 37.99,
          "category_order": 3
        }
      ]
    },
    "width": "container",
    "height": 110,
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "value": 45
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
            "#2563eb",
            "#10b981",
            "#8b5cf6"
          ]
        }
      },
      "order": {
        "field": "category_order",
        "type": "quantitative"
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Age changes the sport/non-sport balance",
      "subtitle": "Older adults lean more toward non-sport activity"
    },
    "data": {
      "values": [
        {
          "age_group": "15-17",
          "category": "Sport-related only",
          "participation_rate_pct": 22.61,
          "age_order": 1,
          "category_order": 1
        },
        {
          "age_group": "15-17",
          "category": "Non-sport only",
          "participation_rate_pct": 12.78,
          "age_order": 1,
          "category_order": 2
        },
        {
          "age_group": "15-17",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 52.04,
          "age_order": 1,
          "category_order": 3
        },
        {
          "age_group": "18-24",
          "category": "Sport-related only",
          "participation_rate_pct": 20.48,
          "age_order": 2,
          "category_order": 1
        },
        {
          "age_group": "18-24",
          "category": "Non-sport only",
          "participation_rate_pct": 19.88,
          "age_order": 2,
          "category_order": 2
        },
        {
          "age_group": "18-24",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 48.38,
          "age_order": 2,
          "category_order": 3
        },
        {
          "age_group": "25-34",
          "category": "Sport-related only",
          "participation_rate_pct": 17.77,
          "age_order": 3,
          "category_order": 1
        },
        {
          "age_group": "25-34",
          "category": "Non-sport only",
          "participation_rate_pct": 24.69,
          "age_order": 3,
          "category_order": 2
        },
        {
          "age_group": "25-34",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 46.97,
          "age_order": 3,
          "category_order": 3
        },
        {
          "age_group": "35-44",
          "category": "Sport-related only",
          "participation_rate_pct": 15.24,
          "age_order": 4,
          "category_order": 1
        },
        {
          "age_group": "35-44",
          "category": "Non-sport only",
          "participation_rate_pct": 32.18,
          "age_order": 4,
          "category_order": 2
        },
        {
          "age_group": "35-44",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 41.28,
          "age_order": 4,
          "category_order": 3
        },
        {
          "age_group": "45-54",
          "category": "Sport-related only",
          "participation_rate_pct": 11.11,
          "age_order": 5,
          "category_order": 1
        },
        {
          "age_group": "45-54",
          "category": "Non-sport only",
          "participation_rate_pct": 40.2,
          "age_order": 5,
          "category_order": 2
        },
        {
          "age_group": "45-54",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 37.95,
          "age_order": 5,
          "category_order": 3
        },
        {
          "age_group": "55-64",
          "category": "Sport-related only",
          "participation_rate_pct": 7.2,
          "age_order": 6,
          "category_order": 1
        },
        {
          "age_group": "55-64",
          "category": "Non-sport only",
          "participation_rate_pct": 44.91,
          "age_order": 6,
          "category_order": 2
        },
        {
          "age_group": "55-64",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 35.34,
          "age_order": 6,
          "category_order": 3
        },
        {
          "age_group": "65+",
          "category": "Sport-related only",
          "participation_rate_pct": 5.9,
          "age_order": 7,
          "category_order": 1
        },
        {
          "age_group": "65+",
          "category": "Non-sport only",
          "participation_rate_pct": 48.54,
          "age_order": 7,
          "category_order": 2
        },
        {
          "age_group": "65+",
          "category": "Both sport and non-sport",
          "participation_rate_pct": 20.99,
          "age_order": 7,
          "category_order": 3
        }
      ]
    },
    "width": "container",
    "height": 240,
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
            "#2563eb",
            "#10b981",
            "#8b5cf6"
          ]
        }
      },
      "order": {
        "field": "category_order",
        "type": "quantitative"
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Flexible activities sit at the centre",
      "subtitle": "Selected lifestyle and fitness activities, adults, AusPlay Jan-Dec 2025"
    },
    "data": {
      "values": [
        {
          "activity": "Walking",
          "participation_rate_pct": 50.2,
          "estimated_participants": 11363621
        },
        {
          "activity": "Fitness/Gym",
          "participation_rate_pct": 34.1,
          "estimated_participants": 7719043
        },
        {
          "activity": "Running/jogging",
          "participation_rate_pct": 16.53,
          "estimated_participants": 3740484
        },
        {
          "activity": "Swimming",
          "participation_rate_pct": 15.39,
          "estimated_participants": 3483472
        },
        {
          "activity": "Cycling",
          "participation_rate_pct": 8.29,
          "estimated_participants": 1877339
        },
        {
          "activity": "Pilates",
          "participation_rate_pct": 7.18,
          "estimated_participants": 1625325
        },
        {
          "activity": "Yoga",
          "participation_rate_pct": 5.07,
          "estimated_participants": 1148005
        }
      ]
    },
    "width": "container",
    "height": {
      "step": 32
    },
    "mark": {
      "type": "bar",
      "tooltip": true,
      "color": "#10b981"
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Traditional sports remain visible, but smaller",
      "subtitle": "Selected traditional sports ranked by adult participation"
    },
    "data": {
      "values": [
        {
          "activity": "Football/soccer",
          "participation_rate_pct": 5.62,
          "estimated_participants": 1273027
        },
        {
          "activity": "Tennis",
          "participation_rate_pct": 4.94,
          "estimated_participants": 1118407
        },
        {
          "activity": "Basketball",
          "participation_rate_pct": 4.53,
          "estimated_participants": 1024360
        },
        {
          "activity": "Cricket",
          "participation_rate_pct": 2.49,
          "estimated_participants": 563967
        },
        {
          "activity": "Australian football",
          "participation_rate_pct": 2.42,
          "estimated_participants": 547129
        },
        {
          "activity": "Netball",
          "participation_rate_pct": 2.11,
          "estimated_participants": 476973
        },
        {
          "activity": "Badminton",
          "participation_rate_pct": 1.89,
          "estimated_participants": 426925
        },
        {
          "activity": "Table tennis",
          "participation_rate_pct": 1.79,
          "estimated_participants": 405253
        }
      ]
    },
    "width": "container",
    "height": {
      "step": 32
    },
    "layer": [
      {
        "mark": {
          "type": "rule",
          "stroke": "#cbd5e1",
          "strokeWidth": 3
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": [
              "Football/soccer",
              "Tennis",
              "Basketball",
              "Cricket",
              "Australian football",
              "Netball",
              "Badminton",
              "Table tennis"
            ],
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
          "size": 150,
          "color": "#2563eb",
          "tooltip": true
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": [
              "Football/soccer",
              "Tennis",
              "Basketball",
              "Cricket",
              "Australian football",
              "Netball",
              "Badminton",
              "Table tennis"
            ],
            "title": null
          },
          "x": {
            "field": "participation_rate_pct",
            "type": "quantitative",
            "title": "Adult participation rate (%)",
            "scale": {
              "domain": [
                0,
                6.2
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
          "fontWeight": 700,
          "color": "#475569"
        },
        "encoding": {
          "y": {
            "field": "activity",
            "type": "nominal",
            "sort": [
              "Football/soccer",
              "Tennis",
              "Basketball",
              "Cricket",
              "Australian football",
              "Netball",
              "Badminton",
              "Table tennis"
            ],
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
  "chart6": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "The activity mix changes across life stages",
      "subtitle": "Darker cells show higher adult participation rates within each activity and age group"
    },
    "data": {
      "values": [
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 30.35,
          "age_order": 1
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 34.19,
          "age_order": 2
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 41.86,
          "age_order": 3
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 47.55,
          "age_order": 4
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 58.67,
          "age_order": 5
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 66.03,
          "age_order": 6
        },
        {
          "activity": "Walking",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 55.82,
          "age_order": 7
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 37.32,
          "age_order": 1
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 43.44,
          "age_order": 2
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 42.06,
          "age_order": 3
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 36.39,
          "age_order": 4
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 32.93,
          "age_order": 5
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 29.52,
          "age_order": 6
        },
        {
          "activity": "Fitness/Gym",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 23.68,
          "age_order": 7
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 26.57,
          "age_order": 1
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 26.65,
          "age_order": 2
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 27.66,
          "age_order": 3
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 20.85,
          "age_order": 4
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 15.77,
          "age_order": 5
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 8.46,
          "age_order": 6
        },
        {
          "activity": "Running/jogging",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 1.84,
          "age_order": 7
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 17.62,
          "age_order": 1
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 16.34,
          "age_order": 2
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 16.58,
          "age_order": 3
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 18.31,
          "age_order": 4
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 16.66,
          "age_order": 5
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 15.99,
          "age_order": 6
        },
        {
          "activity": "Swimming",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 9.74,
          "age_order": 7
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "15-17",
          "participation_rate_pct": 6.66,
          "age_order": 1
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "18-24",
          "participation_rate_pct": 5.59,
          "age_order": 2
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "25-34",
          "participation_rate_pct": 7.12,
          "age_order": 3
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "35-44",
          "participation_rate_pct": 9.26,
          "age_order": 4
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "45-54",
          "participation_rate_pct": 11.59,
          "age_order": 5
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "55-64",
          "participation_rate_pct": 11.95,
          "age_order": 6
        },
        {
          "activity": "Cycling",
          "activity_group": "Outdoor recreation",
          "age_group": "65+",
          "participation_rate_pct": 5.58,
          "age_order": 7
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 17.01,
          "age_order": 1
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 12.33,
          "age_order": 2
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 9.36,
          "age_order": 3
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 6.94,
          "age_order": 4
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 3.28,
          "age_order": 5
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 0.95,
          "age_order": 6
        },
        {
          "activity": "Football/soccer",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 0.14,
          "age_order": 7
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 17.28,
          "age_order": 1
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 11.69,
          "age_order": 2
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 6.16,
          "age_order": 3
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 4.84,
          "age_order": 4
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 2.62,
          "age_order": 5
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 0.78,
          "age_order": 6
        },
        {
          "activity": "Basketball",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 0.21,
          "age_order": 7
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 9.45,
          "age_order": 1
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 7.48,
          "age_order": 2
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 6.48,
          "age_order": 3
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 5.28,
          "age_order": 4
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 5.27,
          "age_order": 5
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 3.29,
          "age_order": 6
        },
        {
          "activity": "Tennis",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 1.92,
          "age_order": 7
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 6.04,
          "age_order": 1
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 6.01,
          "age_order": 2
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 4.75,
          "age_order": 3
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 2.07,
          "age_order": 4
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 1.38,
          "age_order": 5
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 0.45,
          "age_order": 6
        },
        {
          "activity": "Australian football",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 0.07,
          "age_order": 7
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 8.43,
          "age_order": 1
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 4.83,
          "age_order": 2
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 3.54,
          "age_order": 3
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 2.67,
          "age_order": 4
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 1.97,
          "age_order": 5
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 0.99,
          "age_order": 6
        },
        {
          "activity": "Cricket",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 0.31,
          "age_order": 7
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "15-17",
          "participation_rate_pct": 8.14,
          "age_order": 1
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "18-24",
          "participation_rate_pct": 5.52,
          "age_order": 2
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "25-34",
          "participation_rate_pct": 3.06,
          "age_order": 3
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "35-44",
          "participation_rate_pct": 2.13,
          "age_order": 4
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "45-54",
          "participation_rate_pct": 1.16,
          "age_order": 5
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "55-64",
          "participation_rate_pct": 0.31,
          "age_order": 6
        },
        {
          "activity": "Netball",
          "activity_group": "Traditional sport",
          "age_group": "65+",
          "participation_rate_pct": 0.05,
          "age_order": 7
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 2.6,
          "age_order": 1
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 3.61,
          "age_order": 2
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 6.43,
          "age_order": 3
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 6.28,
          "age_order": 4
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 6.11,
          "age_order": 5
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 5.57,
          "age_order": 6
        },
        {
          "activity": "Yoga",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 3.16,
          "age_order": 7
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "15-17",
          "participation_rate_pct": 3.75,
          "age_order": 1
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "18-24",
          "participation_rate_pct": 8.76,
          "age_order": 2
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "25-34",
          "participation_rate_pct": 11.02,
          "age_order": 3
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "35-44",
          "participation_rate_pct": 8.71,
          "age_order": 4
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "45-54",
          "participation_rate_pct": 7.13,
          "age_order": 5
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "55-64",
          "participation_rate_pct": 6.26,
          "age_order": 6
        },
        {
          "activity": "Pilates",
          "activity_group": "Fitness / lifestyle",
          "age_group": "65+",
          "participation_rate_pct": 3.19,
          "age_order": 7
        }
      ]
    },
    "width": "container",
    "height": 410,
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
        ],
        "axis": {
          "labelLimit": 150
        }
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
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "A projected map of adult participation",
      "subtitle": "State and territory values shown as symbols over a simplified Australia outline"
    },
    "width": 620,
    "height": 430,
    "projection": {
      "type": "mercator",
      "center": [
        134,
        -27
      ],
      "scale": 650,
      "translate": [
        310,
        215
      ]
    },
    "layer": [
      {
        "data": {
          "values": [
            {
              "shape": "Mainland",
              "order": 0,
              "longitude": 113.0,
              "latitude": -35.1
            },
            {
              "shape": "Mainland",
              "order": 1,
              "longitude": 114.3,
              "latitude": -32.0
            },
            {
              "shape": "Mainland",
              "order": 2,
              "longitude": 113.5,
              "latitude": -28.5
            },
            {
              "shape": "Mainland",
              "order": 3,
              "longitude": 114.4,
              "latitude": -24.5
            },
            {
              "shape": "Mainland",
              "order": 4,
              "longitude": 116.0,
              "latitude": -20.5
            },
            {
              "shape": "Mainland",
              "order": 5,
              "longitude": 119.0,
              "latitude": -18.2
            },
            {
              "shape": "Mainland",
              "order": 6,
              "longitude": 122.5,
              "latitude": -17.0
            },
            {
              "shape": "Mainland",
              "order": 7,
              "longitude": 124.0,
              "latitude": -14.2
            },
            {
              "shape": "Mainland",
              "order": 8,
              "longitude": 127.0,
              "latitude": -13.6
            },
            {
              "shape": "Mainland",
              "order": 9,
              "longitude": 129.0,
              "latitude": -14.0
            },
            {
              "shape": "Mainland",
              "order": 10,
              "longitude": 130.7,
              "latitude": -11.2
            },
            {
              "shape": "Mainland",
              "order": 11,
              "longitude": 133.7,
              "latitude": -11.0
            },
            {
              "shape": "Mainland",
              "order": 12,
              "longitude": 136.8,
              "latitude": -12.8
            },
            {
              "shape": "Mainland",
              "order": 13,
              "longitude": 138.8,
              "latitude": -16.2
            },
            {
              "shape": "Mainland",
              "order": 14,
              "longitude": 141.2,
              "latitude": -16.0
            },
            {
              "shape": "Mainland",
              "order": 15,
              "longitude": 142.9,
              "latitude": -11.0
            },
            {
              "shape": "Mainland",
              "order": 16,
              "longitude": 144.5,
              "latitude": -14.5
            },
            {
              "shape": "Mainland",
              "order": 17,
              "longitude": 145.5,
              "latitude": -17.2
            },
            {
              "shape": "Mainland",
              "order": 18,
              "longitude": 147.0,
              "latitude": -19.0
            },
            {
              "shape": "Mainland",
              "order": 19,
              "longitude": 149.5,
              "latitude": -22.5
            },
            {
              "shape": "Mainland",
              "order": 20,
              "longitude": 152.5,
              "latitude": -25.6
            },
            {
              "shape": "Mainland",
              "order": 21,
              "longitude": 153.6,
              "latitude": -28.1
            },
            {
              "shape": "Mainland",
              "order": 22,
              "longitude": 152.4,
              "latitude": -31.0
            },
            {
              "shape": "Mainland",
              "order": 23,
              "longitude": 150.6,
              "latitude": -34.2
            },
            {
              "shape": "Mainland",
              "order": 24,
              "longitude": 147.2,
              "latitude": -37.6
            },
            {
              "shape": "Mainland",
              "order": 25,
              "longitude": 144.2,
              "latitude": -38.7
            },
            {
              "shape": "Mainland",
              "order": 26,
              "longitude": 141.2,
              "latitude": -38.1
            },
            {
              "shape": "Mainland",
              "order": 27,
              "longitude": 138.5,
              "latitude": -35.8
            },
            {
              "shape": "Mainland",
              "order": 28,
              "longitude": 135.3,
              "latitude": -34.2
            },
            {
              "shape": "Mainland",
              "order": 29,
              "longitude": 131.5,
              "latitude": -31.8
            },
            {
              "shape": "Mainland",
              "order": 30,
              "longitude": 127.5,
              "latitude": -31.4
            },
            {
              "shape": "Mainland",
              "order": 31,
              "longitude": 123.2,
              "latitude": -33.9
            },
            {
              "shape": "Mainland",
              "order": 32,
              "longitude": 118.5,
              "latitude": -34.8
            },
            {
              "shape": "Mainland",
              "order": 33,
              "longitude": 113.0,
              "latitude": -35.1
            },
            {
              "shape": "Tasmania",
              "order": 0,
              "longitude": 144.4,
              "latitude": -40.6
            },
            {
              "shape": "Tasmania",
              "order": 1,
              "longitude": 147.4,
              "latitude": -40.8
            },
            {
              "shape": "Tasmania",
              "order": 2,
              "longitude": 148.4,
              "latitude": -42.0
            },
            {
              "shape": "Tasmania",
              "order": 3,
              "longitude": 147.8,
              "latitude": -43.3
            },
            {
              "shape": "Tasmania",
              "order": 4,
              "longitude": 145.5,
              "latitude": -43.5
            },
            {
              "shape": "Tasmania",
              "order": 5,
              "longitude": 144.0,
              "latitude": -42.2
            },
            {
              "shape": "Tasmania",
              "order": 6,
              "longitude": 144.4,
              "latitude": -40.6
            }
          ]
        },
        "mark": {
          "type": "line",
          "stroke": "#94a3b8",
          "strokeWidth": 2.2,
          "opacity": 0.9
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
          "detail": {
            "field": "shape",
            "type": "nominal"
          },
          "order": {
            "field": "order",
            "type": "quantitative"
          }
        }
      },
      {
        "data": {
          "values": [
            {
              "state_abbr": "ACT",
              "state_name": "Australian Capital Territory",
              "participation_rate_pct": 92.24,
              "estimated_adult_participants": 367094,
              "longitude": 149.13,
              "latitude": -35.28,
              "label_dx": 0,
              "label_dy": -20
            },
            {
              "state_abbr": "NSW",
              "state_name": "New South Wales",
              "participation_rate_pct": 85.41,
              "estimated_adult_participants": 6028038,
              "longitude": 151.21,
              "latitude": -33.87,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "NT",
              "state_name": "Northern Territory",
              "participation_rate_pct": 89.34,
              "estimated_adult_participants": 186157,
              "longitude": 130.84,
              "latitude": -12.46,
              "label_dx": 0,
              "label_dy": -18
            },
            {
              "state_abbr": "QLD",
              "state_name": "Queensland",
              "participation_rate_pct": 83.92,
              "estimated_adult_participants": 3882805,
              "longitude": 153.03,
              "latitude": -27.47,
              "label_dx": 0,
              "label_dy": -18
            },
            {
              "state_abbr": "SA",
              "state_name": "South Australia",
              "participation_rate_pct": 84.3,
              "estimated_adult_participants": 1332909,
              "longitude": 138.6,
              "latitude": -34.93,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "TAS",
              "state_name": "Tasmania",
              "participation_rate_pct": 86.96,
              "estimated_adult_participants": 420327,
              "longitude": 147.33,
              "latitude": -42.88,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "VIC",
              "state_name": "Victoria",
              "participation_rate_pct": 87.46,
              "estimated_adult_participants": 5082762,
              "longitude": 144.96,
              "latitude": -37.81,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "WA",
              "state_name": "Western Australia",
              "participation_rate_pct": 86.81,
              "estimated_adult_participants": 2143227,
              "longitude": 115.86,
              "latitude": -31.95,
              "label_dx": 0,
              "label_dy": -18
            }
          ]
        },
        "mark": {
          "type": "circle",
          "opacity": 0.92,
          "stroke": "#fff",
          "strokeWidth": 1.7,
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
                3300
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
        "data": {
          "values": [
            {
              "state_abbr": "ACT",
              "state_name": "Australian Capital Territory",
              "participation_rate_pct": 92.24,
              "estimated_adult_participants": 367094,
              "longitude": 149.13,
              "latitude": -35.28,
              "label_dx": 0,
              "label_dy": -20
            },
            {
              "state_abbr": "NSW",
              "state_name": "New South Wales",
              "participation_rate_pct": 85.41,
              "estimated_adult_participants": 6028038,
              "longitude": 151.21,
              "latitude": -33.87,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "NT",
              "state_name": "Northern Territory",
              "participation_rate_pct": 89.34,
              "estimated_adult_participants": 186157,
              "longitude": 130.84,
              "latitude": -12.46,
              "label_dx": 0,
              "label_dy": -18
            },
            {
              "state_abbr": "QLD",
              "state_name": "Queensland",
              "participation_rate_pct": 83.92,
              "estimated_adult_participants": 3882805,
              "longitude": 153.03,
              "latitude": -27.47,
              "label_dx": 0,
              "label_dy": -18
            },
            {
              "state_abbr": "SA",
              "state_name": "South Australia",
              "participation_rate_pct": 84.3,
              "estimated_adult_participants": 1332909,
              "longitude": 138.6,
              "latitude": -34.93,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "TAS",
              "state_name": "Tasmania",
              "participation_rate_pct": 86.96,
              "estimated_adult_participants": 420327,
              "longitude": 147.33,
              "latitude": -42.88,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "VIC",
              "state_name": "Victoria",
              "participation_rate_pct": 87.46,
              "estimated_adult_participants": 5082762,
              "longitude": 144.96,
              "latitude": -37.81,
              "label_dx": 0,
              "label_dy": 18
            },
            {
              "state_abbr": "WA",
              "state_name": "Western Australia",
              "participation_rate_pct": 86.81,
              "estimated_adult_participants": 2143227,
              "longitude": 115.86,
              "latitude": -31.95,
              "label_dx": 0,
              "label_dy": -18
            }
          ]
        },
        "mark": {
          "type": "text",
          "fontSize": 11,
          "fontWeight": 900,
          "color": "#0f172a",
          "dy": -18
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
          }
        }
      }
    ]
  },
  "chart8": {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "transparent",
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "The map pattern is clearer as a ranking",
      "subtitle": "Adult participation at least once per year, state/territory comparison"
    },
    "data": {
      "values": [
        {
          "state_abbr": "ACT",
          "state_name": "Australian Capital Territory",
          "participation_rate_pct": 92.24,
          "estimated_adult_participants": 367094,
          "longitude": 149.13,
          "latitude": -35.28,
          "label_dx": 0,
          "label_dy": -20
        },
        {
          "state_abbr": "NSW",
          "state_name": "New South Wales",
          "participation_rate_pct": 85.41,
          "estimated_adult_participants": 6028038,
          "longitude": 151.21,
          "latitude": -33.87,
          "label_dx": 0,
          "label_dy": 18
        },
        {
          "state_abbr": "NT",
          "state_name": "Northern Territory",
          "participation_rate_pct": 89.34,
          "estimated_adult_participants": 186157,
          "longitude": 130.84,
          "latitude": -12.46,
          "label_dx": 0,
          "label_dy": -18
        },
        {
          "state_abbr": "QLD",
          "state_name": "Queensland",
          "participation_rate_pct": 83.92,
          "estimated_adult_participants": 3882805,
          "longitude": 153.03,
          "latitude": -27.47,
          "label_dx": 0,
          "label_dy": -18
        },
        {
          "state_abbr": "SA",
          "state_name": "South Australia",
          "participation_rate_pct": 84.3,
          "estimated_adult_participants": 1332909,
          "longitude": 138.6,
          "latitude": -34.93,
          "label_dx": 0,
          "label_dy": 18
        },
        {
          "state_abbr": "TAS",
          "state_name": "Tasmania",
          "participation_rate_pct": 86.96,
          "estimated_adult_participants": 420327,
          "longitude": 147.33,
          "latitude": -42.88,
          "label_dx": 0,
          "label_dy": 18
        },
        {
          "state_abbr": "VIC",
          "state_name": "Victoria",
          "participation_rate_pct": 87.46,
          "estimated_adult_participants": 5082762,
          "longitude": 144.96,
          "latitude": -37.81,
          "label_dx": 0,
          "label_dy": 18
        },
        {
          "state_abbr": "WA",
          "state_name": "Western Australia",
          "participation_rate_pct": 86.81,
          "estimated_adult_participants": 2143227,
          "longitude": 115.86,
          "latitude": -31.95,
          "label_dx": 0,
          "label_dy": -18
        }
      ]
    },
    "width": "container",
    "height": {
      "step": 34
    },
    "layer": [
      {
        "mark": {
          "type": "bar",
          "tooltip": true
        },
        "encoding": {
          "y": {
            "field": "state_name",
            "type": "nominal",
            "sort": [
              "Australian Capital Territory",
              "Northern Territory",
              "Victoria",
              "Tasmania",
              "Western Australia",
              "New South Wales",
              "South Australia",
              "Queensland"
            ],
            "title": null,
            "axis": {
              "labelLimit": 180
            }
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
          "color": {
            "field": "state_abbr",
            "type": "nominal",
            "legend": null
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
          "align": "left",
          "dx": 7,
          "fontSize": 11,
          "fontWeight": 800,
          "color": "#334155"
        },
        "encoding": {
          "y": {
            "field": "state_name",
            "type": "nominal",
            "sort": [
              "Australian Capital Territory",
              "Northern Territory",
              "Victoria",
              "Tasmania",
              "Western Australia",
              "New South Wales",
              "South Australia",
              "Queensland"
            ],
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Large states have more participants, but not always higher rates",
      "subtitle": "ABS total population combined with AusPlay adult participation rate"
    },
    "data": {
      "values": [
        {
          "state_abbr": "ACT",
          "state_name": "Australian Capital Territory",
          "population_2025": 486231,
          "population_share_pct": 1.75,
          "participation_rate_pct": 92.24,
          "estimated_adult_participants": 367094
        },
        {
          "state_abbr": "NSW",
          "state_name": "New South Wales",
          "population_2025": 8624534,
          "population_share_pct": 31.11,
          "participation_rate_pct": 85.41,
          "estimated_adult_participants": 6028038
        },
        {
          "state_abbr": "NT",
          "state_name": "Northern Territory",
          "population_2025": 265457,
          "population_share_pct": 0.96,
          "participation_rate_pct": 89.34,
          "estimated_adult_participants": 186157
        },
        {
          "state_abbr": "QLD",
          "state_name": "Queensland",
          "population_2025": 5692642,
          "population_share_pct": 20.53,
          "participation_rate_pct": 83.92,
          "estimated_adult_participants": 3882805
        },
        {
          "state_abbr": "SA",
          "state_name": "South Australia",
          "population_2025": 1908182,
          "population_share_pct": 6.88,
          "participation_rate_pct": 84.3,
          "estimated_adult_participants": 1332909
        },
        {
          "state_abbr": "TAS",
          "state_name": "Tasmania",
          "population_2025": 576659,
          "population_share_pct": 2.08,
          "participation_rate_pct": 86.96,
          "estimated_adult_participants": 420327
        },
        {
          "state_abbr": "VIC",
          "state_name": "Victoria",
          "population_2025": 7104349,
          "population_share_pct": 25.62,
          "participation_rate_pct": 87.46,
          "estimated_adult_participants": 5082762
        },
        {
          "state_abbr": "WA",
          "state_name": "Western Australia",
          "population_2025": 3061672,
          "population_share_pct": 11.04,
          "participation_rate_pct": 86.81,
          "estimated_adult_participants": 2143227
        }
      ]
    },
    "width": "container",
    "height": 340,
    "mark": {
      "type": "circle",
      "opacity": 0.84,
      "stroke": "#fff",
      "strokeWidth": 1.4,
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
            160,
            2000
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "The biggest gender gaps are activity-specific",
      "subtitle": "Male and female adult participation rates by selected activity"
    },
    "data": {
      "values": [
        {
          "activity": "Walking",
          "gender": "Male",
          "participation_rate_pct": 42.49,
          "participation_rate_signed_pct": 42.49,
          "activity_order": 1
        },
        {
          "activity": "Walking",
          "gender": "Female",
          "participation_rate_pct": 57.75,
          "participation_rate_signed_pct": -57.75,
          "activity_order": 1
        },
        {
          "activity": "Fitness/Gym",
          "gender": "Male",
          "participation_rate_pct": 33.1,
          "participation_rate_signed_pct": 33.1,
          "activity_order": 2
        },
        {
          "activity": "Fitness/Gym",
          "gender": "Female",
          "participation_rate_pct": 35.08,
          "participation_rate_signed_pct": -35.08,
          "activity_order": 2
        },
        {
          "activity": "Bush walking",
          "gender": "Male",
          "participation_rate_pct": 16.3,
          "participation_rate_signed_pct": 16.3,
          "activity_order": 99
        },
        {
          "activity": "Bush walking",
          "gender": "Female",
          "participation_rate_pct": 18.6,
          "participation_rate_signed_pct": -18.6,
          "activity_order": 99
        },
        {
          "activity": "Running/jogging",
          "gender": "Male",
          "participation_rate_pct": 18.97,
          "participation_rate_signed_pct": 18.97,
          "activity_order": 3
        },
        {
          "activity": "Running/jogging",
          "gender": "Female",
          "participation_rate_pct": 14.16,
          "participation_rate_signed_pct": -14.16,
          "activity_order": 3
        },
        {
          "activity": "Swimming",
          "gender": "Male",
          "participation_rate_pct": 14.51,
          "participation_rate_signed_pct": 14.51,
          "activity_order": 4
        },
        {
          "activity": "Swimming",
          "gender": "Female",
          "participation_rate_pct": 16.26,
          "participation_rate_signed_pct": -16.26,
          "activity_order": 4
        },
        {
          "activity": "Cycling",
          "gender": "Male",
          "participation_rate_pct": 10.43,
          "participation_rate_signed_pct": 10.43,
          "activity_order": 5
        },
        {
          "activity": "Cycling",
          "gender": "Female",
          "participation_rate_pct": 6.25,
          "participation_rate_signed_pct": -6.25,
          "activity_order": 5
        },
        {
          "activity": "Pilates",
          "gender": "Male",
          "participation_rate_pct": 1.21,
          "participation_rate_signed_pct": 1.21,
          "activity_order": 13
        },
        {
          "activity": "Pilates",
          "gender": "Female",
          "participation_rate_pct": 12.99,
          "participation_rate_signed_pct": -12.99,
          "activity_order": 13
        },
        {
          "activity": "Football/soccer",
          "gender": "Male",
          "participation_rate_pct": 8.87,
          "participation_rate_signed_pct": 8.87,
          "activity_order": 6
        },
        {
          "activity": "Football/soccer",
          "gender": "Female",
          "participation_rate_pct": 2.5,
          "participation_rate_signed_pct": -2.5,
          "activity_order": 6
        },
        {
          "activity": "Yoga",
          "gender": "Male",
          "participation_rate_pct": 1.59,
          "participation_rate_signed_pct": 1.59,
          "activity_order": 12
        },
        {
          "activity": "Yoga",
          "gender": "Female",
          "participation_rate_pct": 8.47,
          "participation_rate_signed_pct": -8.47,
          "activity_order": 12
        },
        {
          "activity": "Tennis",
          "gender": "Male",
          "participation_rate_pct": 5.84,
          "participation_rate_signed_pct": 5.84,
          "activity_order": 8
        },
        {
          "activity": "Tennis",
          "gender": "Female",
          "participation_rate_pct": 4.1,
          "participation_rate_signed_pct": -4.1,
          "activity_order": 8
        },
        {
          "activity": "Basketball",
          "gender": "Male",
          "participation_rate_pct": 6.84,
          "participation_rate_signed_pct": 6.84,
          "activity_order": 7
        },
        {
          "activity": "Basketball",
          "gender": "Female",
          "participation_rate_pct": 2.3,
          "participation_rate_signed_pct": -2.3,
          "activity_order": 7
        },
        {
          "activity": "Cricket",
          "gender": "Male",
          "participation_rate_pct": 4.25,
          "participation_rate_signed_pct": 4.25,
          "activity_order": 10
        },
        {
          "activity": "Cricket",
          "gender": "Female",
          "participation_rate_pct": 0.8,
          "participation_rate_signed_pct": -0.8,
          "activity_order": 10
        },
        {
          "activity": "Australian football",
          "gender": "Male",
          "participation_rate_pct": 3.81,
          "participation_rate_signed_pct": 3.81,
          "activity_order": 9
        },
        {
          "activity": "Australian football",
          "gender": "Female",
          "participation_rate_pct": 1.08,
          "participation_rate_signed_pct": -1.08,
          "activity_order": 9
        },
        {
          "activity": "Netball",
          "gender": "Male",
          "participation_rate_pct": 0.69,
          "participation_rate_signed_pct": 0.69,
          "activity_order": 11
        },
        {
          "activity": "Netball",
          "gender": "Female",
          "participation_rate_pct": 3.5,
          "participation_rate_signed_pct": -3.5,
          "activity_order": 11
        }
      ]
    },
    "width": "container",
    "height": {
      "step": 25
    },
    "mark": {
      "type": "bar",
      "tooltip": true
    },
    "encoding": {
      "y": {
        "field": "activity",
        "type": "nominal",
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
        ],
        "title": null,
        "axis": {
          "labelLimit": 150
        }
      },
      "x": {
        "field": "participation_rate_signed_pct",
        "type": "quantitative",
        "title": "Participation rate (%)",
        "axis": {
          "labelExpr": "abs(datum.value)",
          "values": [
            -60,
            -45,
            -30,
            -15,
            0,
            15,
            30,
            45,
            60
          ]
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
            "#db2777",
            "#2563eb"
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
    "config": {
      "view": {
        "stroke": null
      },
      "axis": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "Each activity has a different life-stage profile",
      "subtitle": "Small multiples show selected activity patterns by age group"
    },
    "data": {
      "values": [
        {
          "activity": "Walking",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 30.35
        },
        {
          "activity": "Walking",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 34.19
        },
        {
          "activity": "Walking",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 41.86
        },
        {
          "activity": "Walking",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 47.55
        },
        {
          "activity": "Walking",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 58.67
        },
        {
          "activity": "Walking",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 66.03
        },
        {
          "activity": "Walking",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 55.82
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 37.32
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 43.44
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 42.06
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 36.39
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 32.93
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 29.52
        },
        {
          "activity": "Fitness/Gym",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 23.68
        },
        {
          "activity": "Running/jogging",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 26.57
        },
        {
          "activity": "Running/jogging",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 26.65
        },
        {
          "activity": "Running/jogging",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 27.66
        },
        {
          "activity": "Running/jogging",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 20.85
        },
        {
          "activity": "Running/jogging",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 15.77
        },
        {
          "activity": "Running/jogging",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 8.46
        },
        {
          "activity": "Running/jogging",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 1.84
        },
        {
          "activity": "Swimming",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 17.62
        },
        {
          "activity": "Swimming",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 16.34
        },
        {
          "activity": "Swimming",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 16.58
        },
        {
          "activity": "Swimming",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 18.31
        },
        {
          "activity": "Swimming",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 16.66
        },
        {
          "activity": "Swimming",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 15.99
        },
        {
          "activity": "Swimming",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 9.74
        },
        {
          "activity": "Cycling",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 6.66
        },
        {
          "activity": "Cycling",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 5.59
        },
        {
          "activity": "Cycling",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 7.12
        },
        {
          "activity": "Cycling",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 9.26
        },
        {
          "activity": "Cycling",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 11.59
        },
        {
          "activity": "Cycling",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 11.95
        },
        {
          "activity": "Cycling",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 5.58
        },
        {
          "activity": "Football/soccer",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 17.01
        },
        {
          "activity": "Football/soccer",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 12.33
        },
        {
          "activity": "Football/soccer",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 9.36
        },
        {
          "activity": "Football/soccer",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 6.94
        },
        {
          "activity": "Football/soccer",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 3.28
        },
        {
          "activity": "Football/soccer",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 0.95
        },
        {
          "activity": "Football/soccer",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 0.14
        },
        {
          "activity": "Basketball",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 17.28
        },
        {
          "activity": "Basketball",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 11.69
        },
        {
          "activity": "Basketball",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 6.16
        },
        {
          "activity": "Basketball",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 4.84
        },
        {
          "activity": "Basketball",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 2.62
        },
        {
          "activity": "Basketball",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 0.78
        },
        {
          "activity": "Basketball",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 0.21
        },
        {
          "activity": "Yoga",
          "age_group": "15-17",
          "age_order": 1,
          "participation_rate_pct": 2.6
        },
        {
          "activity": "Yoga",
          "age_group": "18-24",
          "age_order": 2,
          "participation_rate_pct": 3.61
        },
        {
          "activity": "Yoga",
          "age_group": "25-34",
          "age_order": 3,
          "participation_rate_pct": 6.43
        },
        {
          "activity": "Yoga",
          "age_group": "35-44",
          "age_order": 4,
          "participation_rate_pct": 6.28
        },
        {
          "activity": "Yoga",
          "age_group": "45-54",
          "age_order": 5,
          "participation_rate_pct": 6.11
        },
        {
          "activity": "Yoga",
          "age_group": "55-64",
          "age_order": 6,
          "participation_rate_pct": 5.57
        },
        {
          "activity": "Yoga",
          "age_group": "65+",
          "age_order": 7,
          "participation_rate_pct": 3.16
        }
      ]
    },
    "width": 150,
    "height": 95,
    "facet": {
      "field": "activity",
      "type": "nominal",
      "columns": 4,
      "title": null,
      "sort": [
        "Walking",
        "Fitness/Gym",
        "Running/jogging",
        "Swimming",
        "Cycling",
        "Football/soccer",
        "Basketball",
        "Yoga"
      ]
    },
    "spec": {
      "mark": {
        "type": "line",
        "point": {
          "size": 34,
          "filled": true
        },
        "tooltip": true,
        "color": "#0f766e",
        "strokeWidth": 2.4
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
            "labelAngle": -40,
            "labelFontSize": 8
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
        "labelColor": "#334155",
        "titleColor": "#0f172a",
        "gridColor": "#e8edf4",
        "domainColor": "#cbd5e1",
        "tickColor": "#cbd5e1",
        "labelFontSize": 11,
        "titleFontSize": 11,
        "titlePadding": 10
      },
      "legend": {
        "labelFont": "Inter, Arial, sans-serif",
        "titleFont": "Inter, Arial, sans-serif",
        "orient": "bottom",
        "labelLimit": 180,
        "labelFontSize": 10,
        "titleFontSize": 10,
        "symbolType": "circle"
      },
      "title": {
        "font": "Inter, Arial, sans-serif",
        "fontSize": 16,
        "fontWeight": 800,
        "subtitleFont": "Inter, Arial, sans-serif",
        "subtitleFontSize": 11,
        "anchor": "start",
        "color": "#0f172a",
        "subtitleColor": "#64748b",
        "offset": 14
      },
      "bar": {
        "cornerRadiusEnd": 5
      },
      "range": {
        "category": [
          "#0f766e",
          "#2563eb",
          "#f59e0b",
          "#db2777",
          "#8b5cf6",
          "#14b8a6",
          "#64748b"
        ]
      }
    },
    "title": {
      "text": "The final picture: sport and fitness sit on a spectrum",
      "subtitle": "Circle size shows adult participation rate; position is a derived storytelling classification"
    },
    "width": "container",
    "height": 310,
    "layer": [
      {
        "data": {
          "values": [
            {
              "x": 0.8,
              "y": 1.0,
              "order": 1
            },
            {
              "x": 10.0,
              "y": 1.0,
              "order": 2
            }
          ]
        },
        "mark": {
          "type": "line",
          "stroke": "#cbd5e1",
          "strokeWidth": 7,
          "strokeCap": "round"
        },
        "encoding": {
          "x": {
            "field": "x",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.3
              ]
            },
            "axis": null
          },
          "y": {
            "field": "y",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.55,
                1.45
              ]
            },
            "axis": null
          },
          "order": {
            "field": "order",
            "type": "quantitative"
          }
        }
      },
      {
        "data": {
          "values": [
            {
              "x": 1.0,
              "y": 1.36,
              "label": "Traditional organised sport"
            },
            {
              "x": 8.6,
              "y": 1.36,
              "label": "Flexible lifestyle fitness"
            }
          ]
        },
        "mark": {
          "type": "text",
          "fontSize": 13,
          "fontWeight": 900,
          "color": "#0f172a"
        },
        "encoding": {
          "x": {
            "field": "x",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.3
              ]
            },
            "axis": null
          },
          "y": {
            "field": "y",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.55,
                1.45
              ]
            },
            "axis": null
          },
          "text": {
            "field": "label"
          }
        }
      },
      {
        "data": {
          "values": [
            {
              "activity": "Australian football",
              "spectrum_score": 1.0,
              "participation_rate_pct": 2.42,
              "estimated_participants": 547129,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Cricket",
              "spectrum_score": 1.4,
              "participation_rate_pct": 2.49,
              "estimated_participants": 563967,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Football/soccer",
              "spectrum_score": 1.8,
              "participation_rate_pct": 5.62,
              "estimated_participants": 1273027,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Basketball",
              "spectrum_score": 2.2,
              "participation_rate_pct": 4.53,
              "estimated_participants": 1024360,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Netball",
              "spectrum_score": 2.6,
              "participation_rate_pct": 2.11,
              "estimated_participants": 476973,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Tennis",
              "spectrum_score": 3.4,
              "participation_rate_pct": 4.94,
              "estimated_participants": 1118407,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Cycling",
              "spectrum_score": 5.9,
              "participation_rate_pct": 8.29,
              "estimated_participants": 1877339,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Swimming",
              "spectrum_score": 6.5,
              "participation_rate_pct": 15.39,
              "estimated_participants": 3483472,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Running/jogging",
              "spectrum_score": 7.3,
              "participation_rate_pct": 16.53,
              "estimated_participants": 3740484,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Yoga",
              "spectrum_score": 8.1,
              "participation_rate_pct": 5.07,
              "estimated_participants": 1148005,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Fitness/Gym",
              "spectrum_score": 8.8,
              "participation_rate_pct": 34.1,
              "estimated_participants": 7719043,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Walking",
              "spectrum_score": 9.6,
              "participation_rate_pct": 50.2,
              "estimated_participants": 11363621,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            }
          ]
        },
        "mark": {
          "type": "circle",
          "opacity": 0.9,
          "stroke": "#fff",
          "strokeWidth": 1.5,
          "tooltip": true
        },
        "encoding": {
          "x": {
            "field": "spectrum_score",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.3
              ]
            },
            "axis": null
          },
          "y": {
            "field": "spectrum_y",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.55,
                1.45
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
                150,
                5200
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
                "#2563eb",
                "#10b981"
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
          "values": [
            {
              "activity": "Australian football",
              "spectrum_score": 1.0,
              "participation_rate_pct": 2.42,
              "estimated_participants": 547129,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Cricket",
              "spectrum_score": 1.4,
              "participation_rate_pct": 2.49,
              "estimated_participants": 563967,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Football/soccer",
              "spectrum_score": 1.8,
              "participation_rate_pct": 5.62,
              "estimated_participants": 1273027,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Basketball",
              "spectrum_score": 2.2,
              "participation_rate_pct": 4.53,
              "estimated_participants": 1024360,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Netball",
              "spectrum_score": 2.6,
              "participation_rate_pct": 2.11,
              "estimated_participants": 476973,
              "side": "Traditional sport",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Tennis",
              "spectrum_score": 3.4,
              "participation_rate_pct": 4.94,
              "estimated_participants": 1118407,
              "side": "Traditional sport",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Cycling",
              "spectrum_score": 5.9,
              "participation_rate_pct": 8.29,
              "estimated_participants": 1877339,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Swimming",
              "spectrum_score": 6.5,
              "participation_rate_pct": 15.39,
              "estimated_participants": 3483472,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Running/jogging",
              "spectrum_score": 7.3,
              "participation_rate_pct": 16.53,
              "estimated_participants": 3740484,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Yoga",
              "spectrum_score": 8.1,
              "participation_rate_pct": 5.07,
              "estimated_participants": 1148005,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            },
            {
              "activity": "Fitness/Gym",
              "spectrum_score": 8.8,
              "participation_rate_pct": 34.1,
              "estimated_participants": 7719043,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 1.08,
              "label_y": 1.28
            },
            {
              "activity": "Walking",
              "spectrum_score": 9.6,
              "participation_rate_pct": 50.2,
              "estimated_participants": 11363621,
              "side": "Flexible lifestyle fitness",
              "spectrum_y": 0.92,
              "label_y": 0.73
            }
          ]
        },
        "mark": {
          "type": "text",
          "fontSize": 10,
          "fontWeight": 700,
          "color": "#0f172a"
        },
        "encoding": {
          "x": {
            "field": "spectrum_score",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.5,
                10.3
              ]
            },
            "axis": null
          },
          "y": {
            "field": "label_y",
            "type": "quantitative",
            "scale": {
              "domain": [
                0.55,
                1.45
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
    element.innerHTML = `<p class="chart-error">This chart could not be loaded. Check that Vega, Vega-Lite and Vega-Embed are loading correctly.</p>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const chartOrder = ["chart1", "chart2", "chart3", "chart4", "chart5", "chart6", "chart7", "chart8", "chart9", "chart10", "chart11", "chart12"];
  chartOrder.forEach((chartId) => {
    const selector = `#${chartId}`;
    const element = document.querySelector(selector);
    if (!element) return;
    vegaEmbed(selector, chartSpecs[chartId], embedOptions).catch((error) => showChartError(selector, error));
  });
});
