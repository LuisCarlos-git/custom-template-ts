import { Switch, Route, RouteProps } from 'react-router-dom';
import Home from '../screens/Home';

type RoutesArray = RouteProps & {
  routename: string;
};

const Routes = () => {
  const routes: RoutesArray[] = [
    {
      routename: 'Home',
      component: Home,
      path: '/',
      exact: true
    }
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.routename} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
