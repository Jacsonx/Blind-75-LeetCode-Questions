//instantiating a tree node

function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

//using recursion to invert the tree
let invertTree = function(root) {
  if(!root)
      return root   
  var left = invertTree(root.left)
  var right = invertTree(root.right)
  root.left = left === undefined ? null : right;
  root.right = right === undefined ? null : left;
  return root
};

//Create The Object
const tree = Object.create(new Node(4, new Node(2, new Node(1), new Node(3)), new Node(7, new Node(6), new Node(9))));
console.log(invertTree(tree));