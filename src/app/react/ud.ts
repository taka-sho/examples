/// <reference path="../ud.d.ts" />

declare var ud: USERDIVETracker.ud

export default class Tracker {
  change (url: string) {
    ud('changeVirtualUrl', url)
  }
  public changeVirtualUrl () {
    if (/#\/about/.test(location.href)) {
      this.change('http://uncovertruth.github.io/examples/t/virtualurl.html?about=1')
      return
    }
    this.change('http://uncovertruth.github.io/examples/t/virtualurl.html?default=1')
  }
}
