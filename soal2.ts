function round_grades(...grades:number[]){
    let rounded_grades = grades;

    for(let i = 0; i < grades.length; i++){
        let nearest_five_factor = Math.trunc((grades[i] + 5) / 5) * 5;
        if(nearest_five_factor - grades[i] < 3 && grades[i] > 38){
            rounded_grades[i] = nearest_five_factor;
        }else{
            rounded_grades[i] = grades[i];
        }
    }

    return rounded_grades;
}

console.log(round_grades(73, 67, 38, 33));