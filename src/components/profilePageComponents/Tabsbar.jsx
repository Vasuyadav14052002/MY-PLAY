import React from 'react';
import { useTranslation } from 'react-i18next';

const TabsBar = () => {
    const { t } = useTranslation();

    return (
        <div className="flex gap-6 px-6 py-3 my-4 text-white bg-black rounded-lg">
            <p className="pb-1 font-semibold text-orange-500 border-b-2 border-orange-500">
                {t('summary')}
            </p>
            <p className="text-white">{t('generalData')}</p>
        </div>
    );
};

export default TabsBar;
