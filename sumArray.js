
/*
  Problem Description
Given a number represented as an array of digits, 
increment the number by 1, and return the resulting sum as an array
Sample Input 1
3
1 1 1

Sample Output 1
1 1 2

Explanation
111 + 1 = 112

output should be array 
edge case   I/P : 9 9  O/P : 1 0 0
*/ 

function incrementNumber(N, A) {
    let carry = 0;
    
    for(let i = N-1 ;i>=0;i--){
        if(i == 0&&A[i] == 9){
           A[i] = 0;
           A.unshift(carry);
           return A;
        }
        if(A[i] == 9){
            A[i] = 0
            carry = 1
            
        }else{
            A[i] += 1;
            return A;
        }  
    }  
}