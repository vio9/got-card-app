import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersoFull from "./components/PersoFull";
import Home from "./pages/Home";
import PersoDetail from "./components/PersoDetail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/:Id" element={<PersoFull />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
