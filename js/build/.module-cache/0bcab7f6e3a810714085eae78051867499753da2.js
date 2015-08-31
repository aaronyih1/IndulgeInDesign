var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "imgs/menubar.svg"}), 
        React.createElement("ul", null, 
          React.createElement("li", null, React.createElement("img", {src: "imgs/coffee.svg"})), 
          React.createElement("li", null, "intro"), 
          React.createElement("li", null, "philosophy"), 
          React.createElement("li", null, "schedule"), 
          React.createElement("li", null, "membership"), 
          React.createElement("li", null, "contact")
        )
      )
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);