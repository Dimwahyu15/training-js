let nilai = [];

for( i = 0; i <=30; i++){
  if(i % 3== 0 | i % 7 == 0){
    nilai.push(i)
  }
}

nilai.splice(9,1,"Z");
console.log(nilai.join())