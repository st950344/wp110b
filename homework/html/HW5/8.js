var answer=[];

function add(array1,array2){

    for(let i=0;i<array1.length;i++){
        answer[i]=[];
        for(let j=0;j<array1[0].length;j++){
            answer[i][j] = array1[i][j] + array2[i][j];
        }
    }
    return answer;
}

console.log( add([[1,2],[3,4]], [[1,1],[1,1]]) );
