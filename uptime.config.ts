import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "zhongruan's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'https://www.zxiaoruan.cn/', label: 'Blog' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '主站基础服务': ['my_website', 'chat_website','chat2_website'],
    'API服务': ['api_website', 'api2_website', 'tkapi_website'],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
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
      target: 'https://chat.zxiaoruan.cn/health',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'chat监控',
      statusPageLink: 'https://chat.zxiaoruan.cn/health',
    },
    {
      id: 'chat2_website',
      name: 'Open-WebUI',
      method: 'GET',
      target: 'https://zhongruan-openwebui.hf.space/health',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'chat2监控',
      statusPageLink: 'https://zhongruan-openwebui.hf.space/health',
    },{
      id: 'api2_website',
      name: 'ZAPI2',
      method: 'GET',
      target: 'https://wemrltszkrvg.sealosbja.site',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'ZAPI2监控',
      statusPageLink: 'https://wemrltszkrvg.sealosbja.site',
    },{
      id: 'tkapi_website',
      name: 'tkapi',
      method: 'GET',
      target: 'https://tk.zxiaoruan.cn',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'TokenAPI监控',
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
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['api_website'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '服务器迁移升级中',
    // Description of the maintenance, will be shown at status page
    body: '以下服务器正在迁移升级中，如有影响请切换至对应的备用服务器',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2025-05-11T15:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2025-05-11T15:45:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },{
    monitors: ['my_website','chat_website','tkapi_website'],
    title: '服务器迁移',
    body: '以下服务正在进行迁移，部分服务提供备用服务器',
    start: '2025-05-17T08:00:00+08:00',
    end: '2025-05-17T22:00:00+08:00',
    color: 'yellow',
  },
]
export { pageConfig, workerConfig, maintenances }
