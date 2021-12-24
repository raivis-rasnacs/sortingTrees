var trees = document.querySelectorAll("img");
var trees_heights = [];
for (var i = 0; i < trees.length; i++) {
  trees_heights[i] = trees[i].height;
}
trees_heights.sort(function(a, b) { return a - b; });

for (item in trees_heights) {
var egle = document.createElement("img");
egle.height = trees_heights[item];
egle.src = "tree.png";
document.body.appendChild(egle);
}