import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TournamentTabs = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('Grupos');

    return (
        <div className="flex items-center mb-6 text-sm font-medium bg-white rounded-md">
            <button
                onClick={() => setActiveTab('Grupos')}
                className={`px-6 py-2 rounded-l-md ${activeTab === 'Grupos' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-black'
                    }`}
            >
                {t('groups')}
            </button>
            <button
                onClick={() => setActiveTab('Brackets')}
                className={`px-6 py-2 rounded-r-md ${activeTab === 'Brackets' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-black'
                    }`}
            >
                {t('brackets')}
            </button>
        </div>
    );
};

export default TournamentTabs;
