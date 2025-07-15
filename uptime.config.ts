import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "zhongruan's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
    { link: 'mailto:zhongruan@zxiaoruan.cn', label: 'Email Me', highlight: true },
  ],
  group: {
    '主服务': ['www_website','Open-WebUI','API'],
    '服务器': ['vps','Open-WebUI','API'],
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
        {
      id: 'vps',
      name: 'vps',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '154.201.91.61',
      tooltip: 'vps',
      statusPageLink: '',
      timeout: 5000,
    },
  ],
  notification: {
    appriseApiServer: "apprise.zxiaoruan.cn/notify",
    recipientUrl: "mailtos://admin@zxiaoruan.cn:re_G1Cqqbdk_KkhgBC6hsR9Doa3gLBMq1Ygv@zxiaoruan.cn:465?smtp=smtp.resend.com&user=resend&from=admin@zxiaoruan.cn&to=2218348498@qq.com&mode=ssl",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
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
  },{
    monitors: ['www_website'],
    title: '服务迁移',
    body: '服务迁移',
    start: '2025-07-15T14:00:00+08:00',
    end: '2025-07-15T16:00:00+08:00',
    color: 'red',
  },
]
export { pageConfig, workerConfig, maintenances }
