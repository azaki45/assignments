/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];
  let freq = new Map();
  for (let i = 0; i < transactions.length; i++) {
    if(freq.has(transactions[i].category)) continue;
    freq.set(transactions[i].category, 0);
  }
  for (let i = 0; i < transactions.length; i++) {
    freq.set(transactions[i].category, freq.get(transactions[i].category) + transactions[i].price);
  }

  for (let [key, value] of freq) {
    let temp = {
      category : key,
      totalSpent : value
    }
    result.push(temp);      
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
