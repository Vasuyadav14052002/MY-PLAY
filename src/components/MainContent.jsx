import React from 'react';
import batmentan from "../logos/batmentan.jpg";
import brandLogo from "../logos/brandLogo.png";
import { useTranslation } from 'react-i18next';

const MainContent = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex-1 min-h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src={batmentan}
                alt="Padel Background"
                className="absolute inset-0 z-0 object-cover w-full h-full"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />

            {/* Content Layer */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
                <div className="w-full md:w-4/5">
                    <h1
                        className="text-5xl font-bold text-transparent md:text-8xl"
                        style={{ WebkitTextStroke: '1px white' }}
                    >
                        {t('welcome')}
                    </h1>
                </div>
                <img
                    src={brandLogo}
                    alt="Padel Pro Orange Logo"
                    className="object-cover w-20 h-20 mt-10 rounded-full"
                />
            </div>
        </div>
    );
};

export default MainContent;
