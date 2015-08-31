var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("h1", null, "test")
      )
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);