

const getName = (node) => {

    return node["name"];
}

const headNode = (linkedList, collection) => {

    return collection[linkedList];
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

const indexAt = () => {
    
}