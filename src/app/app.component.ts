import { Component, OnInit} from '@angular/core';
import { CustomerService } from './core/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dewei-home';
  homeSite;
  constructor(
    private customerService: CustomerService
  ){}

  ngOnInit(){
    this.customerService.getHomeSiteInfo().subscribe(site =>{
      this.homeSite = site;
    })
  }
}
