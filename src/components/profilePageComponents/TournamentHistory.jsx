import React from 'react';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TournamentHistory = () => {
    const { t } = useTranslation();

    const history = [
        { year: '2021 - Grupo 2', team: 'Andrés Herrera / Gerardo Velado' },
        { year: '2022 - Grupo 17', team: 'Andrés Herrera / Gerardo Velado' },
        { year: '2023 - Grupo 8', team: 'Andrés Herrera / Gerardo Velado' },
        { year: '2024 - Grupo 4', team: 'Andrés Herrera / Gerardo Velado' },
    ];

    return (
        <div className="p-6 text-white bg-black rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">{t('tournamentHistory')}</h3>
            <div className="py-3 text-black bg-white">
                <table className="w-full text-sm table-auto">
                    <thead className="text-black bg-white">
                        <tr>
                            <th className="p-2">{t('tournament')}</th>
                            <th>{t('teams')}</th>
                            <th>{t('pj')}</th>
                            <th>{t('pg')}</th>
                            <th>{t('pp')}</th>
                            <th>{t('pts')}</th>
                            <th>{t('saf')}</th>
                            <th>{t('sec')}</th>
                            <th>{t('difS')}</th>
                            <th>{t('jaf')}</th>
                            <th>{t('jec')}</th>
                            <th>{t('difJ')}</th>
                            <th>{t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((row, index) => (
                            <tr key={index} className="text-center">
                                <td className="p-2">{row.year}</td>
                                <td>{row.team}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td><VisibilityIcon style={{ fontSize: 24, color: '#555' }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center mt-4 text-sm">
                    <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">
                        {t('previous')}
                    </button>
                    <button className="px-3 py-1 mx-1 text-black bg-orange-400 rounded-xl">1</button>
                    <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">2</button>
                    <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">3</button>
                    <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">
                        {t('next')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TournamentHistory;
