// plandrime check
// let str="madams"
// let start=0
// let end=str.length-1
// while(start<end){
//     if(str[start]!==str[end]){
//         return false
//     }
//     start++
//     end --
// }
// console.log(true)


// vow,const

// let str="hello"
// let v=0
// let c=0

// for(let i =0;i<str.length;i++){
//     let ch=str[i].toLowerCase()
//      if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//                 v++;
//             } else {
//                 c++;
//             }

// }

// console.log(v,c)


// anagram//balance

// let s1 = "silent"
// let s2 = "listen"  
// let count = {}
// if (s1.length !== s2.length) {
//     console.log(false)
// } else {
//     for(let i = 0; i < s1.length; i++) {
//         count[s1[i]] = (count[s1[i]] || 0) + 1
//     }
//     let isAnagram = true
    
//     for(let j = 0; j < s2.length; j++) {
//         if(!count[s2[j]]) {
//             isAnagram = false
//             break  
//         }
//         count[s2[j]]--
//     }
//     if (isAnagram) {
//         for(let key in count) {
//             if (count[key] !== 0) {
//                 isAnagram = false
//                 break
//             }
//         }
//     }

//     console.log(isAnagram)
// }



// charchter occ

// let str="Deepa"
// let fre={}

// for(let i=0;i<str.length;i++){
//     let ch=str[i]
//     fre[ch]=(fre[ch]||0)+1
// }

// for(let j of fre){
//     console.log(j)
// }
// console.log(fre)


// longest word

// let str="i lovejjj python"
// let word=""
// let longest=""
// str+=" "

// for(let i=0;i<str.length;i++){
//     if(str[i]!==" "){
//         word+=str[i]
//     }
//     else{
//         if(word.length>longest.length){
//             longest=word
//         }
//         word=""
//     }
// }

// console.log(longest)


// remove duplicates

// let str="deepa"
// let dup=""

// for(let i of str){
//     if(!dup.includes(i)){
//         dup+=i
//     }
// }

// console.log(dup)







// array

// remove duplicates
// function removeDuplicates(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let found = false;

//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) result.push(arr[i]);
//     }

//     return result;
// }


// second largest ele
// let arr=[1,12,3,4,5]
// let first=arr[0]
// let second=arr[1]

// for(let i=2;i<arr.length;i++){
//     if(first<second){
//         let temp = first;
//         first = second;
//     second = temp;
//     }
//  else if (arr[i]>first){
//     second=first
//     first=arr[i]

//  }
//     else if (arr[i]>second && arr[i]!==first){
//         second=arr[i]
//     }

   
// }
// console.log(second)


// reverse array array (right)
// let arr=[1,2,3,4,5]
// // let k=2
// let rev=[]
// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i])
//     console.log(arr[i])
// }
// console.log(rev)



// rotate array by right
// arr=[1,2,3,4,5]
// let k=2
// let n=arr.length
// k=k%n
// let res=[]
// for(let i=n-k;i<n;i++){
//     res.push(arr[i])
// }

// for(i=0;i<n-k;i++){
//     res.push(arr[i])
// }

// console.log(res)


// number


// prime
// let n=5
// let pri=false
// for(let i=2;i<=n;i++){
//     if(i%1===0 && n%i===0){
//         // pri=true     
//         console.log(i)
//     }

// }




// fibonacci
// let n=5
// let a=0
// let b=1
// let res=[]
// for(let i=0;i<n;i++){
//     res.push(a)
//     let next=a+b
//     a=b
//     b=next
// }
// console.log(res)


// armstrong nbr

// let n=23
// let sum=0
// let tem=n
// let digits=n.toString().length

// while(tem>0){
//     let rem=tem%10
//     sum=rem**digits
//     tem=Math.floor(tem/10)
// }
// if(sum===n){
//     console.log("arm")
// }
// else{
//     console.log("not arm")
// }


// reverse nbr
// let n=1234
// let rev=0

// while(n>0){
//     let rem=n%10
//     rev=rev*10+rem
//     n=Math.floor(n/10)
// }
// console.log(rev)


// gcd and lcm

// let a=12
// let b=18
// while(b!=0){
//     let temp=b
//     b=a%b
//     a=temp
// }
// console.log((a*b)/gcd(a,b))
// console.log(a)



// prime
// let n=5
// let p=true
//     for(let i=2;i*i<=n;i++){
//         if(n%i===0){
//             p=false
//             break
//     }
// }
// if(p){
//     console.log("prime")
// }
// else{
//     console.log("not prime")
// }

// range

// let s=1
// let e=10
// for(let n=s;n<=e;n++){
//     let p=true
//     for(let i=2;i*i<=n;i++){
//         if(n%i===0){
//             p=false
//             break
//         }
//     }
//     if(p){
//         console.log(n)
//     }
// }




// Check if a year is a leap year
// let y=2025
// if(y%400===0 ||(y%4===0 && y%100!==0)){
// console.log("leap year")
// }
// else{
//     console.log("non leap year")
// }

// Find largest among three numbers