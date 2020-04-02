import React from "react";

class DecComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render(props) {
    const { items } = this.props
    return (
      <div>
                {items}
      </div>
    );
  }
}
