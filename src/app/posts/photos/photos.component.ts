import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() source?: string;

  constructor() {}

  ngOnInit(): void {}
}
