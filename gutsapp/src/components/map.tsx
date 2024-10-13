import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { ResourceLevels } from "@/types/resource";

interface MapProps {
  playerResources: ResourceLevels;
  naResources: ResourceLevels;
  saResources: ResourceLevels;
  europeResources: ResourceLevels;
  asiaResources: ResourceLevels;
  oceaniaResources: ResourceLevels;
  africaResources: ResourceLevels;
  naRelationship: number;
  saRelationship: number;
  europeRelationship: number;
  asiaRelationship: number;
  oceaniaRelationship: number;
  africaRelationship: number;
}

interface CityDataItem {
  latitude: number;
  longitude: number;
  name: string;
  continent: string;
}

export const Map = (props: MapProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);

    root.container.setAll({
      background: am5.Rectangle.new(root, {
        fill: am5.color(0x1e1e1e), 
        fillOpacity: 1,
      }),
    });

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        width: am5.percent(100),
        height: am5.percent(100),
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
      })
    );

    chart.chartContainer.setAll({
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    });

    chart.seriesContainer.setAll({
      width: am5.percent(100),
      height: am5.percent(100),
    });

    // Continent Stuff ------

    const continentSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: {
          ...am5geodata_continentsLow,
          features: am5geodata_continentsLow.features.filter(
            (feature) => feature.id !== "antarctica"
          ),
        },
      })
    );

    const continentGDPs = {
      africa: props.africaResources.GDP,
      asia: props.asiaResources.GDP,
      europe: props.europeResources.GDP,
      northAmerica: props.naResources.GDP,
      southAmerica: props.saResources.GDP,
      oceania: props.oceaniaResources.GDP,
      player: props.playerResources.GDP
    };

    const continentGDPArray = Object.entries(continentGDPs).map(
      ([continentId, GDP]) => ({ continentId, GDP })
    );

    continentGDPArray.sort((a, b) => b.GDP - a.GDP);

    const top3Continents = continentGDPArray.slice(0, 3);

    const topGDPValues = top3Continents.map((c) => c.GDP);

    const EPSILON = 0.000001;
    const hasTie =
      Math.abs(topGDPValues[0] - topGDPValues[1]) < EPSILON ||
      Math.abs(topGDPValues[1] - topGDPValues[2]) < EPSILON ||
      Math.abs(topGDPValues[0] - topGDPValues[2]) < EPSILON;

    const continentColors: { [key: string]: am5.Color } = {
      africa: am5.color(0x4e4e4e),
      asia: am5.color(0x5e5e5e),
      europe: am5.color(0x6e6e6e),
      northAmerica: am5.color(0x7e7e7e),
      southAmerica: am5.color(0x8e8e8e),
      oceania: am5.color(0x737373),
    };

    const rankColors: am5.Color[] = [
      am5.color("#d4af37"),
      am5.color("#d6d2d2"),
      am5.color("#cd7f32"),
    ];

    continentSeries.mapPolygons.template.setAll({
      stroke: am5.color(0x000000),
      strokeWidth: 2,
      tooltipText: "{name}",
    });

    continentSeries.mapPolygons.template.set(
      "tooltip",
      am5.Tooltip.new(root, {})
    );

    continentSeries.events.on("datavalidated", () => {
      continentSeries.mapPolygons.each((polygon: am5map.MapPolygon) => {
        const dataContext = polygon.dataItem
          ?.dataContext as { id?: string; name?: string };
        const continentId = dataContext?.id;
        let color = continentColors[continentId || ""];

        if (!hasTie) {
          const rank = top3Continents.findIndex(
            (c) => c.continentId === continentId
          );
          if (rank >= 0 && rank < 3) {
            color = rankColors[rank];
          }
        }

        if (color) {
          polygon.set("fill", color);
        }
      });
    });

    // Continent Relation Stuff -------------

    const relationPoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const relationLocationData: CityDataItem[] = [
      {
        latitude: 36.7128,
        longitude: -120.006,
        name: "Relationship",
        continent: "northAmerica",
      },
      {
        latitude: -18.5505,
        longitude: -46.6333,
        name: "Relationship",
        continent: "southAmerica",
      },
      {
        latitude: 61.5074,
        longitude: 10.1278,
        name: "Relationship",
        continent: "europe",
      },
      {
        latitude: 30.6895,
        longitude: 60.6917,
        name: "Relationship",
        continent: "asia",
      },
      {
        latitude: -33.8688,
        longitude: 145.2093,
        name: "Relationship",
        continent: "oceania",
      },
      {
        latitude: -30.2921,
        longitude: 25.8219,
        name: "Relationship",
        continent: "africa",
      },
    ];

    relationPoints.data.setAll(relationLocationData);

    relationPoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let relationshipValue = 0;
      switch (continent) {
        case "northAmerica":
          relationshipValue = props.naRelationship;
          break;
        case "southAmerica":
          relationshipValue = props.saRelationship;
          break;
        case "europe":
          relationshipValue = props.europeRelationship;
          break;
        case "asia":
          relationshipValue = props.asiaRelationship;
          break;
        case "oceania":
          relationshipValue = props.oceaniaRelationship;
          break;
        case "africa":
          relationshipValue = props.africaRelationship;
          break;
        default:
          relationshipValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (relationshipValue >= 66) {
        iconSrc = "/images/happy-face.svg"; 
      } else if (relationshipValue >= 33) {
        iconSrc = "/images/neutral-face.svg";
      } else {
        iconSrc = "/images/sad-face.svg"; 
      }
    
      const size = 20 + Math.pow(relationshipValue / 100, 2) * 30;
    
      const relationshipIcon = am5.Picture.new(root, {
        width: size,   
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      relationshipIcon.set("tooltipText", relationshipValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: relationshipIcon,
      });
    
      relationshipIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 3000,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });

    // MANUFACTURING ICON -----------------

    const manufacturePoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const manLocationData: CityDataItem[] = [
      {
        latitude: 35.7128,
        longitude: -95.006,
        name: "Manufacturing",
        continent: "northAmerica",
      },
      {
        latitude: -6.5505,
        longitude: -46.6333,
        name: "Manufacturing",
        continent: "southAmerica",
      },
      {
        latitude: 53.5074,
        longitude: 10.1278,
        name: "Manufacturing",
        continent: "europe",
      },
      {
        latitude: 25.6895,
        longitude: 100.6917,
        name: "Manufacturing",
        continent: "asia",
      },
      {
        latitude: -4.8688,
        longitude: 145.2093,
        name: "Manufacturing",
        continent: "oceania",
      },
      {
        latitude: -1.2921,
        longitude: 32.8219,
        name: "Manufacturing",
        continent: "africa",
      },
    ];

    manufacturePoints.data.setAll(manLocationData);

    manufacturePoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let manValue = 0;
      switch (continent) {
        case "northAmerica":
          manValue = props.naResources.Manufacturing;
          break;
        case "southAmerica":
          manValue = props.saResources.Manufacturing;
          break;
        case "europe":
          manValue = props.europeResources.Manufacturing;
          break;
        case "asia":
          manValue = props.asiaResources.Manufacturing;
          break;
        case "oceania":
          manValue = props.oceaniaResources.Manufacturing;
          break;
        case "africa":
          manValue = props.africaResources.Manufacturing;
          break;
        default:
          manValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (manValue >= 66) {
        iconSrc = "/images/good-factory.svg"; 
      } else if (manValue >= 33) {
        iconSrc = "/images/neutral-factory.svg"; 
      } else {
        iconSrc = "/images/bad-factory.svg"; 
      }
    
      const size = 20 + Math.pow(manValue / 100, 2) * 30;
    
      const manIcon = am5.Picture.new(root, {
        width: size,  
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      manIcon.set("tooltipText", manValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: manIcon,
      });
    
      manIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 3500,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });

    // DEFENCE ICON -----------------

    const defencePoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const defenceLocationData: CityDataItem[] = [
      {
        latitude: 48.7128,
        longitude: -105.006,
        name: "defence",
        continent: "northAmerica",
      },
      {
        latitude: -26.5505,
        longitude: -65.6333,
        name: "defence",
        continent: "southAmerica",
      },
      {
        latitude: 44.5074,
        longitude: 22.1278,
        name: "defence",
        continent: "europe",
      },
      {
        latitude: 45.6895,
        longitude: 80.6917,
        name: "defence",
        continent: "asia",
      },
      {
        latitude: -25.8688,
        longitude: 120.2093,
        name: "defence",
        continent: "oceania",
      },
      {
        latitude: 24.2921,
        longitude: 0.8219,
        name: "defence",
        continent: "africa",
      },
    ];

    defencePoints.data.setAll(defenceLocationData);

    defencePoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let defenceValue = 0;
      switch (continent) {
        case "northAmerica":
          defenceValue = props.naResources.Defence;
          break;
        case "southAmerica":
          defenceValue = props.saResources.Defence;
          break;
        case "europe":
          defenceValue = props.europeResources.Defence;
          break;
        case "asia":
          defenceValue = props.asiaResources.Defence;
          break;
        case "oceania":
          defenceValue = props.oceaniaResources.Defence;
          break;
        case "africa":
          defenceValue = props.africaResources.Defence;
          break;
        default:
          defenceValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (defenceValue >= 66) {
        iconSrc = "/images/good-defence.svg"; 
      } else if (defenceValue >= 33) {
        iconSrc = "/images/neutral-defence.svg"; 
      } else {
        iconSrc = "/images/bad-defence.svg"; 
      }
    
      const size = 20 + Math.pow(defenceValue / 100, 2) * 30;
    
      const defenceIcon = am5.Picture.new(root, {
        width: size,  
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      defenceIcon.set("tooltipText", defenceValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: defenceIcon,
      });
    
      defenceIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 4000,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });

    // SERVICE ICON -----------------

    const servicePoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const serviceLocationData: CityDataItem[] = [
      {
        latitude: 40.7128,
        longitude: -75.006,
        name: "Service",
        continent: "northAmerica",
      },
      {
        latitude: -6.5505,
        longitude: -72.6333,
        name: "Service",
        continent: "southAmerica",
      },
      {
        latitude: 44.5074,
        longitude: 5.1278,
        name: "Service",
        continent: "europe",
      },
      {
        latitude: 15.6895,
        longitude: 76.6917,
        name: "Service",
        continent: "asia",
      },
      {
        latitude: -18.8688,
        longitude: 145.2093,
        name: "Service",
        continent: "oceania",
      },
      {
        latitude: 24.2921,
        longitude: 26.8219,
        name: "Service",
        continent: "africa",
      },
    ];

    servicePoints.data.setAll(serviceLocationData);

    servicePoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let serviceValue = 0;
      switch (continent) {
        case "northAmerica":
          serviceValue = props.naResources.Services;
          break;
        case "southAmerica":
          serviceValue = props.saResources.Services;
          break;
        case "europe":
          serviceValue = props.europeResources.Services;
          break;
        case "asia":
          serviceValue = props.asiaResources.Services;
          break;
        case "oceania":
          serviceValue = props.oceaniaResources.Services;
          break;
        case "africa":
          serviceValue = props.africaResources.Services;
          break;
        default:
          serviceValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (serviceValue >= 66) {
        iconSrc = "/images/good-service.svg"; 
      } else if (serviceValue >= 33) {
        iconSrc = "/images/neutral-service.svg"; 
      } else {
        iconSrc = "/images/bad-service.svg"; 
      }
    
      const size = 20 + Math.pow(serviceValue / 100, 2) * 30;
    
      const serviceIcon = am5.Picture.new(root, {
        width: size,  
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      serviceIcon.set("tooltipText", serviceValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: serviceIcon,
      });
    
      serviceIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 2500,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });


     // ENERGY ICON -----------------

     const energyPoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const energyLocationData: CityDataItem[] = [
      {
        latitude: 53.7128,
        longitude: -70.006,
        name: "energy",
        continent: "northAmerica",
      },
      {
        latitude: 5.5505,
        longitude: -63.6333,
        name: "energy",
        continent: "southAmerica",
      },
      {
        latitude: 55.5074,
        longitude: 30.1278,
        name: "energy",
        continent: "europe",
      },
      {
        latitude: 30.6895,
        longitude: 78.6917,
        name: "energy",
        continent: "asia",
      },
      {
        latitude: -1.8688,
        longitude: 115.2093,
        name: "energy",
        continent: "oceania",
      },
      {
        latitude: 10.2921,
        longitude: 16.8219,
        name: "energy",
        continent: "africa",
      },
    ];

    energyPoints.data.setAll(energyLocationData);

    energyPoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let energyValue = 0;
      switch (continent) {
        case "northAmerica":
          energyValue = props.naResources.Energy;
          break;
        case "southAmerica":
          energyValue = props.saResources.Energy;
          break;
        case "europe":
          energyValue = props.europeResources.Energy;
          break;
        case "asia":
          energyValue = props.asiaResources.Energy;
          break;
        case "oceania":
          energyValue = props.oceaniaResources.Energy;
          break;
        case "africa":
          energyValue = props.africaResources.Energy;
          break;
        default:
          energyValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (energyValue >= 66) {
        iconSrc = "/images/good-energy.svg"; 
      } else if (energyValue >= 33) {
        iconSrc = "/images/neutral-energy.svg"; 
      } else {
        iconSrc = "/images/bad-energy.svg"; 
      }
    
      const size = 20 + Math.pow(energyValue / 100, 2) * 30;
    
      const energyIcon = am5.Picture.new(root, {
        width: size,  
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      energyIcon.set("tooltipText", energyValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: energyIcon,
      });
    
      energyIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 3250,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });


     // AGRICULTURE ICON -----------------

     const agPoints = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    const agLocationData: CityDataItem[] = [
      {
        latitude: 58.7128,
        longitude: -110.006,
        name: "ag",
        continent: "northAmerica",
      },
      {
        latitude: -35.5505,
        longitude: -59.6333,
        name: "ag",
        continent: "southAmerica",
      },
      {
        latitude: 55.5074,
        longitude: 44.1278,
        name: "ag",
        continent: "europe",
      },
      {
        latitude: 42.6895,
        longitude: 98.6917,
        name: "ag",
        continent: "asia",
      },
      {
        latitude: -22.8688,
        longitude: 132.2093,
        name: "ag",
        continent: "oceania",
      },
      {
        latitude: -12.2921,
        longitude: 16.8219,
        name: "ag",
        continent: "africa",
      },
    ];

    agPoints.data.setAll(agLocationData);

    agPoints.bullets.push(function (root, series, dataItem) {
      const data = dataItem.dataContext as CityDataItem;
      const continent = data.continent;
    
      let agValue = 0;
      switch (continent) {
        case "northAmerica":
          agValue = props.naResources.Agriculture;
          break;
        case "southAmerica":
          agValue = props.saResources.Agriculture;
          break;
        case "europe":
          agValue = props.europeResources.Agriculture;
          break;
        case "asia":
          agValue = props.asiaResources.Agriculture;
          break;
        case "oceania":
          agValue = props.oceaniaResources.Agriculture;
          break;
        case "africa":
          agValue = props.africaResources.Agriculture;
          break;
        default:
          agValue = 0;
          break;
      }
    
      let iconSrc = "";
      if (agValue >= 66) {
        iconSrc = "/images/good-ag.svg"; 
      } else if (agValue >= 33) {
        iconSrc = "/images/neutral-ag.svg"; 
      } else {
        iconSrc = "/images/bad-ag.svg"; 
      }
    
      const size = 20 + Math.pow(agValue / 100, 2) * 30;
    
      const agIcon = am5.Picture.new(root, {
        width: size,  
        height: size, 
        src: iconSrc,
        centerX: am5.p50,
        centerY: am5.p50,
      });
    
      agIcon.set("tooltipText", agValue.toString() + "%");
    
      const bullet = am5.Bullet.new(root, {
        sprite: agIcon,
      });
    
      agIcon.animate({
        key: "scale",
        from: 1,
        to: 1.2,
        duration: 2750,
        loops: Infinity,
        easing: am5.ease.yoyo(am5.ease.cubic),
      });
    
      return bullet;
    });

    
    // Player Location ---------------

    const ukSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: ["GB"],
      })
    );

    ukSeries.mapPolygons.template.setAll({
      fill: am5.color(0xcc0404),
      stroke: am5.color(0x000000),
      strokeWidth: 2,
      tooltipText: "You!",
    });

    ukSeries.mapPolygons.template.set("tooltip", am5.Tooltip.new(root, {}));

    return () => root.dispose();
  }, [
    props.naResources.GDP,
    props.saResources.GDP,
    props.europeResources.GDP,
    props.asiaResources.GDP,
    props.oceaniaResources.GDP,
    props.africaResources.GDP,
    props.naRelationship,
    props.saRelationship,
    props.europeRelationship,
    props.asiaRelationship,
    props.oceaniaRelationship,
    props.africaRelationship,
  ]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100vw",
        height: "100vh",
        padding: 0,
        margin: 0,
        overflow: "hidden",
      }}
    />
  );
};
