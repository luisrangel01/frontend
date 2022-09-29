const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
  return (<div>
  <h1>{props.title}</h1>
  <p id="price">£{props.price}</p>
  <ul>
    <li><label>CPU</label> <span>{props.cpu}</span></li>
    <li><label>RAM</label> <span>{props.ram}</span></li>
    <li><label>SSD</label> <span>{props.ssd}</span></li>
  </ul>
  </div>);
};

// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
function withPriceModel(WrappedComponent, priceIncrease = 0) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        price: 50 + priceIncrease
      };
    }

    render() {
      return <WrappedComponent {...this.props} price={this.state.price}  />;
    }
  };
}


// Build basic and pro model components using `withPriceModel`
export const BasicModel = withPriceModel(
  PcDisplay
);

export const ProModel = withPriceModel(
  PcDisplay,
  60
);