import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : { //IN CASE SOMETHING IS NOT PASSED DOWN THROUGH PROPS
        name: '',
        budget: 0,
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.prevenDefault();
    this.props.onComplete(this.state);
  }

  //this.props.buttonText SO THAT IT DYNAMIC, CAN DO CHANGE/SUBMIT/UPDATE/LEAVE ETC
  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          value={this.state.title}
          onChange={this.handleChange} />
        <input 
          type='number'
          name='budget'
          value={this.state.title}
          onChange={this.handleChange} />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;