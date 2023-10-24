import BackgroundImg from '../components/BackgroundImg';
import Header from '../components/Header';
import Content from '../components/Content';

function layout() {
	return (
		<div className=" flex flex-col sm:flex-row">
			<Header className="sm:hidden" />
			<Content />
			<BackgroundImg />
		</div>
	);
}

export default layout;
