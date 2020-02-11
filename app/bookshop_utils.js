function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(firstName,lastName){
    return (firstName + " " + lastName);
}
function makeHalfPrice(price){
    return price/2;
}
function countBooks(a){
    return a.length;
}
function isInStock(itemName){
    if(itemName.quantity> 0)
    return true
    else
    return false
}
function outOfStock(itemName){
    if(itemName.quantity === 0)
    return false
    else
    return true
}
function getTotalOrderPrice(price,quantity){
    return (price * quantity) + (price * 0.2);
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    outOfStock,
    getTotalOrderPrice
};