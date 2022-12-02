import { View } from '@tarojs/components';
import Chart from '../../echarts';
import '../style.scss';
/**
 * 这个case，skia渲染出来的，点击图表会引发app crash
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-polar-real-estate
 */
export default function barPolarRealEstate() {
  const data = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
  ];
  // prettier-ignore
  const cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
  const barHeight = 50;
  const option = {
    title: {
      text: 'How expensive is it to rent an apartment in China?',
      subtext: 'Data from https://www.numbeo.com'
    },
    legend: {
      show: true,
      top: 'bottom',
      data: ['Range', 'Average']
    },
    grid: {
      top: 100
    },
    angleAxis: {
      type: 'category',
      data: cities
    },
    tooltip: {
      show: true
    },
    radiusAxis: {},
    polar: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: 'transparent'
        },
        data: data.map(function(d) {
          return d[0];
        }),
        coordinateSystem: 'polar',
        stack: 'Min Max',
        silent: true
      },
      {
        type: 'bar',
        data: data.map(function(d) {
          return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: 'Range',
        stack: 'Min Max'
      },
      {
        type: 'bar',
        itemStyle: {
          color: 'transparent'
        },
        data: data.map(function(d) {
          return d[2] - barHeight;
        }),
        coordinateSystem: 'polar',
        stack: 'Average',
        silent: true,
        z: 10
      },
      {
        type: 'bar',
        data: data.map(function(d) {
          return barHeight * 2;
        }),
        coordinateSystem: 'polar',
        name: 'Average',
        stack: 'Average',
        barGap: '-100%',
        z: 10
      }
    ]
  };

  return (
    <View>
      <View className="header">
        中文无法正常显示，formatter不支持，点击skia渲染出来的图表会引发app crash
      </View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}