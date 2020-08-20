//var 후보군 = Array(45); //[]가능,배열을만드는방법은 이 두가지 ,45개의empty가들어있어 forEach불가
//var 필 = 후보군.fill();////45개의undefined가 차있는거야


// 필.forEach(function(요소,인덱스){ //parameter로 요소랑 인덱스를 넣을수있어
//     //console.log(요소,인덱스 +1);//1부터 45까지 숫자를 만들수있어 ,콘솔로 밖에 못찍어
//     필[인덱스] = 인덱스 +1;//억지로라도 넣을수있어
    
// });



//변수를 굳이 만들지않고 한방에 줄여서쓸수있어,대입개념
//필은그대로있고 맵이라는새로운배열을얻어와야,
var 후보군 = Array(45)
    .fill() 
    .map(function (요소,인덱스){
    return 인덱스 + 1;//맵핑할값으로 새로대입,undefined에서 1대1로 인덱스로맵핑
});
console.log(후보군);

 //앞에서 6개의 숫자를 랜덤으로뽑고 뒤에서 보너스숫자1개뽑아
 var 셔플 =[];
 while(후보군.length > 0){
    var 이동값 = 후보군.splice( Math.floor(Math.random() * 후보군.length),1)[0];//후보군.splice(,)[0];
    셔플.push(이동값);
 }
console.log(셔플);

var 보너스 = 셔플[셔플.length - 1];//셔플의 마지막숫자
var 당첨숫자들 = 셔플
    .slice(0,6)
    .sort(function (p,c){
        return p-c;
    });//slice 배열을 자르는거야 ,0~5자리까지 6개가짤려
//.sort(fuction (p,c){return c-p;})//내림차순으로 정렬

console.log('당첨숫자들'+ 당첨숫자들 + '보너스 ' + 보너스);

//html에 존재하는 테그를 어떻게js로 가져오느냐,기존엔 직접만들었어

//for문안에 비동기함수가 들어있는경우 클로저문제가 발생
// for(var i = 0; i <당첨숫자들.length; i++){ //클로저문제 -js 중급시간에
//     setTimeout(function 비동기콜백함수(){ 
//         var 공 = document.createElement('div');
//         공.textContent = 당첨숫자들[i];
//         결과창.appendChild(공);
//     },1000);//1초
// }

//querySelector('#결과창')더 많이써 
var 결과창 = document.getElementById('결과창');//id로 div태그를 가져와 ,id는 한번만쓸수있어

//다른부분은 매개변수로 겹치는부분으 함수로
function 공색칠하기(숫자,결과창){
var 공 = document.createElement('div');
공.textContent = 숫자;
공.style.display = 'inline-block';//js로 css조작하기
공.style.border = '1px solid black';
공.style.borderRadius ='40px' ;//css에서 -부분을 대문자로
공.style.width = '40px';
공.style.height = '40px';
공.style.textAlign = 'center';
공.style.marginRight = '10px';
공.className = '공아이디' + 숫자;
공.style.fontSize = '20px';
var 배경색;
if(숫자 <= 10){
배경색 = 'red';
}else if(숫자 <= 20){
    배경색 = 'orange';
}else if(숫자 <= 30){
    배경색 = 'yellow';
}else if(숫자 <= 40){
    배경색 = 'blue';
}else{
    배경색 = 'green';
}
공.style.background = 배경색;
결과창.appendChild(공);
}

//클로저문제- i가 실행되는순간에 이미 당첨숫자들.length가돼
for(var i = 0; i < 당첨숫자들.length; i++){
    setTimeout(function(){
        공색칠하기(당첨숫자들[i],결과창);
    },(i+1) * 1000);
}

for(var i = 0; i < 당첨숫자들.length; i++){
    (function 클로저(j){
        setTimeout(function(){
            공색칠하기(당첨숫자들[j],결과창);
        },(j+1) * 1000);
    })(i);//이렇게 거의 바로실행해-선언하자마자 바로 실행
    //클로저(i);
}

setTimeout(function(){
    var 칸 = document.querySelector('.보너스');
    공색칠하기(보너스,칸)
},7000);
//tip & memo
//1부터 45까지 숫자를 만들어야돼 -인덱스를 이용해서 만들수있어

//mapping 맵 1:1로
//[undefined,undefined,undefined];
//[1,2,3]

//for 문은 내가정확히몇번돌아야될지알때
//while문은 기준값이 정확하지않을때,기준값이 계속바뀔때

