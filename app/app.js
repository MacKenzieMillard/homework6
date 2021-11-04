var PRODUCTS = [
    
    {
        productName: "Bug Spray",
        productThumbImg: "bugSpray_thumb.png",
        productFullImg: "bugSpray_full.png",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$5.99",
    },
    {
        productName: "Coat",
        productThumbImg: "coat_thumb.jpg",
        productFullImg: "coat_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$35.99",
    },
    {
        productName: "Cookware",
        productThumbImg: "cookware_thumb.jpg",
        productFullImg: "cookware_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$15.99",
    },
    {
        productName: "First Aid Kit",
        productThumbImg: "firstAid_thumb.jpg",
        productFullImg: "firstAid_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$8.99",
    },
    {
        productName: "Flashlight",
        productThumbImg: "flashlight_thumb.jpg",
        productFullImg: "flashlight_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$5.99",
    },
    {
        productName: "Lantern",
        productThumbImg: "lantern_thumb.jpg",
        productFullImg: "lantern_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$10.99",
    },
    {
        productName: "Portable Power Generator",
        productThumbImg: "portGenerator_thumb.jpg",
        productFullImg: "portGenerator_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$55.99",
    },
    {
        productName: "Sleeping Bag",
        productThumbImg: "sleepingBag_thumb.jpg",
        productFullImg: "sleepingBag_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$25.99",
    },
    {
        productName: "Tent",
        productThumbImg: "tent_thumb.jpeg",
        productFullImg: "tent_full.jpeg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$65.99",
    },
    {
        productName: "Toiletries",
        productThumbImg: "toiletries_thumb.jpg",
        productFullImg: "toiletries_full.jpg",
        productBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, libero.",
        productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eveniet voluptatem rerum suscipit nam minima deleniti, modi similique molestiae quaerat ad, reiciendis tenetur? Officia.",
        productPrice: "$12.99",
    },   
];

// lets JS use data from JSON for gallery-page
function loadData() {
    $.each(PRODUCTS, function(index, product){
        $("#app").append(
            `<div id="${index}" class="product-holder">
    <h4>${product.productName}</h4>
    <div class="product-image">
      <img src="images/product_thumb/${product.productThumbImg}" alt="${product.productName}" />
    </div>
      <div class="brief-des">
        ${product.productBriefDescription}
      </div> 
  </div>`);
    });
    
    initListeners();
}

// this is to switch the page from the gallery-page to individual product pages.
function initListeners() {
    

    $(".product-holder").click(function(e) {
        let productIndex = e.currentTarget.id;
        console.log(productIndex);
        $("#app").html(
            `<div class="full_product">
        <h4>${PRODUCTS[productIndex].productName}</h4>
        <div class="full_image">
          <img src="images/product_full/${PRODUCTS[productIndex].productFullImg}" alt="${PRODUCTS[productIndex].productName}" />
        </div>
        <div class="full_des">
        ${PRODUCTS[productIndex].productDescription}
        </div>
        <div class="product_price">${PRODUCTS[productIndex].productPrice}</div>
        <div class="close">CLOSE</div>
        </div>`);

        addCloseListener();
    });
}

// this is to return to gallery-page from the individual product pages using the close button
function addCloseListener() {
    $(".close").click(function() {
        $("#app").html("");
        loadData();
    })
}

$(document).ready(function () {
    loadData();
});