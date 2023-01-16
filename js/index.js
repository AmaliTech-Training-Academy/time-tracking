"use strict"
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const dailyArr = document.querySelectorAll('.daily');
const weeklyArr = document.querySelectorAll('.weekly');
const monthlyArr = document.querySelectorAll('.monthly');


function updateHrs(id, className) {
    const btn = document.getElementById(id);
    btn.addEventListener('click',()=>{
        const arr = document.querySelectorAll('.' + className);
        arr.forEach((arr, index)=>{
            if(className === 'daily') {
                weeklyArr[index].classList.remove('active');
                monthlyArr[index].classList.remove('active');
                arr.classList.add('active');

            } else if (className === 'weekly') {
                dailyArr[index].classList.remove('active');
                monthlyArr[index].classList.remove('active');
                arr.classList.add('active');
            } else {
                weeklyArr[index].classList.remove('active');
                dailyArr[index].classList.remove('active');
                arr.classList.add('active');
            }
            
        });
            
    });    
}


updateHrs('daily-btn', 'daily');
updateHrs('weekly-btn', 'weekly');
updateHrs('monthly-btn', 'monthly');

/*
dailyBtn.addEventListener('click',()=>{
    console.log(dailyArr);
    dailyArr.forEach((arr, index)=>{
        weeklyArr[index].classList.remove('active');
        monthlyArr[index].classList.remove('active');
        arr.classList.add('active');
    });
        
    });

    weeklyBtn.addEventListener('click',()=>{
        console.log(dailyArr);
        dailyArr.forEach((arr, index)=>{
            weeklyArr[index].classList.remove('active');
            monthlyArr[index].classList.remove('active');
            arr.classList.add('active');
        });
            
        });
    */