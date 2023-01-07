// pole []
let zvirata = ['zebra', 'nosorozec', 'medved' ]

// console.log( zvirata[2]  )


// objekt {}



const lev = {
    vek: 10,
    barva: 'bila',
    jmeno: 'Igor',
    pozdrav() {
        console.log(`Ahoj, ja jsem ${this.jmeno} je mi ${this.vek} a moje barva je ${this.barva}.`)
    },
// anonymni fuknce - anonymni fuknce
    narozeniny() {
      console.log('Hura, jsem o rok starsi.')
      this.vek = this.vek + 1
    }
}


lev.pozdrav()
lev.narozeniny()
lev.pozdrav()


// Funkce

function sum() {
    console.log("sum")
  }
  
  sum()


function sum(cislo1, cislo2) {
    console.log("sum")
    console.log(cislo1 + cislo2)
  }
  
  
  sum(1, 2)

  // Funkce


function sum(n1, n2) {
    // console.log("sum")
    // console.log(cislo1 + cislo2)
    return n1 + n2
  }
  
  
  console.log( sum(1, 2) )


  // Funkce

let counter = 0





// Funkce

// let counter = 0;

// function sum(n1, n2) {
// 	counter += 1;
// 	console.log('pocet pouziti: ' + counter);
// 	return n1 + n2;
// }

// console.log(sum(1, 2));
// console.log(sum(4, 6));
// console.log(sum(11, 22));
// console.log(sum(8, 2));


// neni to cista funkce kvuli counteru :)
// counter++ rika kdy chci pricist - lepsi dat na zacatek . nez pouziji tak pridej x na konci - udelej funkci a pak az zvec
// hoisting - 



// Funkce

// kajiFunkce()



// const mojeFunkce = function() {
//   console.log('toto je moje funkce')
// }

// mojeFunkce()

// function kajiFunkce() {
//   console.log('toto je moje funkce')
// }


// PRAVDIVOSTNI FCE
// && - TO A TO
// || - NEBO

const tajneheslo = "veslo"
let heslo = prompt ('napis heslo:')

while(heslo != tajneheslo) {
 heslo = ("heslo neodpovida, napis znovu")
 
}

// misto alert pouyivat console.log()