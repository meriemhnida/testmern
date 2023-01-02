import React from 'react';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      brand: '',
      category: '',
      price: 0,
      countInStock: 0,
      rating: 0,
      numReviews: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:7000/save', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
        
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => {
           console.log(data);
          this.setState({
            name: '',
            image: '',
            description: '',
            brand: '',
            category: '',
            price: 0,
            countInStock: 0,
            rating: 0,
            numReviews: 0
          });
        })
        .catch(error => {
          console.error(error);
        });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Count in Stock:
          <input type="number" name="countInStock" value={this.state.countInStock} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Number of Reviews:
          <input type="number" name="numReviews" value={this.state.numReviews} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProductForm;
