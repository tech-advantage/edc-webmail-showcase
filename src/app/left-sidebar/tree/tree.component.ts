import { Component } from '@angular/core';
import { localAccounts } from '../../email/emails-data';
import { TreeItem, TreeItemIcon } from './tree-item';
import { TreeElementName } from './tree-element/tree-element-name';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: [ './tree.less' ]
})
export class TreeComponent {

  treeContent = [
    new TreeItem(localAccounts[0], [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS, TreeElementName.NAME_TRASH]),
    new TreeItem(localAccounts[1], [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS])
  ];

  constructor(private readonly translateService: TranslateService) {
  }

  collapse(index: number) {
    this.treeContent[ index ].collapsed = !this.treeContent[ index ].collapsed;
  }

  getTitleCaretIcon(index: number) {
    if (this.treeContent[ index ].collapsed) {
      return TreeItemIcon.CARET_ICON_RIGHT;
    } else {
      return TreeItemIcon.CARET_ICON_DOWN;
    }
  }

  getTitleFolderIcon(index: number) {
    if (this.treeContent[ index ].collapsed) {
      return TreeItemIcon.FOLDER_ICON;
    } else {
      return TreeItemIcon.FOLDER_ICON_OPEN;
    }
  }

  selectedElement(treeItem: TreeItem): void {
    if (!this.treeContent || !this.treeContent.length) {
      return;
    }
    this.treeContent.forEach((content: TreeItem) => {
      if (content && content.name !== (treeItem && treeItem.name)) {
        content.$selectedChild = TreeElementName.NONE;
      }
    });
  }

  getLang(): string {
    return this.translateService.currentLang;
  }

}
