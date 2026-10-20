class Solution {
     hasDuplicate(num){
          if(!num?.length || num?.length > 10**5) return false;

          const a = new Set();

          for ( let i = 0 ; i <= num.length ; i = i+1)
          {
               if(a.has(num[i])){
                    return true;  
               }
               a.add(num[i]);
          }
          return false

     }
}