import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  id$: string;

  constructor( private api: DataService, private route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      this.id$ = params.id
    })
  }
  ngOnInit() {
    const { id$ } = this;
    this.api.getUser(id$).subscribe(response => {
        this.user$ = response
    });
  }

}
