interface ConfigIds {
  pc: string,
  sp: string
}

interface CustomVar {
  customVar: [string]
}

interface ConfigFields {
  cookieDomain?: string,
  cookieExpires?: number,
  customVar?: CustomVar,
  overrideUrl?: string,
}

declare namespace USERDIVETracker {
  interface ud {
    (command: 'create', trackingId: string, config?: ConfigFields): void
    (command: 'create', trackingIds: ConfigIds, config?: ConfigFields): void
    (command: 'setCustomVar', customVar: CustomVar): void
    (command: 'changeVirtualUrl', url: string): void
  }
}

declare var ud: USERDIVETracker.ud
