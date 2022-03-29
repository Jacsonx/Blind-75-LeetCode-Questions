function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let tree = function(p,q){
  //valdiate nodes
  if (!p && !q)return true;
  if (!p || !q || p.val !== q.val) return false;
  //using recursion to get the other nodes 
  return tree(p.left, q.left) && tree(p.right, q.right)
}

const p = Object.create(new Node(1, new Node(2), new Node(3)))
const q = Object.create( new Node(1, new Node(2), new Node(2)))

console.log(tree(p,q))