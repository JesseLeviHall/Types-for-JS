// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages:[] = []; 


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array. the top level array should be numbers and the nested array should be the type of strings.

const gameBoard: (number | string[])[] = [
  1,2,4,5,6,7,5,
  ['then a', 'string', 'array']
];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
}


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
  return products.reduce((acc, {price}) => acc + price, 0);
}