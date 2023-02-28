// "Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0."									


//SOLUTION EXPLANATION
// The maxProfit function takes an array of prices as input and returns the maximum profit that can be made by buying and selling a single stock.

// The algorithm works by iterating through the prices array and keeping track of the minimum price seen so far (minPrice) and the maximum profit that can be made if we sell the stock at the current price (maxProfit). If we see a new minimum price, we update minPrice. If we see a new price that would result in a higher profit than the current maximum, we update maxProfit.
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
    
    return maxProfit;
    //TC: The time complexity of this algorithm is O(n), where n is the number of prices in the input array.
    //SC: The space complexity of this algorithm is O(1), which means it uses a constant amount of extra space regardless of the size of the input array.
  }

const prices = [7,6,4,3,1];
console.log(maxProfit(prices));