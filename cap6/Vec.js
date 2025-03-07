class Vec {
    constructor(x, y) {
        this.y = y;
        this.x = x;
    }
    plus(vec){return new Vec(vec.x + this.x, vec.y + this.y)}
    minus(vec){return new Vec(this.x - vec.x,this.y - vec.y)}

    get long (){ return Math.sqrt(this.x * this.x + this.y * this.y)}    
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).long);