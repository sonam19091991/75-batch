interface playwright {
    openApplication(): void;
    closeApplication(): void;
}
interface selenium {
    openApplication(): void;
    closeApplication(): void;
}
class Tester1_Chrome implements playwright, selenium {
    openApplication(): void {
        console.log("Tester1_Chrome openApplication");
    }
    closeApplication(): void {
        console.log("Tester1_Chrome closeApplication");
    }
}
class Tester2_Firefox implements playwright, selenium {
    openApplication(): void {
        console.log("Tester2_Firefox openApplication");
    }
    closeApplication(): void {
        console.log("Tester2_Firefox closeApplication");
    }
}
let t1 = new Tester1_Chrome();
t1.openApplication();
t1.closeApplication();
console.log("***************");
let t2 = new Tester2_Firefox();
t2.openApplication();
t2.closeApplication();