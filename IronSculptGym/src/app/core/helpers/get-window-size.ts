import { ScreenEnum } from "../enums/screen";
import { WindowService } from "../services/window/window.service";

export const getWindowSizes = (windowService: WindowService): string => {
    if (windowService.laptop()) return ScreenEnum.laptop;
    if (windowService.mobile()) return ScreenEnum.mobile;
    if (windowService.mobileSM()) return ScreenEnum.mobileSM;
    if (windowService.mobileXS()) return ScreenEnum.mobileXS;
    if (windowService.mobileS()) return ScreenEnum.mobileS;
    return 'default';
  };