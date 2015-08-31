var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "imgs/menubar.svg", style: navBarStyle, id: "navHeader"}), 
        React.createElement("ul", {style: navStyle, id: "nav"}, 
          React.createElement("li", {style: navItemStyle, id: "homeButton"}, React.createElement("img", {src: "imgs/coffee.svg", style: logoStyle})), 
          React.createElement("li", {style: navItemStyle, id: "introButton"}, "intro"), 
          React.createElement("li", {style: navItemStyle}, "philosophy"), 
          React.createElement("li", {style: navItemStyle}, "schedule"), 
          React.createElement("li", {style: navItemStyle}, "membership"), 
          React.createElement("li", {style: navItemStyle}, "contact")
        ), 
        React.createElement("img", {src: "imgs/sketch.png", style: imageStyle}), 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, React.createElement("h2", {style: titleStyle}, "Indulge In Design")), 
            React.createElement("td", null, React.createElement("p", {style: descriptionStyle}, "(InDe) is a community of design oriented thinkers and creators obsessed with inventing innovative solutions to people’s problems."))
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
  width: '1300px'
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
  marginTop: '200px',
  marginLeft:'170px'
};
var titleStyle={
  fontFamily: 'avenir'
};
var descriptionStyle={
  fontFamily:'avenir'
};

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);