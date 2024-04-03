import { FC, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// Pages
const Home = lazy(() => import("pages/Home"));

const Layout: FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

// Routes
const routes = createBrowserRouter([
	{ element: <Layout />, children: [{ path: "/", element: <Home /> }] },
]);

export default routes;
