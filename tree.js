"use strict";

class ValNode {
	constructor(value, parent) {
		this.value = value;
		this.parent = parent;
		this.childrens = [];
	}

	createChildren(value) {
		this.childrens[this.childrens.length] = new ValNode(value, this);
	}

	info() {
		const info = `Node: ${this.value} Parent: ${
			this.parent?.value ? this.parent.value : "-"
		} Child: ${this.childrens.map((c) => c.value)}`;
		return info;
	}
}

function traverse(searchValue) {
	let i = 1;
	const maxChildren = 3;
	const startNode = new ValNode(i);
	const traverseList = [startNode];

	let found = false;

	while (!found) {
		const currentNode = traverseList.shift();
		for (let j = 1; j <= maxChildren; j++) {
			if (i == searchValue) {
				found = true;
			}
			i++;
			currentNode.createChildren(i);
		}
		currentNode.childrens.forEach((c) => traverseList.push(c));

		console.log(currentNode.info());
	}
}

traverse(3);
