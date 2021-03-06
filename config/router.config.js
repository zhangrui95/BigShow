export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  {
    path: '/home',
    component: '../layouts/SetupShow',
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/home' },
      {
        path: '/dashboard/analysis',
        name: 'home',
        icon: 'home',
        component: './Dashboard/Analysis',
      },
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   icon: 'dashboard',
      //   routes: [
      //     {
      //       path: '/dashboard/analysis',
      //       name: 'analysis',
      //       component: './Dashboard/Analysis',
      //     },
      //     {
      //       path: '/dashboard/monitor',
      //       name: 'monitor',
      //       component: './Dashboard/Monitor',
      //     },
      //     {
      //       path: '/dashboard/workplace',
      //       name: 'workplace',
      //       component: './Dashboard/Workplace',
      //     },
      //   ],
      // },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/home',
            name: 'home',
            component: './Forms/Home',
          },
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/information-query',
            name: 'informationquery',
            component: './Forms/InformationQuery',
          },
          {
            path: '/form/case-statistic',
            name: 'casestatistic',
            component: './Forms/CaseStatistic',
          },
          {
            path: '/form/archivesstatistics',
            name: 'archivesstatistics',
            component: './Forms/ArchivesStatistics',
            // routes: [
            //   {
            //     path: '/form/archivesstatistics',
            //     redirect: './form/archivesstatistics/archivesstatisticsindex1',
            //   },
            //   {
            //     path: '/form/archivesstatistics/archivesstatisticsindex1',
            //     name: 'archivesstatisticsindex1',
            //     component: './Forms/ArchivesStatisticsIndex1',
            //   },
            //   {
            //     path: '/form/archivesstatistics/archivesstatisticsindex2',
            //     name: 'archivesstatisticsindex2',
            //     component: './Forms/ArchivesStatisticsIndex2',
            //   },
            //   {
            //     path: '/form/archivesstatistics/archivesstatisticsindex3',
            //     name: 'archivesstatisticsindex3',
            //     component: './Forms/ArchivesStatisticsIndex3',
            //   },
            //   {
            //     path: '/form/archivesstatistics/archivesstatisticsindex4',
            //     name: 'archivesstatisticsindex4',
            //     component: './Forms/ArchivesStatisticsIndex4',
            //   },
            // ],
          },
          // {
          //   path: '/form/step-form',
          //   name: 'stepform',
          //   component: './Forms/StepForm',
          //   hideChildrenInMenu: true,
          //   routes: [
          //     {
          //       path: '/form/step-form',
          //       redirect: '/form/step-form/info',
          //     },
          //     {
          //       path: '/form/step-form/info',
          //       name: 'info',
          //       component: './Forms/StepForm/Step1',
          //     },
          //     {
          //       path: '/form/step-form/confirm',
          //       name: 'confirm',
          //       component: './Forms/StepForm/Step2',
          //     },
          //     {
          //       path: '/form/step-form/result',
          //       name: 'result',
          //       component: './Forms/StepForm/Step3',
          //     },
          //   ],
          // },
          // {
          //   path: '/form/advanced-form',
          //   name: 'advancedform',
          //   authority: ['admin'],
          //   component: './Forms/AdvancedForm',
          // },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/UsageSituation',
            name: 'usageSituation',
            component: './List/UsageSituation',
          },
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/businessList',
            name: 'businessList',
            component: './List/BusinessList',
          },
          {
            path: '/list/abnormalList',
            name: 'abnormalList',
            component: './List/AbnormalList',
          },
          // {
          //   path: '/list/search',
          //   name: 'searchlist',
          //   component: './List/List',
          // },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            // authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
          {
            path: '/profile/detail',
            // name: 'advanced',
            component: './Profile/DetailPage',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'middlePlatform',
        icon: 'setting',
        path: '/middlePlatform',
        routes: [
          {
            path: '/middlePlatform/depManage',
            name: 'depManage',
            component: './MiddlePlatform/DepManage',
          },
          {
            path: '/middlePlatform/dictManage',
            name: 'dictManage',
            component: './MiddlePlatform/DictManage',
          },
          {
            path: '/middlePlatform/deviceStatus',
            name: 'deviceStatus',
            component: './MiddlePlatform/DeviceStatus',
          },
        ],
      },
      // {
      //   name: 'exception',
      //   icon: 'warning',
      //   path: '/exception',
      //   routes: [
      //     // exception
      //     {
      //       path: '/exception/403',
      //       name: 'not-permission',
      //       component: './Exception/403',
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'not-find',
      //       component: './Exception/404',
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'server-error',
      //       component: './Exception/500',
      //     },
      //     {
      //       path: '/exception/trigger',
      //       name: 'trigger',
      //       hideInMenu: true,
      //       component: './Exception/TriggerException',
      //     },
      //   ],
      // },
      // {
      //   name: 'account',
      //   icon: 'user',
      //   path: '/account',
      //   routes: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: './Account/Center/Center',
      //       routes: [
      //         {
      //           path: '/account/center',
      //           redirect: '/account/center/articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/applications',
      //           component: './Account/Center/Applications',
      //         },
      //         {
      //           path: '/account/center/projects',
      //           component: './Account/Center/Projects',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: './Account/Settings/Info',
      //       routes: [
      //         {
      //           path: '/account/settings',
      //           redirect: '/account/settings/base',
      //         },
      //         {
      //           path: '/account/settings/base',
      //           component: './Account/Settings/BaseView',
      //         },
      //         {
      //           path: '/account/settings/security',
      //           component: './Account/Settings/SecurityView',
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           component: './Account/Settings/BindingView',
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           component: './Account/Settings/NotificationView',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        component: '404',
      },
    ],
  },
];
