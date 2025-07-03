function kthCharacterFinal(k: number): string {
  let str: String = 'a';
  while(str.length < k) {
    let len = str.length;
    for(let i=0;i<len;i++) {
      console.log('str.charCodeAt(i)+1', String.fromCharCode(str.charCodeAt(i)+1));
      str += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    console.log(str);
  }
  return str[k-1];
}
