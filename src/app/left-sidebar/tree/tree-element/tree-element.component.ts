import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TreeItem} from '../tree-item';
import { TreeElementName } from './tree-element-name';


@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: [ './tree-element.less' ]
})
export class TreeElementComponent {

  @Input() treeItem: TreeItem | undefined;
  @Output() selectedElement = new EventEmitter<TreeItem>();

  selectElement(parent: TreeItem, elementName: TreeElementName): void {
    if (parent) {
      parent.$selectedChild = elementName;
      this.selectedElement.emit(parent);
    }
  }

  isElementSelected(parent: TreeItem, elementName: TreeElementName): boolean {
    return !!parent && !!elementName && parent.$selectedChild === elementName;
  }
}
