import {TreeElementName} from './tree-element/tree-element-name';

export class TreeItem {

  constructor(
    public name: string,
    public elements: TreeElementName[],
    public collapsed = true,
    public $selectedChild = ''
  ) {}
}

export enum TreeItemIcon {
  CARET_ICON_RIGHT = <any> 'fa fa-caret-right',
  CARET_ICON_DOWN = <any> 'fa fa-caret-down',
  FOLDER_ICON = <any> 'fa fa-folder',
  FOLDER_ICON_OPEN = <any> 'fa fa-folder-open'
}
