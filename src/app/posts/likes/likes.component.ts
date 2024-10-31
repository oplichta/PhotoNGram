import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
