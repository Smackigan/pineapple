import Sidebar from '../components/Sidebar';
import BackgroundImg from '../components/BackgroundImg';

function layout() {
	return (
		<div className="flex ">
			<Sidebar />
			<BackgroundImg />
		</div>
	);
}

export default layout;
