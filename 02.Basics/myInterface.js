// demonstrating two ways of defining a function in an interface
// 1. startTrial: () => string;
// 2. startTrial(): string;
var sanjay = {
    dbId: 1,
    email: "sanjay@gmail.com",
    userId: 101,
    startTrial: function () { return "Trial Started"; },
    getCoupon: function () {
        return 10;
    },
};
console.log(sanjay.getCoupon("10OFF", 12));
