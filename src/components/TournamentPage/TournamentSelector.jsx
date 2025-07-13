import React from 'react';
import { useTranslation } from 'react-i18next';

const TournamentSelector = () => {
    const { t } = useTranslation();

    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
                {t('selectTournament')}
            </label>
            <select className="w-full px-4 py-2 text-black bg-white border border-gray-500 rounded-md">
                <option value="padel2025">{t('tournament2025')}</option>
                {/* Add more options if needed */}
            </select>
        </div>
    );
};

export default TournamentSelector;
