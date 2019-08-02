import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appFileDropDirective]'
})
export class FileDropDirectiveDirective {

  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() fileHovered = new EventEmitter();

  constructor() {
    console.log('directive initialized');
  }

  @HostListener('drop', ['$event'])
  ondrop($event) {
    $event.preventDefault();
    console.log('directive onDrop');
    // tslint:disable-next-line:prefer-const
    let transfer = $event.dataTransfer;
    console.log(transfer.files);
    this.filesDropped.emit(transfer.files);
    this.fileHovered.emit(false);
  }


  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    console.log('directive onDragOver');
    this.fileHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    console.log('directive onDragLeave');
    this.fileHovered.emit(false);
  }

}
