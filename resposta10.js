var matrizA = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 1, 1], [1, 1, 1]];
var matrizB = [[1, 2, 3, 4, 5], [4, 5, 6, 4, 5], [7, 8, 9, 4, 5]];
var matrizResultado = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];

for (var i=0; i < 5; i++) {
    for (var j=0; j<5; j++) {
        for (var k=0; k<3; k++) {
            matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}
console.log(matrizResultado);