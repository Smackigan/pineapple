import BackgroundPart from '../components/BackgroundPart';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ContentPart from '../components/ContentPart';

function layout() {
	return (
		<div className=" flex flex-col ">
			<ContentPart />
			<BackgroundPart />
		</div>
	);
}

export default layout;
