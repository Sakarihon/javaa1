'use strict'

const outputelement=document.querySelector('#joku');{


}
const lista=[]

while (true){
  let numero1=Number(prompt('anna numero'));
  if (numero1<10) break;
  lista.push(numero1)

}
if (outputelement){
  outputelement.innerText=`lista${lista.join(',')}`;
}