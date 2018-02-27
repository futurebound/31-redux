import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';

class Dashboard extends React.Component {
  render() {
    return(
      <section>
        <h1>Welcome to your personal poverty reminder</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate} />

        {this.props.categories ?
          this.props.categories.map(category =>
            <div key={category.id}>
              <h3>{category.title}</h3>
            </div>)
          :
          undefined
        }
      </section>
    );
  }
}

//maps to be this.props.category
const mapStateToProps = state => ({
  category: state,
});

//WRAP IN PARENS () B/C WE RETURNING AN OBJECT
const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
  // dashboardCategoryCreate is now on dashboard.props.dCC or this.props.dCC
  // category comes from form data
  // returns a function thats invoked
  // that calls ACTION categoryCreate
  // that takes category as an argument
});

//THESE DO NEED TO BE IN THIS ORDER, configuring dashboard to be exported properly
//REUSE THESE FOR EVERY COMPONENT THAT NEEDS ACCESS TO STORE, JUST SWAP OUT DASHBOARD FOR THEIR COMPONENT NAME
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);