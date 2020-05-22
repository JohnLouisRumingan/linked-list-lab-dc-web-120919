

const getName = (node) => {

    return node["name"];
}

const headNode = (head, collection) => {

    return collection[head];
}

const next = (node, collection) => {

    let nextNodeAddress = node["next"];

    return collection[nextNodeAddress];
}

const nodeAt = (index, head, collection) => {

    let currentNode = headNode(head, collection); //start at head of node

    for(let i=0; i<index; i++){
        currentNode = next(currentNode, collection);
    }

    return currentNode;
}

const addressAt = (index, head, collection) => {

    return index == 0 ? head : nodeAt(index-1, head, collection)["next"];
}

// note: collection and head reference arguments are switched due to the tests
const indexAt = (node, collection, head) => {
    let currentNode = headNode(head, collection);
    let currentIndex = 0;
    while (currentNode != node){
        currentIndex++;
        currentNode = next(currentNode, collection);
    }
    return currentIndex;
}

const insertNodeAt = (index, newNodeAddress, head, collection) => {
    let previousNode = nodeAt(index-1, head, collection);
    let subsequentNode = previousNode.next;
    previousNode.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = subsequentNode;
}