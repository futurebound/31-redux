import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate} from '../../../actions/category-action';
import {categoryDelete} from '../../../actions/category-action';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : undefined,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.itemCategoryDelete(this.state);
  }

  render() {
    return (
      <div className='category-item'>
        <p>Name: {this.state.category.name}</p>
        <p>Budget: {this.state.category.budget}</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  itemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);