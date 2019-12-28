score = 0;
country = ['usa','uk','canada','georgia','spain'];
capitals = ['washington','london','ottawa','tbilisi','madrid'];
arr = [];
access = false;
first = '';
last = '';

random = Math.floor(Math.random() * country.length);
arr.push(random);
question = document.querySelector('.question');
scores = document.querySelector('.score');
inpvalue = document.querySelector('.inp');
question.innerText = capitals[random];

document.querySelector('#next').addEventListener('click', next)
document.querySelector('#reset').addEventListener('click', reset)

function next(){
    if(inpvalue.value.toLowerCase() ==  country[random] || access == true){
        random = Math.floor(Math.random() * country.length);
        if(arr.indexOf(random) == -1){
        if(arr.length == 0 && (first == random || last == random)){
            access = true;
            next()
        }else{
        first = '';
        last = '';
        arr.push(random);
        score++;
        question.innerText = capitals[random];
        scores.innerText = score;
        inpvalue.value = '';
        access = false;
        }
        } else {
            access = true;
            if(arr.length == 5){
                last = arr[4];
                first = arr[0];
                arr = [];
            }
            next();
        }
    } else {
        score--;
        scores.innerText = score;
    }
}
function reset(){
    location.reload();
}