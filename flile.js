const sampleArray = [5,89,12,89,12,87,56,36,56];
const getNonDuplicatedValues = (arr) => 
    arr.filter((item,index) => {
      {
      arr.splice(index,1)
      const unique = !arr.includes(item)
      arr.splice(index,0,item)
      return unique;
    }
    return arr[2]
  })

console.log(getNonDuplicatedValues(sampleArray))
