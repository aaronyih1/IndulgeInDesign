var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "imgs/menubar.svg", style: navBarStyle, id: "navHeader"}), 
        React.createElement("ul", {style: navStyle, id: "nav"}, 
          React.createElement("li", {style: navItemStyle}, React.createElement("img", {src: "imgs/coffee.svg"})), 
          React.createElement("li", null, "intro"), 
          React.createElement("li", null, "philosophy"), 
          React.createElement("li", null, "schedule"), 
          React.createElement("li", null, "membership"), 
          React.createElement("li", null, "contact")
        ), 
        React.createElement("img", {src: "imgs/sketch.png"}), 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, React.createElement("h2", null, "test")), 
            React.createElement("td", null, React.createElement("p", null, "hello"))
          )
        )
      )
    );
  }
});

var navBarStyle={
  position: 'fixed',
  top: '-350px',
  left: '-180px',
  width: '130%'
};

var navStyle={
  position: 'fixed',
  top: '0px'
}

var logoStyle={
}

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);