import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderEntity } from 'src/app/order-entity';
import { OrderEntityService } from '../order-entity.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  orderId: number;
  totalPrice: number;
  orderPlan: string;
  orderToView: OrderEntity;

  retrieveOrderError: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderEntityService: OrderEntityService) {
    this.retrieveOrderError = false;
    // this.orderEntityService.setCurrentOrderEntity(this.orderToView);
  }

  ngOnInit() {
    this.orderId = parseInt(this.activatedRoute.snapshot.paramMap.get('orderId'));
    console.log("***SUCCESPAGE***");
    console.log("***orderId : " + this.orderId + "****");
    this.getOrder();

    // console.log("order retrieved : $" + this.order.orderId);
    // console.log(this.orderToView);
  }

  getOrder() {
    console.log("ORDER ID : " + this.orderId);
    this.orderEntityService.getOrderByOrderId(this.orderId).subscribe(
      response => {
        this.orderToView = response.orderEntity;
        this.totalPrice = response.orderEntity.totalPrice;
        console.log(response.orderEntity.totalPrice);
        console.log(response.orderEntity);
      }, error => {
        this.retrieveOrderError = true;
        console.log("**** Success error")
      }
    )
    console.log("Can get the order");
    // console.log("order retrieved : $" + this.order.orderId);
  }

  test() {
    console.log(this.orderToView.totalPrice);
    console.log(this.totalPrice);
    console.log(this.orderToView.genderPreference);
  }

  home() {
    this.router.navigate(["/home"]);
  }

  directToUnassignedJobs() {
    this.router.navigate(["/viewAllOrders/pendingOrder"]);
  }








}
