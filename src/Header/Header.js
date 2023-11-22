import React from "react";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }

    // Component Did Mount
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
    //   

    // Derived from props
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol };  
    //   }
      

    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

  export default Header;