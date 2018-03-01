import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        name: '',
        budget: '',
        editing: false,
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: '', budget: '', editing: false});
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='name' />
        <input 
          type='number'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange}
          placeholder='budget' />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;