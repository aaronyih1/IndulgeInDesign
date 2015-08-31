var App = React.createClass({  
  render: function() {
    return (
      <div className="nav">
        <img src="imgs/menubar.svg"  style={navBarStyle} id ='navHeader'/>
        <ul style={navStyle} id = 'nav'>
          <li style={navItemStyle} id ="homeButton"><img src="imgs/coffee.svg" style={logoStyle}/></li>
          <li style={navItemStyle} >intro</li>
          <li style={navItemStyle}>philosophy</li>
          <li style={navItemStyle}>schedule</li>
          <li style={navItemStyle}>membership</li>
          <li style={navItemStyle}>contact</li>
        </ul>
        <img src="imgs/sketch.png" style={imageStyle}/>
        <table>
          <tr>
            <td><h2 style={titleStyle}>Indulge In Design</h2></td>
            <td><p style={descriptionStyle}>(InDe) is a community of design oriented thinkers and creators obsessed with inventing innovative solutions to people’s problems.</p></td>
          </tr>
        </table>
      </div>
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
  fontFamily: 'avenir',
  fontWeight:'100'
};
var navItemStyle={
  display: 'inline-block',
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
  fontFamily: 'avenir',
  fontSize: '20pt',
  fontWeight: '200'
};
var descriptionStyle={
  fontFamily:'avenir',
  fontWeight: '100'
};

React.render(
  <App />,
  document.getElementById('react')
);