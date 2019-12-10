import { Injectable } from '@angular/core';
import { PopoverConfigurationHandler } from 'edc-popover-ng';

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

  getIcon() {
    return 'fa-question-circle-o';
  }

  isAppendToBody(): boolean {
    return true;
  }

  getI18nPath(): string {
    return '';
  }
}
