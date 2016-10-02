$(function() {
    var tip = 0;
    var total = 0;
    
    function tipCalculator(billAmount, tipRate) {
        tip = billAmount * (tipRate/100);
        total = billAmount + tip;
        
        $("p").text("The tip is $" + tip.toFixed(2) + " and the total due is $" + total.toFixed(2) + ".");
    }
    
    $("button").on("click", function(evt) {
        evt.preventDefault();
        var billAmount = $("#billAmount").val();
        billAmount = parseFloat(billAmount);
        var tipRate = $("#tipRate").val();
        tipRate = parseFloat(tipRate);
        tipCalculator(billAmount, tipRate);
    });
    
});