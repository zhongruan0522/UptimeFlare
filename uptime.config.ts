import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '检查服务': ['my_website', 'chat_website','chat2_website','api_website','tkapi_website'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
    {
      id: 'my_website',
      name: '主页',
      method: 'GET',
      target: 'https://www.zxiaoruan.cn',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '主站监控',
      statusPageLink: 'https://www.zxiaoruan.cn',
    },
    {
      id: 'api_website',
      name: 'ZAPI',
      method: 'GET',
      target: 'https://zapi.zxiaoruan.cn',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'ZAPI监控',
      statusPageLink: 'https://zapi.zxiaoruan.cn',
    },
    {
      id: 'chat_website',
      name: 'Open-WebUI',
      method: 'GET',
      target: 'https://zhongruan-openwebui.hf.space/health',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'chat监控',
      statusPageLink: 'https://zhongruan-openwebui.hf.space/health',
    },{
      id: 'tkapi_website',
      name: 'TKAPI',
      method: 'GET',
      target: 'https://tk.zxiaoruan.cn',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'TK API',
      statusPageLink: 'https://tk.zxiaoruan.cn',
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
