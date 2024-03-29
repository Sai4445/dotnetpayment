import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service :PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail){
    this.service.formData= Object.assign({},selectedRecord);

  }
  onDelete(id:number){
    if(confirm('Are You sure to delete the record')){
      this.service.deletePaymentDetail(id)
      . subscribe(res=>{
        this.service.refreshList();
      },
        err=>{console.log(err)});
    }
    }


}
