/* const ageCheck = function (number) {
  if (number >= 18) {
    return true;
  } else {
    return false;
  }
};

// console.log(ageCheck(19));

const ageCheck2 = function (number) {
  const ageResult = ageCheck(number);
  if (ageResult == true) {
    return "Hello There";
  } else {
    return "Hey Kiddo";
  }
};

console.log(ageCheck2(17)); */



/* const vat = 0.21;
let basePrice = 1000;
const calculateVat = function (numbers) {

    const sum = basePrice * vat;
    return sum;    
};

console.log(calculateVat());

const priceInclVat = function (numbers) {

const totaal = calculateVat() + basePrice ;
    console.log(totaal); 

}

priceInclVat();
 */
let priceIncludingVat = 1210;
const vatPercentage = 1.21;

const calcPriceWithoutVat = function (numbers) {

   const basePrice = priceIncludingVat / vatPercentage;
   return basePrice;
};

const calcVatAmount = function (numbers) {

   const  vatAmount = priceIncludingVat - priceIncludingVat / vatPercentage;
   const  priceWithoutVat = priceIncludingVat - vatAmount;
      return vatAmount;
      
}

console.log("Vat Amount =",calcVatAmount(),"Baseprice =",calcPriceWithoutVat());

