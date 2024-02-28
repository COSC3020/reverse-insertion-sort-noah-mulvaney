// COSC3020 Reverse Insertion Sort Exercise
// Noah Mulvaney, nmulvane@uywo.edu
// 29 Jan 2024

// Insertion sort, interating from end of array

// No assistance recieved.

function insertionSortReverse(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    let v = a[i];
    let j;

    for (j = i; j < a.length && a[j + 1] < v; j++) {
      a[j] = a[j + 1];
    }

    a[j] = v;
  }

  return a;
}


// Display some random test cases
for (let i = 0; i < 12; i++) {
  let a = [];
  let k = 3 + Math.random() * 12;
  for (let j = 0; j < k; j++) {
    a[j] = Math.floor(Math.random() * 20);
  }

  console.log("[" + a + "] [" + insertionSortReverse(a) + "] ");
}
