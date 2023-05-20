const stringCount = (str) => {
 if( str.length >= 1 && str.length <= 10)
    return str.length;
  else {
    return 0;
  }
}


export default stringCount;