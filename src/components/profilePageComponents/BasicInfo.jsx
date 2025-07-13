import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../logos/profile.jpg';

const BasicInfo = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-8 p-6 mb-6 bg-black rounded-lg">
            <img
                src={profile}
                alt={t('profilePhoto')}
                className="object-cover border-2 border-white rounded-full w-28 h-28"
            />
            <div className="text-white">
                <h2 className="mb-2 text-xl font-bold">{t('basicInfo')}</h2>
                <p><strong>{t('name')}:</strong> Donaldo Menjivar</p>
                <p><strong>{t('address')}:</strong> Calle El Manzano, Pol 85 Colonia Roma, San Salvador</p>
                <p><strong>{t('email')}:</strong> dmenjivar@ejemplo.com</p>
                <p><strong>{t('phone')}:</strong> 7896 - 1234</p>
            </div>
        </div>
    );
};

export default BasicInfo;
