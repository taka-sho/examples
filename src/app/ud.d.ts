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
  type Command = 'create'
  type SetCustomVar = 'setCustomVar'
  type ChangeVirtualUrl = 'changeVirtualUrl'
  interface USERDIVEObject {
    (command: Command, trackingId: string, config?: ConfigFields): void
    (command: Command, trackingIds: ConfigIds, config?: ConfigFields): void
    (command: SetCustomVar, customVar: CustomVar): void
    (command: ChangeVirtualUrl, url: string): void
  }
}
