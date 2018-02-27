import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-action';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';

class Dashboard extends React.Component {
  render() {
    return(
      <section>
        <h1>expense tracker</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate} />

        {this.props.category ?
          this.props.category.map(category =>
            <CategoryItem category={category} />)
          :
          undefined
        }
      </section>
    );
  }
};

const mapStateToProps = state => ({
  category: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);