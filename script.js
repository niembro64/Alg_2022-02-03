var arr2d = [
    [20, 50, 80],
    [30, 60, 10],
    [50, 70, 70],
];

// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// is value inside a?
function isPresent2d(a, value) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            if (value === a[i][j]) {
                return true;
            }
        }
    }

    return false;
}

console.log("VALUE: " + isPresent2d(arr2d, 70));

console.log("----------------");

// complete the following function
function flatten(arr2d) {
    var flat = [];
    var flatIndex = 0;

    for(var i = 0; i < arr2d.length; i++){
        for(var j = 0; j < arr2d[i].length; j++){

            flat[flatIndex] = arr2d[i][j];
            flatIndex++;
        }
    }

    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// complete the following function
// function flatten(a) {
//     var flat = [];

//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j < a[i].length; j++) {
//             flat.push(a[i][j]);
//         }
//     }

//     return flat;
// }

// var result = flatten([
//     [2, 5, 8],
//     [3, 6, 1],
//     [5, 7, 7],
// ]);
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
