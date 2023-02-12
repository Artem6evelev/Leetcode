/* 
You are given an integer array prices where prices[i] 
is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. 
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

//* Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
//* Example 2: 
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
//* Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

Constraints:
1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/

let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = (prices) => {
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) maxprofit += prices[i] - prices[i - 1];
  }
  return maxprofit;
};

console.log("maxProfit", maxProfit(prices));

/* 
This code defines a JavaScript function maxProfit that calculates the 
maximum profit that can be made by buying and selling a stock.
The function takes an array prices as input, which represents the 
prices of a stock at different times. The function then calculates the 
maximum profit that can be made by buying and selling the stock by 
iterating through the prices array and checking if the price at the current 
time (prices[i]) is greater than the price at the previous 
time (prices[i-1]). If it is, the difference between the 
two prices (prices[i] - prices[i - 1]) is added to the maxprofit variable.
At the end of the loop, the maxprofit variable will contain the 
maximum profit that can be made by buying and selling the stock. 
The function returns the maxprofit variable as its result.
Note that this code assumes that you can only make one buy and one 
sell and that you must buy before you can sell.
*/
