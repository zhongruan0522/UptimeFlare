import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '服务器': ['www_website','vps2'],
    '公益应用': ['gyapi'],
    '应用': ['Open-WebUI','API'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
      {
      id: 'gyapi',
      name: 'gyapi',
      method: 'GET',
      target: 'https://api.zhongruanapi.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '公益API站',
      statusPageLink: 'https://api.zhongruanapi.dpdns.org/',
     },
     {
      id: 'vps2',
      name: 'vps2',
      method: 'GET',
      target: 'https://zhongruanapi.dpdns.org/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '2+4-服务器香港-7元',
      statusPageLink: 'https://zhongruanapi.dpdns.org/',
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
      name: 'WWW',
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
    title: '升级中',
    body: '部分服务正在升级系统',
    start: '2025-07-15T09:00:00+08:00',
    end: '2025-07-15T10:00:00+08:00',
    color: 'red',
  }
]
export { pageConfig, workerConfig, maintenances }
