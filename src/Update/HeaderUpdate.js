import React from "react";

class HeaderUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    // static getDerivedStateFromProps(props, state) {
    //   return {favoritecolor: props.favcol };
    // }

    // compoent should update
    shouldComponentUpdate() {
        return false;
      }
      
    
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  export default HeaderUpdate;
  