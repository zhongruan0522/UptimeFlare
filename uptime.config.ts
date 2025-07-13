import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '检查服务': ['Open-WebUI','API','www_website'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
   
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
      tooltip: 'WWWW监控',
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
const maintenances: MaintenanceConfig[] = [
]
export { pageConfig, workerConfig, maintenances }
