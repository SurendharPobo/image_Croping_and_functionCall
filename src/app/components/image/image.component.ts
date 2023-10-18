import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  width!: any;
  height!: number;
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  imageChangedEvent: any = '';
  croppedImage: any;
  constructor(private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = this._sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
  this.width = event.width;
  this.height = event.height;
  this.x1 = event.cropperPosition.x1;
  this.x2 = event.cropperPosition.x2;
  this.y1 = event.cropperPosition.y1;
  this.y2 = event.cropperPosition.y2;
  // event.blob can be used to upload the cropped image
}
imageLoaded(image: LoadedImage) {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
             
}
