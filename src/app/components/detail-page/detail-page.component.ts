import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  detail: any = {};
  indice: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: ServiceService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.indice = params['id'];
    });

    this.dataService.getData().subscribe((data: any) => {
      this.detail = data[this.indice];
    });
  }
  ngOnInit(): void {}
}
