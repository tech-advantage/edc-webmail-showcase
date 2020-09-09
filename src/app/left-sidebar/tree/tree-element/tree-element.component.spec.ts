import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TreeElementComponent } from './tree-element.component';
import { TreeItem } from '../tree-item';
import { TreeElementName } from './tree-element-name';

describe('TreeElementComponent', () => {
  let component: TreeElementComponent;
  let treeItem: TreeItem;
  let selectedElement: string;
  let fixture: ComponentFixture<TreeElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeElementComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    treeItem = new TreeItem('myEmail@abc.com', [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS, TreeElementName.NAME_TRASH]);
    component.treeItem = treeItem;
    selectedElement = TreeElementName.NAME_INBOX.toString();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Runtime', () => {


    beforeEach(() => {
      treeItem = new TreeItem('myEmail@abc.com', [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS, TreeElementName.NAME_TRASH]);
      component.treeItem = treeItem;
      selectedElement = TreeElementName.NAME_INBOX.toString();
    });

    describe('selectElement()', () => {

      beforeEach(() => {
        treeItem = new TreeItem('myEmail@abc.com', [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS, TreeElementName.NAME_TRASH]);
        component.treeItem = treeItem;
        selectedElement = TreeElementName.NAME_INBOX.toString();
      });

      it('should set the selected element value to tree item $selectedChild attribute', () => {
        expect(component.treeItem.$selectedChild).toEqual('');
        spyOn(component.selectedElement, 'emit');

        component.selectElement(treeItem, selectedElement);

        expect(component.treeItem.$selectedChild).toEqual(TreeElementName.NAME_INBOX.toString());
        expect(component.selectedElement.emit).toHaveBeenCalledWith(treeItem);
      });
    });

    describe('isElementSelected()', () => {

      beforeEach(() => {
        treeItem = new TreeItem('myEmail@abc.com', [TreeElementName.NAME_INBOX, TreeElementName.NAME_DRAFTS, TreeElementName.NAME_TRASH]);
        component.treeItem = treeItem;
        selectedElement = TreeElementName.NAME_INBOX.toString();
      });

      it('should return true if element is selected', () => {
        component.treeItem.$selectedChild = selectedElement;

        const selected = component.isElementSelected(treeItem, selectedElement);

        expect(selected).toBeTruthy();
      });

      it('should return false if element is selected', () => {
        component.treeItem.$selectedChild = selectedElement;

        const selected = component.isElementSelected(treeItem, TreeElementName.NAME_DRAFTS.toString());

        expect(selected).toBeFalsy();
      });
    });

  });
});

