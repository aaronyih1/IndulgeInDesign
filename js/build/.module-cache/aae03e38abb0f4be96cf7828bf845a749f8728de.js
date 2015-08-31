var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "../imgs/menubar.svg"}), 
        React.createElement("ul", null, 
          React.createElement("li", null, "hello"), 
          React.createElement("li", null, "goodbye")
        )
      )
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);