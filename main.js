// Populate dropdowns with products
// Load products for Amazon (data1.js)
for (var i = 1; i < product1.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product1[i].title}</option>
    `;
}

// Load products for Flipkart (data2.js)
for (var i = 1; i < product2.length; i++) {
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product2[i].title}</option>
    `;
}

// Function for handling Amazon side product selection
function item1(a) {
    var select2 = document.getElementById("select2").value;

    // Show product details on Amazon side
    document.getElementById("img1").src = product1[a].image;
    document.getElementById("price1").innerHTML = " ₹ " + product1[a].price;
    document.getElementById("desc1").innerHTML = product1[a].description;
    document.getElementById("brand1").innerHTML = product1[a].brand;
    document.getElementById("buy1").href = product1[a].buy1;

    // If both sides have the same product, don't reset the other side
    if (select2 != a) {
        document.getElementById("img2").src = product2[select2] ? product2[select2].image : "";
        document.getElementById("price2").innerHTML = product2[select2] ? "₹ "+ product2[select2].price : "";
        document.getElementById("desc2").innerHTML = product2[select2] ? product2[select2].description : "";
        document.getElementById("brand2").innerHTML = product2[select2] ? product2[select2].brand : "";
        document.getElementById("buy2").href = product2[select2] ? product2[select2].buy2 : "#";
    }
}

// Function for handling Flipkart side product selection
function item2(a) {
    var select1 = document.getElementById("select1").value;

    // Show product details on Flipkart side
    document.getElementById("img2").src = product2[a].image;
    document.getElementById("price2").innerHTML = " ₹ " + product2[a].price;
    document.getElementById("desc2").innerHTML = product2[a].description;
    document.getElementById("brand2").innerHTML = product2[a].brand;
    document.getElementById("buy2").href = product2[a].buy2;

    // If both sides have the same product, don't reset the other side
    if (select1 != a) {
        document.getElementById("img1").src = product1[select1] ? product1[select1].image : "";
        document.getElementById("price1").innerHTML = product1[select1] ? "₹ " + product1[select1].price : "";
        document.getElementById("desc1").innerHTML = product1[select1] ? product1[select1].description : "";
        document.getElementById("brand1").innerHTML = product1[select1] ? product1[select1].brand : "";
        document.getElementById("buy1").href = product1[select1] ? product1[select1].buy1 : "#";
    }
}
