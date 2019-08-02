import { Component, OnInit } from '@angular/core';
import { UploadModel } from '../models/upload/upload.model';
import { UploadService } from '../shared/upload.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  currentUpload: UploadModel;
  dropzoneActive = false;

  constructor(private uploadService: UploadService) {

  }

  ngOnInit() {
  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }


  handleDrop(fileList: FileList) {
    const filesIndex = _.range(fileList.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new UploadModel(fileList[idx]);
      this.uploadService.pushUpload(this.currentUpload);
    });
  }

}
