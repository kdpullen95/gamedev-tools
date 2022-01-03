const exampleData = {
  intro0: { content: "hello", speaker: "someone", next: "intro1" },
  intro1: [
    {
      content: "goodbye",
      speaker: "someoneElse",
      next: "intro2",
      effect: "someone.disposition–",
    },
    {
      content: "hello",
      speaker: "someoneElse",
      next: "intro0",
      effect: "someone.disposition++",
    },
  ],
  intro2: { content: "goodbye", speaker: "someone", next: "$END" },
};

const grey = {
  border: "#C3C3C3",
  background: "#DDDDDD",
  highlight: {
    border: "#C3C3C3",
    background: "#D8D8D8",
  },
  hover: {
    border: "#C3C3C3",
    background: "#D8D8D8",
  },
};

const blue = {
  border: "#2B7CE9",
  background: "#97C2FC",
  highlight: {
    border: "#2B7CE9",
    background: "#D2E5FF",
  },
  hover: {
    border: "#2B7CE9",
    background: "#D2E5FF",
  },
};

const orange = {
  border: "#ffb366",
  background: "#ffcc99",
  highlight: {
    border: "#ffb366",
    background: "#ffd9b3",
  },
  hover: {
    border: "#ffb366",
    background: "#ffd9b3",
  },
};

const options = {
  edges: {
    arrows: {
      to: {
        enabled: true,
      },
    },
  },
  nodes: {
    color: grey,
  },
};
