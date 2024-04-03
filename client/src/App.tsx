import "styles/App.scss";
import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "routes/routes";

const App: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={routes} />
		</Suspense>
	);
};

export default App;
