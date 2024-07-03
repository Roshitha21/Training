
var arr=["a","b","c","d","c","a",null,""]
//Example 1
var _=require('lodash')
function compact(arr)
{
    res=[]
   for (i in arr)
   {
          if(arr[i]=="" || arr[i]==" "|| arr[i]==null)
          {
              continue
          }
          else
          {
              res.push(arr[i])
          }
   }
   return res
}
console.log("Compact Of array :",compact(arr))
//console.log("Compact array with lodash:",_.compact(arr))
//Example 2
function concat(f,s)
{
   for(i in s)
   {
       f.push(s[i])
   }
   return f
}
console.log("Concating of array :",concat(["a","b","c"],["1","2","3"]))

//Example 3

function diff(arr,dif)
{
    res=[] 
    flag=0
    for (i in arr)
     {
          flag=0
         for (j in dif)
         {
                if(arr[i]==dif[j])
                {
                    flag=1
                    break
                }
                else
                {
                    continue
                }
         }
         if(flag!=1)
         {
             res.push(arr[i])
         }
     }
     return res
}
console.log("Differnce :",diff([1,2,3,4],[1,3]))
//Example 4
function head(arr)
{
   return arr[0]
}
console.log("Head :",head(arr))

//Example 5
function tail(arr)
{
    n=(arr.length)
    return arr[n-1]
}

console.log("Tail :",tail([1,2,3]))

//Example 6
function drop(arr)
{
    arr.shift()
    return arr
}
console.log("Drop Single :",drop(arr))
//console.log(arr)

//Example 7
function dropn(arr,n)
{
    while(n!=0)
    {
          n=n-1;
          arr.shift()
    }
    return arr
}
console.log("Drop N times ",dropn(arr,3))

//Example 8

function fill(arr,v,s,e)
{
    for (i=s;i<=e;i++)
    {
         arr[i]=v
    }
    return arr
}
console.log("Fill Array :",fill(arr,"*",2,5))

//Example  9
function initial(arr,n)
{
    return arr.slice(0,n)
}
console.log("Intial of array :",initial(arr,5))

//Example 10
function intersection(arr,In)
{
    res=[]
    flag=0
  for(i in arr)
  {
      flag=0
    for (j in In)
    {
       if(arr[i]==In[j])
       {
           flag=1
           break;
       }
       else
       {
           continue
       }
    }
    if(flag!=1)
    {
        res.push(arr[i])
    }
  } 
  for(i in In)
  {
      flag=0
    for (j in arr)
    {
       if(In[i]==arr[j])
       {
           flag=1
           break;
       }
       else
       {
           continue
       }
    }
    if(flag!=1)
    {
        res.push(In[i])
    }
  }
  return res
}
console.log("Intersection :",intersection([1,2,3],[2,3,4]))


//Example 11
function join(arr,op)
{
     res=""
     for (i in arr)
     {
         res+=arr[i]+op
     }
     return res
}
console.log("Join array :", join([1,2,3,4],"*"))

//Example 12
function nth(arr,n)
{
    if(arr.length<n+1 || n<0)
    {
        return "Error Array Out of box"
    }
    else
    {
    return arr[n]
    }
}
console.log("Nth Element in array:",nth([1,2,3],0))

//Example 13
function pull(arr,v)
{
    for(i in arr)
    {
        if(arr[i]==v)
        {
        arr.splice(i,1)
        }
        else
        {
            continue
        }
    }
    return arr
}
console.log("Pull",pull([1,2,3,2,4,2],2))

//Example 14
function reverse(arr)
{
    res=[]
    n=arr.length
     for (let i=n;i>0;i--)
     {
        res.push(arr[i-1])
     }
     return res
}
console.log("Reverse of array :",reverse([1,2,4,6,5,4,2]))

//Example 15
function indexof(arr,v)
{
    for(i in arr)
    {
        if(arr[i]==v)
        {
            return i
        }
        else
        {
           continue
        }
    }
}
console.log("Index of :",indexof([1,2,3],2))


//Example 16
function inrange(f,v,s)
{
    flag=0;
    if(f>= v && v<=s)
    {
        flag=1
    }
 else
 {
     flag=0
 }
 if(flag==1)
 {
     return  false
 }
 else
 {
     return true
 }
}
console.log("Inrange :",inrange(-2,-4,4))

//Example 17
function slice(arr,f,s)
{
   //console.log("Slicing :")
   res=[] 
  for(i=f;i<=s;i++)
  {
      res.push(arr[i])
  }
  return res
}
console.log("Slicing : ",slice([1,2,3,4],1,3))




function Operation(f,op,s)
{
  if(op=="+")
  {
      return f+s
  }
  else if(op=="-")
  {
      return f-s
  }
  else if(op=="*")
  {
      return f*s
  }
  else if(op=="/")
  {
      return f/s
  }
  else
  {
      return op+" Doesnot Exits"
  }
}
console.log("Arthemtic :",Operation(1,"+",2))
console.log("Arthemtic :",Operation(1,"-",2))
console.log("Arthemtic :",Operation(1,"*",2))
console.log("Arthemtic :",Operation(1,"%",2))

//Example 18
function mean(arr)
{
    n=arr.length
    a=0
    for(i in arr)
    {
        a=a+arr[i]
    }
  return a/n
}
console.log("Mean :",mean([1,2,3,4,5,6]))

//Example 19
function lower(st)
{
    return st.toLowerCase()
}
function Upper(st)
{
    return st.toUpperCase()
}
console.log("Lowercase :",lower("JEEVAN"))
console.log("Uppercase :",Upper("jeevan"))

//Example 20
function endswith(st,C,n=st.length)
{
  if(st[n-1]==C)
  {
      return true
  }
  else
  {
      return false
  }
}
console.log("EndsWith :",endswith("abc","b",2))

//Example 21

function replace(st,old,n)
{
let newText = st.replace(old, n);
return newText
}
console.log("Replace :",replace("Hi john","john","Julie"))

//Example 22
function repeat(v,n)
{
    txt=""
    for(i=0;i<n;i++)
    {
        txt+=v
    }
    return txt
}
console.log("Repeating :",repeat("|~|",10))