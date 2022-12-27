/*
Sample Input 1
6
7 1 5 3 6 4

Sample Output 1
7

Explanation 1
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.

Again buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Total profit of 7.
*/
function bestTimeToBuyAndSellStocks(prices) {

    let profit = 0;
    for(let i = 1;i<prices.length;i++){
      if(prices[i]>prices[i-1]){
          profit += (prices[i] - prices[i-1]);
      }
    }
    return profit

}
bestTimeToBuyAndSellStocks([7,1,5,3,6,4]);