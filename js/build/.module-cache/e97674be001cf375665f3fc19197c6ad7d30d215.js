var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "imgs/menubar.svg", style: navBarStyle, id: "navHeader"}), 
        React.createElement("ul", {style: navStyle, id: "nav"}, 
          React.createElement("li", {style: navItemStyle}, React.createElement("img", {src: "imgs/coffee.svg", style: logoStyle})), 
          React.createElement("li", {style: navItemStyle}, "intro"), 
          React.createElement("li", {style: navItemStyle}, "philosophy"), 
          React.createElement("li", {style: navItemStyle}, "schedule"), 
          React.createElement("li", {style: navItemStyle}, "membership"), 
          React.createElement("li", {style: navItemStyle}, "contact")
        ), 
        React.createElement("img", {src: "imgs/sketch.png", style: imageStyle}), 
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
  top: '0px',
  fontFamily: 'avenir'
};
var navItemStyle={
  display: 'inline',
  marginLeft: '30px',
  color: 'white'
};
var logoStyle={
  width: '40px'
};
var imageStyle={
  width: '400px',
  position:'relative',
  top:'200px',
  left: '200px'
};

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);