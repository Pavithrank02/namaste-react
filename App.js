

const heading = React.createElement("h1", {
id: "title",
}, "Namaste");
const heading2 = React.createElement("h2", {
id: "title",
}, "Hello");
const container = React.createElement("div",{id:"container"}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
