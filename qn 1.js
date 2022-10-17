var N=9
 var arr=[5,89,12,89,12,87,56,56,36];
 var count=0;
 var max=0;
 var temp;
 var temp1=[];
    for(var i=0;i<arr.length;i++)
    {
    for(var j=0;j<arr.length;j++) 
    {
     if(arr[i]===arr[j])
         { 
             count=count+1;
             if(max<count)
             { 
                 max=count;
                temp=arr[i];
             } 
         }
    } 
    if(max==1)
    {
        temp1.push(temp);
    }
    count=0;
    max=0;
    }
    if(temp1[2]==null){
      console.log("none")
    }else{
     console.log(temp1[2]);
    }
