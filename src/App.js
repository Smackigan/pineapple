import React from 'react';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about-page/Aboutpage';
import Contact from './pages/contact-page/Contactpage';
import HowItWorks from './pages/how-works-page/HowItWorkspage';
import Form from './pages/subscribe-form-page/Formpage';
import Errorpage from './pages/error-page/Errorpage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Form />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="*" element={<Errorpage />} />
			</Route>
		</Routes>
	);
}

export default App;
