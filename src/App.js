import { Route, Routes } from 'react-router-dom';
import { Albums } from './pages/albums';
import { Photos } from './pages/photos';
import { MainLayout } from './components/layout';

export function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<Albums />} />
				<Route path="/photos" element={<Photos />} />
			</Route>
		</Routes>
	);
}
