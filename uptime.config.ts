import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '检查服务': ['chat_website','api_website'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [
   
    {
      id: 'api_website',
      name: 'ZAPI',
      method: 'GET',
      target: 'https://zhongruan-vo.hf.space',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'ZAPI监控',
      statusPageLink: 'https://zhongruan-vo.hf.space',
    },
    {
      id: 'chat_website',
      name: 'Open-WebUI',
      method: 'GET',
      target: 'https://zhongruan-openwebui.hf.space',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'chat监控',
      statusPageLink: 'https://zhongruan-openwebui.hf.space',
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
