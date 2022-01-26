// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



function pAequorFactory(num, array){// may need to review this so that num is always unique
  return {
    speciesNum: num,
    dna: array,

    mutate(){
      let rand = Math.floor(Math.random() * 15); //0-14
      let newBase = Math.floor(Math.random() * 3);
      while(newBase === this.dna[rand]){
        newBase = Math.floor(Math.random() * 4);
      }
      switch(newBase){
        case 0:
          this.dna[rand]='A';
          break;//will this break out of the entire function?
        case 1:
          this.dna[rand] = 'T';
          break;
        case 2:
          this.dna[rand] = 'C';
          break;
        case 3:
          this.dna[rand] = 'G';
          break
      }
      return(this.dna);// may not need this part, unless i want to log the mutate method
    },//end of mutate method

    compareDNA(pObject){
      let numIdent = 0;
      for(let i = 0; i<15; i++){
        if(this.dna[i]=== pObject.dna[i]){
          numIdent++
        }
      }
      return((numIdent/15)*100)
    },

    willLikelySurvive(array){
      let numIdent = 0;
      for(let i = 0; i<15; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          numIdent++
        }
      }
      return((numIdent/15)*100)
    },//end of will Likely Survive method


  }//end of object

};//end of function



let newArr1 = mockUpStrand();
let number1 = 1;
const tempOBJ1 = pAequorFactory(number1, newArr1);

let newArr2 = mockUpStrand();
let number2 = 2;
const tempOBJ2 = pAequorFactory(number2, newArr2);

console.log(tempOBJ1.compareDNA(tempOBJ2));
/*
console.log(tempOBJ);
for(let i = 0; i<10000000; i++){
tempOBJ.mutate();
}
*/
//console.log(tempOBJ.mutate());

console.log(tempOBJ1.willLikelySurvive());

console.log('test')
