import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '服务器': ['www_website','vps_two','vps_three'],
    '公益应用': ['gyapi'],
    '应用': ['Open-WebUI','API'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
      {
      id: 'gyapi',
      name: '公益API站',
      method: 'GET',
      target: 'https://gyapi.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '公益API站',
      statusPageLink: 'https://gyapi.zxiaoruan.cn/',
     },
     {
      id: 'vps_two',
      name: '2+4-服务器香港-7元',
      method: 'GET',
      target: 'https://vps3.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '2+4-服务器香港-7元',
      statusPageLink: 'https://vps3.zxiaoruan.cn/',
    },
     {
      id: 'vps_three',
      name: '2+2-服务器美国-2元',
      method: 'GET',
      target: 'https://vps2.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '2+4-服务器香港-7元',
      statusPageLink: 'https://vps2.zxiaoruan.cn/',
    },
    {
      id: 'API',
      name: 'ZAPI',
      method: 'GET',
      target: 'https://api.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'ZAPI监控',
      statusPageLink: 'https://api.zxiaoruan.cn/',
    },
    {
      id: 'Open-WebUI',
      name: 'Open-WebUI',
      method: 'GET',
      target: 'https://chat.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'chat监控',
      statusPageLink: 'https://chat.zxiaoruan.cn/',
    },
    {
      id: 'www_website',
      name: '4+4-服务器美国-30元',
      method: 'GET',
      target: 'https://www.zxiaoruan.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '4+4-服务器美国-30元',
      statusPageLink: 'https://www.zxiaoruan.cn/',
    },
  ],
  notification: {
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}
const maintenances: MaintenanceConfig[] = [  {
    monitors: ['Open-WebUI'],
    title: '系统更新',
    body: '测试新服务，停机约4小时',
    start: '2025-07-30T20:59:00+08:00',
    end: '2025-07-30T23:59:59+08:00',
    color: 'red',
  }
]
export { pageConfig, workerConfig, maintenances }
