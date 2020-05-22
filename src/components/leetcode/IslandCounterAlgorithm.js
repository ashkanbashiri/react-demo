var n = 0;
var m = 0;
var animations = [];
var islandNumber = 0;

export default function getIslandFinderAnimations(array) {
  animations = [];
  islandNumber = 0;
  var numIsland = 0;
  numIsland = numIslands(array);
  return [animations, numIsland];
}

// @ts-ignore
function numIslands(array) {
  let count = 0;
  n = array.length;
  if (n == 0) return 0;
  m = array[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (array[i][j] == "1") {
        DFSMarking(array, i, j);
        ++count;
        islandNumber += 1;
      }
    }
  }
  return count;
}

// @ts-ignore
function DFSMarking(array, i, j) {
  if (i < 0 || j < 0 || i >= n || j >= m || array[i][j] != "1") return;
  array[i][j] = "0";
  animations.push([i, j, islandNumber]);
  DFSMarking(array, i + 1, j);
  DFSMarking(array, i - 1, j);
  DFSMarking(array, i, j + 1);
  DFSMarking(array, i, j - 1);
}
