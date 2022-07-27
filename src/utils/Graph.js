//
//
class Node {
    constructor(id, data, position) {
        this.id = id;
        this.data = data;
        this.position = position;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(edge) {
        this.edges.push(edge);
    }

    getNode(id) {
        return this.nodes.find((node) => node.id === id);
    }

    getEdge(id) {
        return this.edges.find((edge) => edge.id === id);
    }
}

// dfs
const dfs = (graph, startNodeId, visitedNodes = [], visitedEdges = []) => {
    const startNode = graph.getNode(startNodeId);
    if (!startNode) {
        return;
    }

    visitedNodes.push(startNode);

    const edges = graph.edges.filter((edge) => edge.source === startNodeId);
    edges.forEach((edge) => {
        if (!visitedEdges.includes(edge)) {
            visitedEdges.push(edge);
            dfs(graph, edge.target, visitedNodes, visitedEdges);
        }
    });

    return { visitedNodes, visitedEdges };
};

// topological sort
const topologicalSort = (graph) => {
    const visitedNodes = [];
    const visitedEdges = [];
    const sortedNodes = [];

    const nodes = graph.nodes.filter((node) => !visitedNodes.includes(node));
    nodes
        .forEach((node) => {
            const { visitedNodes: visitedNodesInner, visitedEdges: visitedEdgesInner } = dfs(
                graph,
                node.id,
                visitedNodes,
                visitedEdges
            );
            visitedNodes.push(...visitedNodesInner);
            visitedEdges.push(...visitedEdgesInner);
        })
        .sort((a, b) => a.id - b.id);

    return sortedNodes;
};
