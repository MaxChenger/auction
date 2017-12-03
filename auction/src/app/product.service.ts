import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
  new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，学习angular的开始",["电子产品","硬件设备"]),
  new Product(2,"第二个商品",3.21,3.4,"这是第二个商品，学习angular的开始",["美妆","硬件设备"]),
  new Product(3,"第三个商品",2.12,4.0,"这是第三个商品，学习angular的开始",["产品","硬件设备"]),
  new Product(4,"第四个商品",1.99,3.9,"这是第四个商品，学习angular的开始",["电子","硬件设备"]),
  new Product(5,"第五个商品",5.89,4.6,"这是第五个商品，学习angular的开始",["珠宝","硬件设备"]),
  new Product(6,"第六个商品",1.24,4.2,"这是第六个商品，学习angular的开始",["服饰","硬件设备"])
]
  private comments: Comment[] = [
    new Comment(1,1,"2017-02-02 22:22:22","zqz",3,"东西不错"),
    new Comment(2,1,"2017-02-03 22:22:22","zqz",4,"东"),
    new Comment(3,1,"2017-02-04 22:22:22","zqz",4,"西"),
    new Comment(4,2,"2017-02-05 22:22:22","zqz",3,"不错"),
    new Comment(1,3,"2017-02-05 22:22:22","郑巧芝",4,"不错")
  ]
  constructor() {

  }
  getProducts(){
    return this.products;
  }
  getProduct(id:number){
    return this.products.find((product) => product.id == id);
  }
  getCommentForProductId(id:number){
  return this.comments.filter((comment:Comment) => comment.productId == id);
}
}
export class Product{
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}
