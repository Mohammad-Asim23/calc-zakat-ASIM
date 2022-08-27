function getValue(id) {
    var value = document.getElementById(id).value;
    if (value == "" || isNaN(value)) {
        return 0;
    }
    else {
        return parseFloat(value);
    }
}

function calculate() {
    var amt_nisaab = 88927;
    var amt_gold = getValue("gold-value");
    var amt_silver = getValue("silver-value");
    var amt_home = getValue("cash");
    var amt_bank = getValue("bank-cash");
    var amt_assests = getValue("real-estate");
    var amt_liabilities = getValue("liabilities");

    amt_gold = amt_gold * 12300;
    amt_silver = amt_silver * 133.48;

    var amt_net = (amt_gold + amt_silver + amt_home + amt_bank + amt_assests) - amt_liabilities;
    var amt_eligable = 0;

    if (amt_net > amt_nisaab) {
        amt_eligable = Math.ceil(amt_net)
    }

    var amt_zakat = Math.ceil(amt_eligable * 0.025);
    document.getElementById("displayresult").value = "Rs " + amt_zakat;

}