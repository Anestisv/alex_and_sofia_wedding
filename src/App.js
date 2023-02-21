import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import { PhotosPage } from './pages/PhotosPage';
import { ContactPage } from './pages/ContactPage';
import { RsvpPage } from './pages/RsvpPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { NavBar } from './components/NavBar';
import { VerticalBar } from './components/VerticalBar';
import { useTranslation } from 'react-i18next';
import { commonColors } from './assets/design/CommonColors';
import { Questions } from './components/Questions';
import { Footer } from './components/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTopButton } from './components/ScrollTopButton';
import { allRoutes } from './assets/routes';


export const App = () => {

	return (
		<Router>
			<ScrollToTop />
			<AppContainer >
				<Routes>
					<Route path={allRoutes.home} element={<Layout children={<HomePage />} />} />
					<Route path={allRoutes.details} element={<Layout children={<DetailsPage />} />} />
					<Route path={allRoutes.rsvp} element={<Layout children={<RsvpPage />} />} />
					<Route path={allRoutes.photos} element={<Layout children={<PhotosPage />} />} />
					<Route path={allRoutes.contact} element={<Layout children={<ContactPage />} />} />
					<Route path={allRoutes.noroute} element={<NotFoundPage />} />
				</Routes>
			</AppContainer>
		</Router >
	);
}

const Layout = ({children}) => {

	return (
		<>
			<NavBar />
			<MainContainer>
				<LeftVerticalBar />
				<MainContent>
					{children}
					<Questions />
					<Footer />
					<ScrollTopButton />
				</MainContent>
				<RightVerticalBar />
			</MainContainer>
		</>
	);
}
const AppContainer =  styled('div')({
  	boxSizing: "border-box",
  	margin: 0,
	padding: 0,
	whiteSpace: 'pre-line'
});

const MainContainer = styled('div')({
	display: 'flex',
	width: '100%',
	backgroundColor: commonColors.white,
})

const MainContent = styled('main')({
	flex: 5,
	width: '100%',
	margin: 0,
	padding: '2.5rem 0 0 0'
})

const LeftVerticalBar = () => {

	const { t } = useTranslation( ["common"] );

	return (
		<VerticalBar text={t( "common:left_bar_date" ).toUpperCase()} rotate={'left'} float={'left'} />
	)
}

const RightVerticalBar = () => {

	const { t } = useTranslation( ["translation"] );

	return (
		<VerticalBar text={t("translation:sidebars.it's_a_celebration").toUpperCase()} rotate={'right'} float={'right'} />
	)
}



export const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect( () => {
		document.documentElement.scrollTo(0, 0);
	}, [pathname] );

	return null;
}