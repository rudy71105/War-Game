const Array1 = [
    "John", "Sarah", "Emily", "Michael", "Jessica",
    "David", "Ashley", "Brian", "Amanda", "Andrew",
    "Melissa", "Daniel", "Heather", "Kevin", "Nicole",
    "Matthew", "Brittany", "Christopher", "Bhristopher", "Samantha", "James",
    "Stephanie", "Joseph", "Jennifer", "William", "Lauren"
]

(arra) 
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}

var result = longest_str_in_array(Array1);

console.log(result)