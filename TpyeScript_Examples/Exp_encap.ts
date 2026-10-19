class Encapsulation {
     //Data Types & Varibales
     institutename : string = "Suresh IT Academy";
     location : string = "ameerpet";
     city : string = "Hyderabad";
     //Method
     student(){
        console.log(this.institutename);
        console.log(this.location);
        console.log(this.city);
     }
}
let st = new Encapsulation();
st.student();