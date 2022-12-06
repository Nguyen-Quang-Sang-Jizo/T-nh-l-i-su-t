class Customer {
    constructor(name, deposits, duration) {
        this.name = name;
        this.deposits = deposits;
        this.duration = duration;
    }

    names() {
        return this.name;
    }

    interestRate() {
        let rate = 0;
        switch (this.duration) {
            case 6:
                rate = 7.5 / 100;
            case 12:
                rate = 8 / 100;
                break;
            case 24:
                rate = 8.5 / 100;
                break;
            default:
                rate = 0.1;
        }
        return rate;
    }

    interest() {
        return this.interestRate() * this.deposits / 12 * this.duration;
    }

    totalMoney() {
        return this.interest() + this.deposits;
    }
}

let output = new Customer("Nguyen Quang Sang", 120000000, 48);
console.log(output.names())
console.log(output.interestRate());
console.log(output.interest())
console.log(output.totalMoney())