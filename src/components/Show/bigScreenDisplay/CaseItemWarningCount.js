/*
* CaseItemWarningCount.js 智慧案管大屏---涉案物品告警数量Pie
* author：lyp
* 20181122
* */

import React, { PureComponent } from 'react';
import echarts from 'echarts/lib/echarts';
import pie from 'echarts/lib/chart/pie';
import title from 'echarts/lib/component/title';
import legend from 'echarts/lib/component/legend';
import tooltip from 'echarts/lib/component/tooltip';

let myChart;

export default class CaseItemWarningCount extends PureComponent {
  componentDidMount() {
    const { selectDate, org, orgCode, orglist } = this.props;
    this.showEchart();
    this.getCaseItemWarningCount();
    window.addEventListener('resize', myChart.resize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (this.props.currentDateType !== nextProps.currentDateType|| this.props.org !== nextProps.org) {
        this.getCaseItemWarningCount();
      }
    }
  }

  // 涉案物品告警数量
  getCaseItemWarningCount = () => {
    const { shadeColors } = this.props;
          const legendData = [];
          const dataList = [{name:'非法出库',count:Math.floor(Math.random()*(500 - 1) + 1)},{name:'盘点异常',count:Math.floor(Math.random()*(500 - 1) + 1)},{name:'保管超期',count:Math.floor(Math.random()*(500 - 1) + 1)},{name:'归还超期',count:Math.floor(Math.random()*(500 - 1) + 1)}];
          const pieData = [];
          let countData = 0;
          for (let i = 0; i < dataList.length; i++) {
            const obj = {
              name: dataList[i].name,
              icon: 'circle',
            };
            legendData.push(obj);
            pieData.push({
              name: dataList[i].name,
              value: dataList[i].count,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: shadeColors[i][0], // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: shadeColors[i][1], // 100% 处的颜色
                    },
                  ],
                },
              },
            });
            countData += parseInt(dataList[i].count);
          }
          myChart.setOption({
            legend: {
              data: legendData,
              formatter: function(name) {
                let formatStr = '';
                for (let i = 0; i < pieData.length; i++) {
                  if (name === pieData[i].name) {
                    formatStr = `${name} ${pieData[i].value}`;
                    break;
                  }
                }
                return formatStr;
              },
            },
            series: [
              {
                data: pieData,
                label: {
                  normal: {
                    formatter: `告警总数\n\n${countData}`,
                  },
                },
              },
            ],
          });
  };

  showEchart = () => {
    myChart = echarts.init(document.getElementById('CaseItemWarningCount'));

    const option = {
      title: {
        text: '涉案物品告警数量',
        textStyle: {
          color: '#66ccff',
          fontSize: 20,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        right: '8%',
        top: '25%',
        show: true,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 25,
        selectedMode: true, // 点击
        textStyle: {
          color: '#fff',
          fontSize: 16,
          lineHeight: 24,
        },
        data: [],
      },
      series: [
        {
          name: '涉案物品告警数量',
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: '22',
                // fontWeight: 'bold',
                color: '#66ccff',
              },
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [],
        },
      ],
    };
    myChart.setOption(option);
  };

  render() {
    return <div id="CaseItemWarningCount" style={{ height: '100%', width: '100%' }} />;
  }
}
