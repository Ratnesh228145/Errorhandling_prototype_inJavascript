function filterBycategory(products){
    return function(category){
        return products.filter(function(product){
            return product.category===category;
        });
    };
}

//expected output
var products=[
    {name:"shirt", category:"clothing"},
    {name:"pants", category:"clothing"},
    {name:"hat", category:"Accessories"},
    {name:"sunglasses", category:"Accessories"},
];
var clothingproducts=filterBycategory(products)("clothing");
console.log(clothingproducts);