'use strict';
let userName=prompt('Welcom,whats your name ?');
alert('hi '+userName);
console.log(userName);
alert('Now lets go on a trip to test you some information about me');
let mylocalteam=prompt('do you think my local team is wehdat? ');
if (mylocalteam.toLowerCase()=='yes')
{
    alert('Bravo '+userName+' its righr');
}
console.log(mylocalteam);

let myteam=prompt('do you think my world team is barcelona? ');
if (myteam.toLowerCase()==='no')
{
    alert('great my world team is realmadrid ');
}
console.log(myteam);

let myfun=prompt('do you think i like watching series?');
if (myfun.toLowerCase()==='yes')
{
    alert('yes, hope we can wath together');

}
console.log(myfun);

let eat=prompt('do you think i love mansaf?')
if (eat.toLowerCase()==='no')
{
    alert('yes '+userName+' really idont like amansaf' );
}
console.log(eat);
