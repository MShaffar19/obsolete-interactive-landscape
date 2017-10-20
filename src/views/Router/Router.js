import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Layout from './../Layout/Layout';

import dataSet from './data/landscape_v24_jm.json';


const Routes = ({ }) => (
  <Switch>fire
    <Route
      exact
      path="/"
      render={props =>
        <CategoryView cat={0} {...props} data={dataSet} />
      }
    />
        
    <Route path="/filter" component={ResultsPanel} />
    <Route path="/home" component={Home} />
    <Route path="/gallery" component={Gallery} />

    <Route
      path="/orchestration_and_management/:id"
      render={props =>
        <SubCategoryView cat={0} {...props} data={dataSet} />
      }
    />
    <Route
      path="/orchestration_and_management"
      render={props =>
        <CategoryView cat={0} {...props} data={dataSet} />
      }
    />

    <Route
      path="/public_cloud/:id"
      render={props =>
        <SubCategoryView cat={1} {...props} data={dataSet} />
      }
    />
    <Route
      path="/public_cloud"
      render={props =>
        <CategoryView cat={1} {...props} data={dataSet} />
      }
    />

    <Route
      path="/provisioning/:id"
      render={props =>
        <SubCategoryView cat={2} {...props} data={dataSet} />
      }
    />
    <Route
      path="/provisioning"
      render={props =>
        <CategoryView cat={2} {...props} data={dataSet} />
      }
    />

    <Route
      path="/runtime/:id"
      render={props =>
        <SubCategoryView cat={3} {...props} data={dataSet} />
      }
    />
    <Route
      path="/runtime"
      render={props =>
        <CategoryView cat={3} {...props} data={dataSet} />
      }
    />

    <Route
      path="/app_definition_development/:id"
      render={props =>
        <SubCategoryView cat={4} {...props} data={dataSet} />
      }
    />
    <Route
      path="/app_definition_development"
      render={props =>
        <CategoryView cat={4} {...props} data={dataSet} />
      }
    />

    <Route
      path="/platform/:id"
      render={props =>
        <SubCategoryView cat={5} {...props} data={dataSet} />
      }
    />
    <Route
      path="/platform"
      render={props =>
        <CategoryView cat={5} {...props} data={dataSet} />
      }
    />

    <Route
      path="/observability_analysis/:id"
      render={props =>
        <SubCategoryView cat={6} {...props} data={dataSet} />
      }
    />
    <Route
      path="/observability_analysis"
      render={props =>
        <CategoryView cat={6} {...props} data={dataSet} />
      }
    />
      
  </Switch>
 
);


export default Routes;