const Array1 = [
    "John", "Sarah", "Emily", "Michael", "Jessica",
    "David", "Ashley", "Brian", "Amanda", "Andrew",
    "Melissa", "Daniel", "Heather", "Kevin", "Nicole",
    "Matthew", "Brittany", "Christopher", "Samantha", "James",
    "Stephanie", "Joseph", "Jennifer", "William", "Lauren"
]

function Names(arr) {
    let result = [];
    var vowels = ["A", "E", "I", "O", "U" ]
    for (let i = 0; i < arr.length; i++){
        let str = arr[i];
        let firstChar = str.charAt(0)
        for (let j = 0; j < vowels.length; j++){
            if (firstChar === vowels[j]){
                result.push(str);
            }
        }
    }
    return result;
}

console.log(Names(Array1));