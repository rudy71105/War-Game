function solution(title, pageCount){
    //function body
    let result = [];
    if (pageCount > 10){return 'this book is too long to process'}
    else {
        for (let i = 1; i <= pageCount; i++){
            result.push('Page ' + i);
        }
    }
    return result;
  }

  console.log(solution('East of Eden', 9))