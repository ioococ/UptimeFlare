const pageConfig = {
  // Title for your status page
  title: "Onei's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/ioococ', label: 'GitHub' },
    { link: 'https://magician.onei.moe/', label: 'Blog' },
    { link: 'mailto:cheerupi@outlook.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    "🌐 Public (example group name)": ['foo_monitor', 'bar_monitor', 'more monitor ids...'],
    "🔐 Private": ['test_tcp_monitor'],
  },
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'onei_moe',
      // `name` is used at status page and callback message
      name: 'onei_moe',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://onei.moe',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://onei.moe',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
      body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      responseForbiddenKeyword: 'bad gateway'
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'qbittorrent',
      // `name` is used at status page and callback message
      name: 'qbittorrent',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://onei.moe/qbittorrent/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://onei.moe/qbittorrent/',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
      body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      responseForbiddenKeyword: 'bad gateway'
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

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
