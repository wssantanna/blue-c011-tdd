import { Outlet } from "react-router-dom";

import { AuthorizateContextProvider } from './providers/AutorizateProvider';

function App() {
	return (
		<AuthorizateContextProvider>
			<Outlet />
		</AuthorizateContextProvider>
	);
}

export default App;
