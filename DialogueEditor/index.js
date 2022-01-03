let network;

function refreshGraph(data = exampleData) {
  if (network == null) {
    network = new vis.Network(
      document.getElementById("network"),
      buildGraphData(data),
      options
    );
  } else {
    network.setData(buildGraphData(data));
  }
}

function buildGraphData(data) {
  const nodes = [];
  const edges = [];
  for (const [key, value] of Object.entries(data)) {
    nodes.push(constructNode(key, value));
    if (Array.isArray(value)) {
      value.forEach((decision) => edges.push(constructEdge(key, decision)));
    } else {
      edges.push(constructEdge(key, value));
    }
  }
  return { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
}

function constructEdge(key, value) {
  return { from: key, to: value.next };
}

function constructNode(key, value) {
  const node = { id: key, label: key };
  if (Array.isArray(value)) {
    node.color = blue;
  } else if (value.next === "$END") {
    node.color = orange;
  }
  return node;
}
