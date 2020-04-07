import { Component, OnInit } from '@angular/core'
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.component.html',
  styleUrls: ['./page-data.component.css']
})
export class PageDataComponent implements OnInit {
  newData: any[] = [];

  constructor(private dataService: ServiceService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.newData = data.data;
    });
  }
}
