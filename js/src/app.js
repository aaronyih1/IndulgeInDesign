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
        <img src="imgs/sketch.png" style={sketchStyle}/>
        <table style={tableStyle}>
          <tr>
            <td><h2 style={titleStyle}>Indulge<br></br>In Design</h2></td>
            <td><p style={descriptionStyle}>(InDe) is a community of design oriented thinkers and creators obsessed with inventing innovative solutions to people’s problems.</p></td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Philosophy</h2></td>
            <td>
              <img src="imgs/philosophy.png" style={headStyle}/>
              <p style={descriptionStyle}>Indulging in the world around us enables us to create empathy-rich solutions through a first-hand understanding of humanity.</p>
              <p style={descriptionStyle}>We seek answers to the question “What makes us human?” and in doing so, we position ourselves to address human needs.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Schedule</h2></td>
            <td>
              <img src="imgs/schedule.png"  style={headStyle}/>
              <p style={descriptionStyle}>(InDe) is a community of design oriented thinkers and creators obsessed with inventing innovative solutions to people’s problems.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Membership</h2></td>
            <td>
              <img src="imgs/knight.png"  style={headStyle}/>
              <p style={descriptionStyle}>The common thread connecting all of our members is an overwhelming desire to find what makes us human and to use those answers to improve the human experience through intentious and purposeful design. To be a designer is to question how and why things are done the way they are and to find better ways to do those things. Design is optimizing for circumstance and context.</p>
              <p style={descriptionStyle}>All members have completed an on-boarding process that is designed to communicate the culture of Indulge In Design while also fostering a community of learning and doing. There is no timeline for the process because it is a merit-based program. If you complete the requirements of the program, you become a member. It’s that simple. Check out the handbook for specifics.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Contact</h2></td>
            <td>
              <img src="imgs/phone.png"  style={headStyle}/>
              <p style={descriptionStyle}>For anything regarding membership, text Aaron at (925)876-0497 with a picture of your favorite chair or door knob. Any texts that do not include this picture will be promptly ignored. For other inqueries, please email aaron.yih@ucla.edu.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
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
var sketchStyle={
  width: '400px',
  marginTop: '200px',
  marginLeft:'370px',
  display:'block'
};
var headStyle={
  width: '300px',
  display: 'block'
};
var tableStyle={
  width: '900px',
  marginLeft: '50px',
  marginTop:'-20px'
};
var titleStyle={
  fontFamily: 'avenir',
  fontSize: '40pt',
  fontWeight: '200'
};
var subtitleStyle={
  fontSize: '25pt',
  fontFamily: 'avenir',
  fontWeight: '100'
};
var descriptionStyle={
  fontFamily:'avenir',
  fontWeight: '100',
  width: '320px',
  marginLeft:'15px'
};
var rowSpacer={
  height: '100px'
};

React.render(
  <App />,
  document.getElementById('react')
);