import { Component, OnInit } from '@angular/core';
import { CustomarsService } from 'src/app/core/services/customars.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allCustomers :any = []
  constructor(private customerServies:CustomarsService){}
ngOnInit(): void {
  this.customers()
}

  customers(){
    this.customerServies.getCustomers().subscribe({
      next:(res)=>{
        console.log(res)
        this.allCustomers = res
      },
      error:()=>{

      },complete:()=>{

      }

    })
  }

}
