import { FC, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// Pages
const Home = lazy(() => import("pages/Home"));
// Components
import Header from "components/Header";
import Footer from "components/Footer";

const Layout: FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

// Routes
const routes = createBrowserRouter([
	{ element: <Layout />, children: [{ path: "/", element: <Home /> }] },
]);

export default routes;
