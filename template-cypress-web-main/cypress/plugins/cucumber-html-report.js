// eslint-disable-next-line import/extensions
import moment from 'moment/moment.js';
import report from 'multiple-cucumber-html-reporter';

report.generate({
  jsonDir: './cucumber-report',
  reportPath: './cucumber-report/html',
  openReportInBrowser: true,
  saveCollectedJSON: true,
  pageTitle: 'Builders - Web Functional Test Suite',
  reportName: 'Builders - Web Functional Test Suite',
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '108',
    },
    device: 'Local Test Machine',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Custom project' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'B11221.34321' },
      {
        label: 'Execution Start Time',
        value: moment().format('MMMM Do YYYY, h:mm:ss a'),
      },
    ],
  },
});
