import React from 'react';
import Layout from './layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about-page/Aboutpage';
import Contact from './pages/contact-page/Contactpage';
import HowItWorks from './pages/how-works-page/HowItWorkspage';
import SubscribeForm from './pages/subscribe-form-page/SubscribeFormpage';
import Errorpage from './pages/error-page/Errorpage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<SubscribeForm />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="*" element={<Errorpage />} />
			</Route>
		</Routes>
	);
}

export default App;
