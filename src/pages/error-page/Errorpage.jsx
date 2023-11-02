import { useRouteError } from 'react-router-dom';

function Errorpage() {
	const error = useRouteError();
	console.log(error);

	return (
		<div id="error-page">
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}

export default Errorpage;
