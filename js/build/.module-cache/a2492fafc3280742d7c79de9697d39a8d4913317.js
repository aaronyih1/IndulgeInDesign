var App = React.createClass({displayName: "App",  
  render: function() {
    return (
      React.createElement("div", {className: "nav"}, 
        React.createElement("img", {src: "imgs/menubar.svg", style: navBarStyle, id: "navHeader"}), 
        React.createElement("ul", {style: navStyle, id: "nav"}, 
          React.createElement("li", {style: navItemStyle, id: "homeButton"}, React.createElement("img", {src: "imgs/coffee.svg", style: logoStyle})), 
          React.createElement("li", {style: navItemStyle}, "intro"), 
          React.createElement("li", {style: navItemStyle}, "philosophy"), 
          React.createElement("li", {style: navItemStyle}, "schedule"), 
          React.createElement("li", {style: navItemStyle}, "membership"), 
          React.createElement("li", {style: navItemStyle}, "contact")
        ), 
        React.createElement("img", {src: "imgs/sketch.png", style: imageStyle}), 
        React.createElement("table", {style: tableStyle}, 
          React.createElement("tr", null, 
            React.createElement("td", null, React.createElement("h2", {style: titleStyle}, "Indulge", React.createElement("br", null), "In Design")), 
            React.createElement("td", null, React.createElement("p", {style: descriptionStyle}, "(InDe) is a community of design oriented thinkers and creators obsessed with inventing innovative solutions to people’s problems."))
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, React.createElement("h2", {style: subtitleStyle}, "Philosophy", React.createElement("br", null), "of Mind")), 
            React.createElement("td", null, 
              React.createElement("p", {style: descriptionStyle}, "Indulging in the world around us enables us to create empathy-rich solutions through a first-hand understanding of humanity."), 
              React.createElement("p", {style: descriptionStyle}, "We seek answers to the question “What makes us human?” and in doing so, we position ourselves to address human needs.")
            )
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
  top: '10px',
  fontFamily: 'avenir',
  fontWeight:'100'
};
var navItemStyle={
  display: 'inline-block',
  marginLeft: '30px',
  color: 'white'
};
var logoStyle={
  width: '40px',
  marginBottom:'-10px'
};
var imageStyle={
  width: '400px',
  marginTop: '200px',
  marginLeft:'400px'
};
var tableStyle={
  width: '900px',
  marginLeft: '50px',
  marginTop:'-20px'
};
var titleStyle={
  fontFamily: 'avenir',
  fontSize: '40pt',
  fontWeight: '200',
  paddingTop: '200px'
};
var subtitleStyle={
  fontSize: '30pt',
  fontFamily: 'avenir',
  fontWeight: '100'
};
var descriptionStyle={
  fontFamily:'avenir',
  fontWeight: '100',
  width: '300px',
  marginLeft:'15px'
};

React.render(
  React.createElement(App, null),
  document.getElementById('react')
);