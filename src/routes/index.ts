import ActualDataTab from '../pages/ActualDataTab';
import LoginPage from '../pages/LoginPage';
import PeriodDetailTab from '../pages/NestedTableTab';
import ReservationForecastTab from '../pages/ReservationForecast';

const routes = [
  { path: '/', component: ActualDataTab },
  { path: '/reservation', component: ReservationForecastTab },
  { path: '/period', component: PeriodDetailTab },
  { path: '/login', component: LoginPage, layout: null },
];

export { routes };
