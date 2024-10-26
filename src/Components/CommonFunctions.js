export const getDistinctValues=(arr, fieldName,type)=> {
    const uniqueValues = [...new Set(arr.map(item => item[fieldName]))];
    console.log(`uniquelist ${type}`,uniqueValues)
    return uniqueValues;
  }

 export const mergeArrays=(arrone, arrtwo)=> {
    return arrone.map((key, index) => {
        return { [key]: arrtwo[index] };
    });
}
  

export const formatArrays=(arrone, arrtwo)=> {
  return arrone.map((key, index) => {
    return {
      label: key,
      value: arrtwo[index]
    };
  });
}


export const formatNumber=(number)=> {
  if (number !== undefined && number !== null && number !== "") {
      let value = number.toString()
      let formattedNumber = '';
      let negative = false;
      let numString = ""
      if (value?.includes("-")) {

          negative = true;
          numString = value.replace("-", "")
      }
      else {
          numString = value;
      }
      let n = numString.split('.')[0]
      let s = numString.split('.')[1]
      if (n.length > 7) {
          const crore = n.slice(0, -7)
          const lakh = n.slice(-7, -5);
          const thousand = n.slice(-5, -3);
          const hundred = n.slice(-3);
          formattedNumber = `${crore},${lakh},${thousand},${hundred}`;
      }
      else if (n.length > 5) {
          const lakh = n.slice(0, -5);
          const thousand = n.slice(-5, -3);
          const hundred = n.slice(-3);

          formattedNumber = `${lakh},${thousand},${hundred}`;
      } else if (n.length > 3) {
          const thousand = n.slice(0, -3);
          const hundred = n.slice(-3);

          formattedNumber = `${thousand},${hundred}`;
      } else {
          formattedNumber = n;
      }
      if (s !== undefined && s.length === 1) {
          s = s * 10;
      }
      if (s === undefined) {
          s = "00"
      }
      return negative ? "-" + formattedNumber  : formattedNumber ;
  }
}
