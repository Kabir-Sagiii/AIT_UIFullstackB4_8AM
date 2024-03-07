/// <reference path="dummy.ts"/>
var Products;
(function (Products) {
    console.log(Products.a1.name);
})(Products || (Products = {}));
