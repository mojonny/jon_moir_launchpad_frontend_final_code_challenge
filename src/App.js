import { Route, Routes } from 'react-router-dom';
import Albums from './pages/albums/Albums';
import Photos from './pages/photos/Photos';
import MainLayout from './components/layout/MainLayout';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<Albums />} />
				<Route path="/photos" element={<Photos />} />
			</Route>
		</Routes>
	);
}
