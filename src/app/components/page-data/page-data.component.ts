import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.component.html',
  styleUrls: ['./page-data.component.css'],
})
export class PageDataComponent implements OnInit {
  newData: any[] = [];

  constructor(private dataService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.newData = data;
    });
  }
  showDetail(idx: number) {
    this.router.navigate(['/detail-page', idx]);
  }
}
