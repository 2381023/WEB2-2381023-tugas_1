function count_num_of_valley(steps: number, path : string){
    let count_valley = 0;
    let temp : string = "";
    for(let i = 0; i < steps; i++){

        if(path[i] == "D"){
            temp += "D";
        }else{
            temp = "";
        }

        if(temp == "DD"){
            count_valley++;
            temp = "";
        }
    }

    return count_valley;
}

let num_of_valley = count_num_of_valley(8, "UDDDUDUU");

console.log(num_of_valley);