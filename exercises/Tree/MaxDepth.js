function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let tree = function(root){
  if(!root) return false;
  console.log(root)

  return Math.max(tree(root.left),tree(root.right)) +1;
}


root = Object.create(new Node(1, new Node(),new Node(2)));

console.log(tree(root))
