var App = React.createClass({  
  render: function() {
    return (
      <div className="nav">
        <a name="#top"></a>
        <img src="imgs/menubar.svg"  style={navBarStyle} id ='navHeader'/>
        <ul style={navStyle} id = 'nav'>
          <li style={navItemStyle} id ="homeButton"><a href="#top"><img src="imgs/coffee.svg" style={logoStyle}/></a></li>
          <li style={navItemStyle}><a href="#top">intro</a></li>
          <li style={navItemStyle}><a href="#philosophy">philosophy</a></li>
          <li style={navItemStyle}><a href="#schedule">schedule</a></li>
          <li style={navItemStyle}><a href="#member">membership</a></li>
          <li style={navItemStyle}><a href="#contact">contact</a></li>
        </ul>
        <img src="imgs/sketchSmall.png" style={sketchStyle}/>
        <table style={tableStyle}>
          <tr>
            <td><h2 style={titleStyle}>Indulge<br></br>In Design</h2></td>
            <td><p style={descriptionStyle}>(InDe) is an exclusive community of artistically-oriented thinkers and creators obsessed with designing innovative solutions to people’s problems. By cultivating an environment rich in indulgence of interesting food, places, and experiences, members will learn to command creativity, innovation, and passion through a tight embrace of spontaneity, uncertainty, and risk—all in the name of anthropocentric design. </p></td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Philosophy</h2></td>
            <td>
              <a name="philosophy" id="philosophyAnchor"></a>
              <img src="imgs/philosophy.png" style={headStyle}/>
              <p style={descriptionStyle}>Indulging in the world around us enables us to create empathy-rich solutions through a first-hand understanding of humanity.</p>
              <p style={descriptionStyle}>We seek answers to the question “What makes us human?” and in doing so, we position ourselves to address human needs.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Schedule</h2></td>
            <td>
              <a name="schedule" id="scheduleAnchor"></a>
              <img src="imgs/schedule.png"  style={scheduleStyle}/>
              <p style={descriptionStyle}>Most events are spontaneous and impromptu—exactly how we like them. That being said, there will be a mandatory weekly creativity seshion every monday from 7:27PM till 10:27PM. We will have white boards and markers, cappuccinos, and high quality loose leaf tea. Occasionally, we’ll have some extra goodies.</p>
              <p style={descriptionStyle}>The spontaneous, impromptu things include road trips, dinners out, and random community-building activities. The idea is to experience things that will challenge assumptions we have around people and the world.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Membership</h2></td>
            <td>
              <a name="member" id="memberAnchor"></a>
              <img src="imgs/knight.png"  style={headStyle}/>
              <p style={descriptionStyle}>The common thread connecting all of our members is an overwhelming desire to find what makes us human and to use those answers to improve the human experience through intentious and purposeful design. To be a designer is to question how and why things are done the way they are and to find better ways to do those things. Design is optimizing for circumstance and context.</p>
              <p style={descriptionStyle}>All members have completed the <a href="files/YoungDesignersProgram.pdf" id="pdfLink">Young Designers Program (YDP)</a> that is designed to communicate the culture of Indulge In Design while also fostering a community of learning and doing. There is no timeline for the process because it is a merit-based program. If you complete all requirements of the program, you become a member. It’s that simple. for an overview of the process.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr>
            <td><h2 style={subtitleStyle}>Contact</h2></td>
            <td>
              <a name="contact"></a>
              <img src="imgs/phone.png"  style={headStyle}/>
              <p style={descriptionStyle}>Text Aaron at (925)876-0497 with a picture of your favorite chair or door knob.</p>
            </td>
          </tr>
          <tr style={rowSpacer}></tr>
          <tr style={endSpacer}></tr>
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
  marginTop: '170px',
  marginLeft:'370px',
  display:'block'
};
var headStyle={
  width: '300px',
  display: 'block'
};
var scheduleStyle={
  display: 'block',
  width: '300',
  paddingLeft: '25px'
};
var tableStyle={
  width: '900px',
  marginLeft: '50px',
  marginTop:'-45px'
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
  width: '350px',
  marginLeft:'15px'
};
var rowSpacer={
  height: '100px'
};
var endSpacer={
  height: '50px'
};

React.render(
  <App />,
  document.getElementById('react')
);