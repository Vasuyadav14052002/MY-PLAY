import React from 'react';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CurrentTournament = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6 mb-6 text-white bg-black rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">{t('currentTournament')}</h3>
            <div className="text-white bg-white">
                <h3 className="flex justify-center mb-3 text-lg font-semibold text-black">{t('groupTitle')}</h3>
                <table className="w-full text-sm text-black bg-white table-auto">

                    <thead className="text-black bg-white">
                        <tr>
                            <th className="p-2">{t('teams')}</th>
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
                        <tr className="text-center">
                            <td className="p-2">Andrés Herrera / Gerardo Velado</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentTournament;
