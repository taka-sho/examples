/// <reference path="../ud.d.ts" />

declare var ud: USERDIVETracker.USERDIVEObject

export default class Tracker {
  getUrl (): string {
    const origin: string = 'http://uncovertruth.github.io'
    if (/#\/about/.test(location.href)) {
      return `${origin}/examples/t/virtualurl.html?about=1`
    }
    return `${origin}/examples/t/virtualurl.html?default=1`
  }
  public changeVirtualUrl (): void {
    if (!ud) {
      return
    }
    ud('changeVirtualUrl', this.getUrl())
  }
}
