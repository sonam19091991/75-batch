//RBI -- Provide guidelines to all banks
abstract class Bank {
    abstract credit(): void;
    abstract debit(): void;
}
//HDFC -- Provide implementation
class HDFC extends Bank {
    credit(): void {
        console.log("HDFC credit");
    }
    debit(): void {
        console.log("HDFC debit");
    }
}
//ICICI -- Provide implementation
class ICICI extends Bank {
    credit(): void {
        console.log("ICICI credit");
    }
    debit(): void {
        console.log("ICICI debit");
    }
}
let hd = new HDFC();
hd.credit();
hd.debit();
console.log("***************");
let ic = new ICICI();
ic.credit();
ic.debit();