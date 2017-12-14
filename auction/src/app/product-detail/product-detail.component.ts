///<reference path="../../../node_modules/@angular/router/src/router_state.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,ProductService,Comment} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  comments: Comment[];
  isCommentHidden:boolean = true;
  newRating:number = 0;
  newComment:string = "";
  constructor(private routeInfo: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentForProductId(productId);
  }
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toISOString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);

    this.newComment = null;
    this.newRating = 0;
    this.isCommentHidden = true;
  }
}
