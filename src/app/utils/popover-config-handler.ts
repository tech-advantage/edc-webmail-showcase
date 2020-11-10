import { Injectable } from '@angular/core';
import { AnimationType, IEdcPopoverOptions, PopoverConfigurationHandler } from 'edc-popover-ng';

@Injectable()
export class PopoverConfigHandler implements PopoverConfigurationHandler {

  getPluginId(): string {
    return 'webmailmain'
  }

  getHelpPath(): string {
    return '/help';
  }

  getDocPath(): string {
    return '/doc';
  }

  getPopoverOptions(): IEdcPopoverOptions {
    return {
      animation: AnimationType.PERSPECTIVE_EXTREME
    };
  }

  getI18nPath(): string {
    return '';
  }
}
