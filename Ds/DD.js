

// linkedlist class in Java Script -----------------

// User defined class node
/*
class Node {
	// constructor
	constructor(element)
	{
		this.element = element;
		this.next = null
	}
}

class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}

// of list
 add(element)
 {
     // creates a new node
     var node = new Node(element);
 
     // to store current node
     var current;
 
     // if list is Empty add the
     // element and make it head
     if (this.head == null)
         this.head = node;
     else {
         current = this.head;
 
         // iterate to the end of the
         // list
         while (current.next) {
             current = current.next;
         }
 
         // add node
         current.next = node;
     }
     this.size++;
 }

removeFrom(index)
{
	if (index < 0 || index >= this.size)
		return console.log("Please Enter a valid index");
	else {
		var curr, prev, it = 0;
		curr = this.head;
		prev = curr;

		// deleting first element
		if (index === 0) {
			this.head = curr.next;
		} else {
			// iterate over the list to the
			// position to removce an element
			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			// remove the element
			prev.next = curr.next;
		}
		this.size--;

		// return the remove element
		return curr.element;
	}
}

	// removeElement(element)
// removes a given element from the
// list
removeElement(element)
{
	var current = this.head;
	var prev = null;

	// iterate over the list
	while (current != null) {
		// comparing element with current
		// element if found then remove the
		// and return true
		if (current.element === element) {
			if (prev == null) {
				this.head = current.next;
			} else {
				prev.next = current.next;
			}
			this.size--;
			return current.element;
		}
		prev = current;
		current = current.next;
	}
	return -1;
}

// finds the index of element
indexOf(element)
{
	var count = 0;
	var current = this.head;

	// iterate over the list
	while (current != null) {
		// compare each element of the list
		// with given element
		if (current.element === element)
			return count;
		count++;
		current = current.next;
	}

	// not found
	return -1;
}


	// Helper Methods
	// isEmpty
    isEmpty()
{
	return this.size == 0;
}
	// size_Of_List
    // prints the list items
// gives the size of the list
size_of_list()
{
	console.log(this.size);
}
	// PrintList
    printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
}



// creating an object for the
// Linkedlist class
var ll = new LinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());
// adding element to the list
ll.add(10);

// prints 10
ll.printList();
 
// returns 1
ll.size_of_list();
 
// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();
console.log("Index of 40 " + ll.indexOf(40));

// remove 3rd element from the list
console.log(ll.removeFrom(3));
console.log(ll.removeElement(20));
ll.printList();
*/







/*
// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree
{
    constructor()
    {
        // root of a binary search tree
        this.root = null;
    }
 

insert(data)
{
	// Creating a node and initialising
	// with data
	var newNode = new Node(data);
					
	// root is null then node will
	// be added to the tree and made root.
	if(this.root === null)
		this.root = newNode;
	else

		// find the correct position in the
		// tree and add the node
		this.insertNode(this.root, newNode);
}


insertNode(node, newNode)
{
	// if the data is less than the node
	// data move left of the tree
	if(newNode.data < node.data)
	{
		// if left is null insert node here
		if(node.left === null)
			node.left = newNode;
		else

			// if left is not null recur until
			// null is found
			this.insertNode(node.left, newNode);
	}

	// if the data is more than the node
	// data move right of the tree
	else
	{
		// if right is null insert node here
		if(node.right === null)
			node.right = newNode;
		else

			// if right is not null recur until
			// null is found
			this.insertNode(node.right,newNode);
	}
}

remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data);
}

removeNode(node, key)
{
		
	if(node === null)
		return null;

	// if data to be delete is less than
	// roots data then move to left subtree
	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}
	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}
	else
	{
		// deleting node with no children
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}

		// deleting node with one children
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}

		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		var aux = this.findMinNode(node.right);
		node.data = aux.data;

		node.right = this.removeNode(node.right, aux.data);
		return node;
	}

}
// Performs inorder traversal of a tree
inorder(node)
{
	if(node !== null)
	{
		this.inorder(node.left);
		console.log(node.data);
		this.inorder(node.right);
	}
}
// Performs preorder traversal of a tree
preorder(node)
{
	if(node !== null)
	{
		console.log(node.data);
		this.preorder(node.left);
		this.preorder(node.right);
	}
}
// Performs postorder traversal of a tree
postorder(node)
{
	if(node !== null)
	{
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.data);
	}
}
// finds the minimum node in tree
// searching starts from given node
findMinNode(node)
{
	// if left of a node is null
	// then it must be minimum node
	if(node.left === null)
		return node;
	else
		return this.findMinNode(node.left);
}
// returns root of the tree
getRootNode()
{
	return this.root;
}
// search for a node with given data
search(node, data)
{
// if trees is empty return null
	if(node === null)
		return null;

	// if data is less than node's data
	// move left
	else if(data < node.data)
		return this.search(node.left, data);

	// if data is less than node's data
	// move left
	else if(data > node.data)
		return this.search(node.right, data);

	// if data is equal to the node data
	// return node
	else
		return node;
}
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();
	
//console.log("Root Node :",root)
// prints 5 7 9 10 13 15 17 22 25 27
console.log("Inorder :")
BST.inorder(root);
			
// Removing node with no children
BST.remove(5);
						
var root = BST.getRootNode();
			
// prints 7 9 10 13 15 17 22 25 27
console.log("Inorder :")
BST.inorder(root);
			
// Removing node with one child
BST.remove(7);
			
			
var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
console.log("Inorder :")
BST.inorder(root);
			
// Removing node with two children
BST.remove(15);
	


var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);
			
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

*/