function objectFilter(obj, fn) {
    var result = {}
     for (const key in obj) {
        var value = obj[key]
        if (fn(key, value) === true) { result[key] = value; }
     }
     return result;
}

const sample = { name: 'John',
age: 30,
city: 'New York',
social_security_number: 1555926};

const test = function(key, value) {
    return typeof value === 'number';
  };

  console.log(objectFilter(sample, test))