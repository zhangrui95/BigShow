/*
* CriminalCaseWarningCount.js 智慧案管大屏---刑事案件告警数量Pie
* author：lyp
* 20181120
* */

import React, { PureComponent } from 'react';
import echarts from 'echarts/lib/echarts';
import pie from 'echarts/lib/chart/pie';
import title from 'echarts/lib/component/title';
import legend from 'echarts/lib/component/legend';
import tooltip from 'echarts/lib/component/tooltip';
import { routerRedux } from 'dva/router';

let myChart;

export default class CriminalCaseWarningCount extends PureComponent {
  state={
    shadeColors: [
      ['#ff4d98', '#ff0062'],
      ['#00e3ff', '#009bcd'],
      ['#6f05c3', '#c6306c'],
      ['#ff4e50', '#f9d423'],
      ['#4971ff', '#9798ff'],
      ['#00c9ff', '#92f39d'],
      ['#ffe000', '#799f0c'],
      ['#00c6ff', '#0072ff'],
      ['#f09819', '#edde5d'],
      ['#8e2de2', '#4a00e0'],
    ],
  }
  componentDidMount() {
    const { selectDate, orgCode, org, orglist } = this.props;
    this.showEchart();
    this.getUnCaseAllTypeWarnings(selectDate[0], selectDate[1], org, orgCode, orglist);
    window.addEventListener('resize', myChart.resize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      if (
        nextProps.selectDate !== null &&
        (this.props.selectDate !== nextProps.selectDate ||
          this.props.orgCode !== nextProps.orgCode ||
          this.props.org !== nextProps.org ||
          this.props.orglist !== nextProps.orglist)
      ) {
        this.getUnCaseAllTypeWarnings(
          nextProps.selectDate[0],
          nextProps.selectDate[1],
          nextProps.org,
          nextProps.orgCode,
          nextProps.orglist
        );
      }
    }
  }

  // 刑事案件告警数量
  getUnCaseAllTypeWarnings = (startTime, endTime, org, orgCode, orglist) => {
    const { shadeColors } = this.state;
    // this.props.dispatch({
    //   type: 'UnCaseData/getUnCaseAllTypeWarnings',
    //   payload: {
    //     kssj: startTime,
    //     jssj: endTime,
    //     org: org,
    //     orgcode: orgCode,
    //     orglist: orglist,
    //   },
    //   callback: data => {
    //     if (data) {
    let data = {list:[{name:'取保候审超期',count:'102',code:'1'},{name:'逮捕超期',count:'31',code:'2'},{name:'行政拘留超期',count:'56',code:'3'},{name:'监视居住超期',count:'78',code:'4'}]}
          const legendData = [];
          const pieData = [];
          let countData = 0;
          for (let i = 0; i < data.list.length; i++) {
            const obj = {
              name: data.list[i].name,
              icon: 'circle',
            };
            legendData.push(obj);
            pieData.push({
              name: data.list[i].name,
              value: data.list[i].count,
              code: data.list[i].code,
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
            countData += parseInt(data.list[i].count);
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
    //     }
    //   },
    // });
  };

  showEchart = () => {
    myChart = echarts.init(document.getElementById('CriminalCaseWarningCount'));

    const option = {
      title: {
        text: '刑事案件告警数量',
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
        right: '5%',
        top: '15%',
        show: true,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 15,
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
          name: '刑事案件告警数量',
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
    let that = this;
    myChart.setOption(option);
    myChart.on('click', function(params) {
      console.log('that.props.dep', that.props.dep);
      that.props.dispatch(
        routerRedux.push({
          pathname: '/newregister/newalarm/newalarmCriminal',
          state: {
            code: that.props.dep ? that.props.dep : '',
            kssj: that.props.selectDate[0] ? that.props.selectDate[0] : '',
            jssj: that.props.selectDate[1] ? that.props.selectDate[1] : '',
            wtlx_id: params.data.code ? params.data.code : '',
          },
        })
      );
    });
  };

  render() {
    return <div id="CriminalCaseWarningCount" style={{ height: '100%', width: '100%' }} />;
  }
}
