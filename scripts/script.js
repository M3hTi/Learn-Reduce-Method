const hElement = document.querySelector('.js-h1');
console.dir(hElement); //viewing property and method of DOM element
const contentElement = document.querySelector('.content-height')
console.dir(contentElement) //viewing property and method of DOM element
console.dir(this) //viewing property and method of DOM element


contentElement.style.height = window.innerHeight - hElement.clientHeight + 'px';
console.log(contentElement.clientHeight);




const persons = [{ 
        fname : 'mehdi',
        age : 22
    },{
        fname : 'ali',
        age : 25
    },{
        fname : 'hamid',
        age : 28
    },{
        fname : 'yassine',
        age : 22
    },{
        fname : 'fateme',
        age : 24
    },{
        fname : 'lana',
        age : 32
    }
]

// grouping together in console tab
persons.forEach((person) => {
    console.groupCollapsed(person.fname)
    console.log(`fname : ${person.fname}`)
    console.log(`age : ${person.age}`)
    console.groupEnd(person.fname)
})





// Learn Reduce Method in Js
const sum = function (...numbers) {
    return numbers.reduce((total, currentValue) => total + currentValue)
}
console.log(sum(1, 2, 3, 4, 5))






const arrays = [[1,2] , [3,4,5] , [7, 8 , 9 , 101 , 110]]
const [a , ...rest] = arrays
console.log(...rest);
const flattened = arrays.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    return accumulator.concat(currentValue)
}, [])
console.log(flattened);







const inventors = ['apple', 'samsung', 'LG', 'samsung', 'LG', 'samsung', 'apple', 'Asus']
const countInventors = inventors.reduce((accumulator,currentValue) =>{
    console.log(accumulator,currentValue);
    if(accumulator[currentValue]){
        accumulator[currentValue] += 1
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator
},{})
console.log(countInventors);




// NOTE: calculate of video times
const videosUl = document.querySelectorAll('.videos li')
console.log(videosUl);



let arrTimes = []

videosUl.forEach((video) => {
    // console.log(video.dataset.time);
    const timeString = video.dataset.time
    console.log(timeString);
    const [min , sec] = timeString.split(':').map(Number)
    console.log(min , sec);

    const totalTime = min * 60 + sec
    console.log(totalTime);

    arrTimes.push(totalTime)

})

console.log(arrTimes);

const totalSec = arrTimes.reduce((total,currrentValue) => {
    return total + currrentValue
})
console.log(totalSec);


const hour = Math.floor(totalSec / 3600)
console.log(hour);


const min = Math.floor((totalSec % 3600) / 60);
console.log(min);


const sec =  totalSec % 60;
console.log(sec);


const formatTime = `${hour}:${min}:${sec}`
console.log(formatTime);















