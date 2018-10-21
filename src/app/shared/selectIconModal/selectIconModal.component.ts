import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../../shared/delay';
import { Icon } from '../models/icon.model';
import { Package } from '../models/package.model';

@Component({
  selector: 'mdi-select-icon-modal',
  templateUrl: './selectIconModal.component.html'
})
export class SelectIconModal {
  @Input() packageId: string;
  @Input() selectedIcon: Icon = null;
  @ViewChild('issueNumberInput') issueNumberInput: ElementRef;

  constructor(public activeModal: NgbActiveModal) {}

  public selectedPackage: Package = null;

  async ngOnInit() {
    await delay();
    this.issueNumberInput.nativeElement.focus();
  }

  selectIcon() {
    
  }

  save($event) {
    this.activeModal.close(this.selectedIcon);
    if ($event) {
      $event.preventDefault();
    }
  }

  clear() {
    this.activeModal.close(null);
  }
}