'use strict';


let userName=prompt('Welcom,whats your name ?');
alert('hi '+userName);
console.log(userName);
alert('Now lets go on a trip to test you some information about me');
let finalScore =0;


let mylocalteam=prompt('do you think my local team is wehdat? ');
aQ1();
let myteam=prompt('do you think my world team is barcelona? ');
aQ2();
let myfun=prompt('do you think i like watching series?');
aQ3();
let eat=prompt('do you think i love mansaf?');
aQ4();

aQ6();
aQ7();
score();










function aQ1(){
  while (mylocalteam.toLowerCase() !== 'yes' && mylocalteam.toLowerCase() !== 'no')
  {
    alert('This wrong value: ' + mylocalteam + ', Please enter  yes or  no to the following questions.');
    mylocalteam = prompt('do you think my local team is wehdat?');
  }
  if (mylocalteam.toLowerCase()==='yes')
  {
    alert('Bravo '+userName+' its righr');
    finalScore++;

  }
}




function aQ2(){
  while (myteam.toLowerCase() !== 'yes' && myteam.toLowerCase() !== 'no')
  {
    alert('This wrong value: ' + myteam + ', Please enter  yes or  no to the following questions.');
    myteam = prompt('do you think my world team is barcelona?');
  }
  if (myteam.toLowerCase()==='no')
  {
    alert('great my world team is real madrid ');
    finalScore++;

  }
}




function aQ3(){
  while (myfun.toLowerCase() !== 'yes' && myfun.toLowerCase() !== 'no')
  {
    alert('This wrong value: ' + myfun + ', Please enter yes or  no to the following questions.');
    myfun = prompt('do you think i like watching series?');
  }
  if (myfun.toLowerCase()==='yes')
  {
    finalScore++;

    alert('yes, hope we can wath together');

  }
}





function aQ4(){
  while (eat.toLowerCase() !== 'yes' && eat.toLowerCase() !== 'no')
  {
    alert('This wrong value: ' + eat + ', Please enter  yes or  no to the following questions.');
    eat = prompt('do you think i love mansaf?');
  }
  if (eat.toLowerCase()==='no')
  {
    finalScore++;
    alert('yes '+userName+' really idont like amansaf' );
  }
}







function aQ6(){
  let attempts=4;
  let correctAnswer = '10' ;
  while (attempts>0){
    let season=prompt('How many season is the series Friends? ?');
    if(season === correctAnswer){
      alert('correct answer ! :D');
      finalScore++;
      break;
    }else if(season>10){
      alert('too high');
    } else {
      alert('too low');
    }
    attempts--;
    alert('you still have '+attempts+' left');
  }
  alert('the correct answer is 10 :)');

}







function aQ7(){
  let mypet=['cat','dog','bird'];

  let attempts2=6;
  while (attempts2>0){
    let pet=prompt('you should guess what pet do I prefer?');
    if(pet===mypet[0]){
      alert('correct answer ! :D');
      finalScore++;
      break;
    }else if(pet===mypet[1]){
      alert('correct answer ! :D');
      finalScore++;
      break;
    } else if(pet===mypet[2]){
      alert('correct answer ! :D');
      finalScore++;
      break;
    }
    attempts2--;
    alert('you still have '+attempts2+' left');
  }
  alert('the correct answer is '+mypet);

}



function score(){
  alert('you final score is : '+finalScore+' :D ');
  return score;
}



