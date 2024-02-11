import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authcontext';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
const {isAuthenticated} = useContext(AuthContext)
	return isAuthenticated?  children : <Navigate to='/login' />;
};

export default PrivateRoute;