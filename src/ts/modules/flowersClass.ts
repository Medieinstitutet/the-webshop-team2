export class Flowers {
    quantity:number;
    constructor (
        public img:string, 
        public title:string,
        public info:string,
        public productinfo:string,
        public price:number,
        public id:number
    ){
        this.quantity = 0;
    }
}