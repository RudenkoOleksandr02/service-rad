import './styles/App.css'
import Header from "./components/common/Header/Header";
import ModalContactForm from "./components/common/ModalContactForm/ModalContactForm";
import {useEffect, useState} from "react";
import ModalSuccess from "./components/common/ModalSuccess/ModalSuccess";
import Footer from "./components/common/Footer/Footer";
import {connect, Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {getContacts} from "./store/contacts-reducer";
import Preloader from "./components/UI/preloader/preloader";
import ScrollToTop from "./ScrollToTop";
import {getFaq} from "./store/questions-reducer";
import {getCategories} from "./store/categories-reducer";
import {getServices} from "./store/services-reducer";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

function App({getContacts, getFaq, getCategories, getServices}) {
    const [isContactsLoading, setIsContactsLoading] = useState(true);
    const [isFaqLoading, setIsFaqLoading] = useState(true);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
    const [isServicesLoading, setIsServicesLoading] = useState(true)

    useEffect(() => {
        setIsContactsLoading(true)
        setIsFaqLoading(true)
        setIsCategoriesLoading(true)
        setIsServicesLoading(true)
        getContacts()
            .then(() => setIsContactsLoading(false))
        getFaq()
            .then(() => setIsFaqLoading(false))
        getCategories()
            .then(() => setIsCategoriesLoading(false))
        getServices()
            .then(() => setIsServicesLoading(false))
    }, []);

    if (isContactsLoading || isFaqLoading || isCategoriesLoading || isServicesLoading) return <Preloader/>

    return (
        <div className="wrapper">
            <HelmetProvider>
                <Helmet>
                    <title>Service_Rad</title>
                    <meta name="description"
                          content="Сучасне обладнання для ветеринарії: рентгенівські детектори, випромінювачі, стоматологічні рентгени та електрокоагулятори. Вдосконалюйте вашу клініку з надійними рішеннями!"
                    />
                    <meta name="keywords"
                          content="ветеринарні рентгени, рентген для тварин, діагностика тварин рентгеном, сучасне ветеринарне обладнання, стоматологічні рентгени для тварин, електрокоагулятори для ветеринарії, обладнання для ветеринарних клінік, діагностичне обладнання для тварин, високоточне ветеринарне обладнання, інновації у ветеринарній медицині"
                    />
                </Helmet>
                <Header/>
                <AppRouter/>
                <Footer/>
                <ModalContactForm/>
                <ModalSuccess/>
            </HelmetProvider>
        </div>
    );
}

const ContainerApp = connect(null, {
    getContacts,
    getFaq,
    getCategories,
    getServices
})(App);
const RedSiteApp = () => {
    return <BrowserRouter>
        <ScrollToTop/>
        <Provider store={store}>
            <ContainerApp/>
        </Provider>
    </BrowserRouter>
}


export default RedSiteApp;
