class overload {
    //method intialization can be multiple
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    //method implementation should be single
    add(a: any, b: any): any {
        return a + b;
    }
}
let obj = new overload();
console.log(obj.add(10, 20));
console.log(obj.add("Suresh IT", "Academy"));