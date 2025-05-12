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
    '主站基础服务': ['my_website', 'chat_website'],
    'API服务': ['api_website', 'api2_website', 'tkapi_website', 'tkapi2_website'],
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
    target: 'http://38.246.237.219:8080/health',
    expectedCodes: [200],
    timeout: 10000,
    tooltip: 'chat监控',
    statusPageLink: 'http://38.246.237.219:8080/health',
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
  },{
    id: 'tkapi2_website',
    name: 'tkapi2',
    method: 'GET',
    target: 'https://zgjyzx.zxiaoruan.cn',
    expectedCodes: [200],
    timeout: 10000,
    tooltip: 'zgjyzx-TokenAPI监控',
    statusPageLink: 'https://zgjyzx.zxiaoruan.cn',
  },
],
    notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    // appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: 'mailtos://resend:re_G1Cqqbdk_KkhgBC6hsR9Doa3gLBMq1Ygv@smtp.resend.com:465?from=status@zxiaoruan.cn',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    skipNotificationIds: ['foo_monitor', 'bar_monitor'],
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
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
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
  }, {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['chat_website'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: '服务器域名崩溃',
    // Description of the maintenance, will be shown at status page
    body: '以下服务器正在修复中，如有影响请切换至对应的备用服务器',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2025-05-12T11:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2025-05-12T15:45:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'red',
  },
]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
