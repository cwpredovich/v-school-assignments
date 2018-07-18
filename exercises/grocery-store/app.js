var proShopper = {
    name: 'Chris',
    groceryCart: ['Milk','Eggs','Bananas','Chicken Breasts','Tilapia'],
    budget: 150,
    cartValue: 0,
    preferPlasticBags: false,
    readyToCheckout: function (cartValue) {
        if (cartValue <= proShopper.budget) {
            console.log('You are within budget! Head to the checkstand!');
        } else {
            console.log('You are over budget! Put back the potato chips and ice cream!');
        }
    }
}



proShopper.readyToCheckout(140);