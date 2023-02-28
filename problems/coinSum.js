// "You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin."															

//SOLUTION EXPLANATION
// The coinChange function takes two parameters: an array of coin denominations and a total amount of money. The function returns the fewest number of coins needed to make up that amount, or -1 if it's not possible.

// The function uses dynamic programming to solve the problem. It creates an array dp of length amount + 1 and initializes all its values to Infinity, except for dp[0] which is set to 0 (it takes 0 coins to make up 0 amount). Then it iterates through all amounts from 1 to amount and for each amount, it iterates through all coin denominations. If the coin denomination is less than or equal to the current amount, it computes the minimum number of coins needed to make up that amount by either using the current coin or not using it. The result is stored in dp[i]. Finally, the function returns dp[amount] if it's not Infinity, or -1 otherwise.
// function coinChange(coins, amount) {
//     const dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0;
    
//     for (let i = 1; i <= amount; i++) {
//       for (let j = 0; j < coins.length; j++) {
//         if (coins[j] <= i) {
//           dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
//         }
//       }
//     }
    
//     return dp[amount] === Infinity ? -1 : dp[amount];
//   }

  function coinChange(coins, amount) {
    // Initialize an array dp of length amount + 1, and fill it with Infinity
    // (except for dp[0], which is 0).
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    // Iterate through all amounts from 1 to amount.
    for (let i = 1; i <= amount; i++) {
      // For each amount, iterate through all coin denominations.
      for (let j = 0; j < coins.length; j++) {
        // If the current coin denomination is less than or equal to the current amount,
        // compute the minimum number of coins needed to make up that amount by either
        // using the current coin or not using it, and store the result in dp[i].
        if (coins[j] <= i) {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
  
    // Return dp[amount] if it's not Infinity, or -1 otherwise.
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
 console.log(coinChange([1,2,5], 11));