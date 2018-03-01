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
      editing: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
  }

  handleDelete() {
    this.props.itemCategoryDelete(this.state.category);
  }

  handleEditing() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return (
      <div className='category-item'
        key={this.props.category.id}
        onDoubleClick={this.handleEditing}>
        <p>Name: {this.props.category.name}</p>
        <p>Budget: {this.props.category.budget}</p>
        <button onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.editing, 
          <CategoryForm
            category={this.props.category}
            buttonText='update'
            onComplete={this.props.itemCategoryUpdate}/>
        )}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  itemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  itemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);