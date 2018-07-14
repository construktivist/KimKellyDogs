import React from "react"

const BackgroundImage = React.createClass({
  componentWillMount:function(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.setState({x:x,y:y});
  },
  render:function(){
    return (<div><img className='bg' src={'./assets/images/kim_kelly_home_bg.png'} /></div>)
  }
});

module.exports = BackgroundImage;
