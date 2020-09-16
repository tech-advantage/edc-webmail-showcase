import { TreeComponent } from './tree.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TreeItemIcon } from './tree-item';
import { mockServices } from '../../utils/test-helper';
import { TranslateService } from '@ngx-translate/core';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeComponent],
      providers: [
        mockServices(TranslateService)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Runtime', () => {

    describe('collapse()', () => {

      it('should change collapse value', () => {
        expect(component.treeContent[0].collapsed).toBeTruthy();

        component.collapse(0);

        expect(component.treeContent[0].collapsed).toBeFalsy();
      });
    });

    describe('getTitleCaretIcon()', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(TreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should return caret right icon if tree-item is collapsed', () => {
        expect(component.treeContent[0].collapsed).toBeTruthy();

        const iconCss = component.getTitleCaretIcon(0);

        expect(iconCss).toEqual(TreeItemIcon.CARET_ICON_RIGHT);
      });

      it('should return caret down icon if tree-item is not collapsed', () => {
        component.treeContent[0].collapsed = false;

        const iconCss = component.getTitleCaretIcon(0);

        expect(iconCss).toEqual(TreeItemIcon.CARET_ICON_DOWN);
      });
    });

    describe('getTitleFolderIcon()', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(TreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should return Folder icon if tree-item is collapsed', () => {
        expect(component.treeContent[0].collapsed).toBeTruthy();

        const iconCss = component.getTitleFolderIcon(0);

        expect(iconCss).toEqual(TreeItemIcon.FOLDER_ICON);
      });

      it('should return Open folder icon if tree-item is not collapsed', () => {
        component.treeContent[0].collapsed = false;

        const iconCss = component.getTitleFolderIcon(0);

        expect(iconCss).toEqual(TreeItemIcon.FOLDER_ICON_OPEN);
      });
    });

  });
});

