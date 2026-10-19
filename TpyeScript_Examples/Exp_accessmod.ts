class ExpAccessMod {
    public institutename: string = "Suresh IT Academy";
    private area : string = "ameerpet";
    protected city : string = "Hyderabad";

    student() : void {
     console.log(this.institutename);   
     console.log(this.area);
     console.log(this.city);
    }
}
let obj = new ExpAccessMod();
console.log(obj.institutename);
console.log(obj.area); //area is private so it will give error
console.log(obj.city); //city is protected so it will give error