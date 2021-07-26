export class DeviceDetector {
    static deviceInfo = null;

    constructor() { }

    static getDeviceInfo() {
      return this.deviceInfo;
    }

    static setDeviceInfo(info) {
      this.deviceInfo = info;
    }
}
