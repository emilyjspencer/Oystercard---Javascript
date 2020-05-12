class OysterCard {
    constructor(balance) {
        this.balance = 0;
    }

    topup(amount) {
      return this.balance += amount;
    }
}
