function calculateTotalPrice(){
    var price = document.getElementById('priceInput').value;
    var quantity = document.getElementById('quantityInput').value;
    var gst = document.getElementById('gstInput').value;
    var delivery_charge = document.getElementById('deliveryChargeInput').value;
    var sub_total = price * quantity;
    var total_amount = +sub_total + +gst + +delivery_charge;
    document.getElementById('total-price').innerHTML = total_amount;
}

var invoicePrint = function () {
    setTimeout(function () {
    window.print();
    }, 500);
}