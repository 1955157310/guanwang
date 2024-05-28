<template>
  <div class="module-box">
    <div style="flex: 0 1 25%">
      <dv-border-box-1 style="width: 100%; height: 150px">
        <Capsule />
      </dv-border-box-1>
      <!-- <dv-border-box-2 style="width:100%;height:150px;">
        <dv-water-level-pond :config="config2" style="width:100%;height:150px" />
      </dv-border-box-2> -->
      <dv-border-box-2 style="width: 100%; height: 300px">
        <Water />
      </dv-border-box-2>
    </div>
    <div style="flex: 0 1 50%">
      <dv-border-box-8 style="width: 100%; height: 450px">
        <div ref="mainech" style="width: 100%; height: 450px"></div>
      </dv-border-box-8>
    </div>
    <div style="flex: 0 1 25%">
      
    </div>
  </div>
</template>

<script>
import Capsule from "./chart/capsule";
import * as echarts from "echarts";
import Water from "./chart/water";

export default {
  components: {
    Capsule,
    Water,
  },
  computed: {},
  mounted() {
    this.initchar();
  },
  methods: {
    initchar() {
      var myChart = echarts.init(this.$refs.mainech);

      var option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: require("../assets/img/earth.jpg"),
          shading: "lambert",
          environment: require("../assets/img/starfield.jpg"),
          atmosphere: {
            show: true,
          },
          light: {
            ambient: {
              intensity: 0.1,
            },

            main: {
              intensity: 1.5,
              shadowQuality: "high",
            },
            viewControl: {
              autoRotate: true,
            },
            globeOuterRadius: 150,
            globeRadius: 100,
            shading: "lambert",
          },
        },
        series: [],
      };

      myChart.setOption(option);
    },
  },
  data() {
    return {
      config2: {
        data: [66, 45],
        shape: "roundRect",
      },
      config3: {
        data: [
          {
            name: "周口1",
            value: 55,
          },
          {
            name: "南阳2",
            value: 120,
          },
          {
            name: "西峡3",
            value: 78,
          },
          {
            name: "驻马店4",
            value: 66,
          },
          {
            name: "新乡5",
            value: 100,
          },
        ],
      },
      // 滚屏
      config4: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
    };
  },
};
</script>

