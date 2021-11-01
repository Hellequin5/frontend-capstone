import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './overview/index.jsx';
import Questions from './questions/index.jsx';
import Reviews from './reviews/index.jsx';
import Product_Id_Context from './context.jsx';

function App() {
  var [product_id, setProduct_id] = useState(0);

  var singleItemRequest = (id) => {
    var config = {}
    if (id) {
      config = {
        method:'get',
        url:`http://localhost:10038/singleItemRequest`,
        params: {product_id: id}
      };
    } else {
      config = {
        method: 'get',
        url: 'http://localhost:10038/starting_product_id'
      }
    }
    axios(config)
      .then((resolveProductInfo) => {
          setProduct_id(product_id = resolveProductInfo.data.product_id)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  /* Use Effects second paramenter makes sure that it only runs when the app is mounted like component did mount */
  useEffect(() => {
    singleItemRequest();
  }, [])

  return (
    <div>
      <Product_Id_Context.Provider value={product_id}>
        <Overview/>
        <Questions/>
        <Reviews/>
      </Product_Id_Context.Provider>
    </div>
  )
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product_id: null
//     };
//     this.singleItemRequest = this.singleItemRequest.bind(this);
//     // this.getStartingPid = this.getStartingPid.bind(this);
//   }

//   componentDidMount() {
//     this.singleItemRequest();
//   }

//   singleItemRequest (id) {

//     var config = {}
//     if (id) {
//       config = {
//         method:'get',
//         url:`http://localhost:10038/singleItemRequest`,
//         params: {product_id: id}
//       };
//     } else {
//       config = {
//         method: 'get',
//         url: 'http://localhost:10038/starting_product_id'
//       }
//     }
//     axios(config)
//       .then((resolveProductInfo) => {
//         this.setState({
//           product_id: resolveProductInfo.data.product_id
//         })
//       })
//       .catch((err) => {
//         console.error(err);
//       })
//   }

//   render () {
//     return (
//       <div>
//         <Overview product_id={this.state.product_id} />
//         <Questions product_id={this.state.product_id} />
//         <Reviews product_id={this.state.product_id} />
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));