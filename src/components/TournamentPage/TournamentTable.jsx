import React from 'react';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';

const tableData = Array(10).fill({
    teams: 'Andrés Herrera / Gerardo Velado',
});

const TournamentTable = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6 overflow-auto text-black bg-white rounded-lg">
            <h3 className="flex justify-center mb-3 text-lg font-semibold ">{t('groupTitle')}</h3>
            <table className="w-full text-sm table-auto">
                <thead className="text-black bg-white">
                    <tr>
                        <th className="p-2">{t('teams')}</th>
                        <th>{t('pj')}</th>
                        <th>{t('pg')}</th>
                        <th>{t('pp')}</th>
                        <th>{t('pts')}</th>
                        <th>{t('saf')}</th>
                        <th>{t('sec')}</th>
                        <th>{t('difs')}</th>
                        <th>{t('jaf')}</th>
                        <th>{t('jec')}</th>
                        <th>{t('difj')}</th>
                        <th>{t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} className="text-center border-b shadow-sm border-gray-50">
                            <td className="p-2 ">{row.teams}</td>
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

            {/* Pagination */}
            <div className="flex justify-center mt-4 text-sm">
                <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">{t('previous')}</button>
                <button className="px-3 py-1 mx-1 text-black bg-orange-400 rounded-xl">1</button>
                <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">2</button>
                <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">3</button>
                <button className="px-3 py-1 mx-1 text-black bg-gray-50 rounded-xl">{t('next')}</button>
            </div>
        </div>
    );
};

export default TournamentTable;
