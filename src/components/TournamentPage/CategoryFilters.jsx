import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CategoryFilters = () => {
    const { t } = useTranslation();

    const [filters, setFilters] = useState({
        todas: false,
        masculina: false,
        femenina: false,
        mixto: true,
    });

    const toggleFilter = (key) => {
        setFilters({ ...filters, [key]: !filters[key] });
    };

    return (
        <div className="p-4 mb-6 bg-white rounded-md">
            <p className="mb-2 text-sm font-semibold">{t('categoriesLevels')}</p>
            <div className="flex flex-wrap gap-4 text-sm">
                <label className="flex items-center gap-2 text-black">
                    <input
                        type="checkbox"
                        checked={filters.todas}
                        onChange={() => toggleFilter('todas')}
                        className="bg-white border border-black rounded size-4 accent-orange-500"
                    />
                    <span
                        className={`text-sm cursor-pointer transition-colors duration-200 ${filters.todas ? 'text-orange-500 font-semibold' : 'text-black'}`}
                        onClick={() => toggleFilter('todas')}
                    >
                        {t('all')}
                    </span>
                </label>

                <label className="flex items-center gap-2 text-black">
                    <input
                        type="checkbox"
                        checked={filters.masculina}
                        onChange={() => toggleFilter('masculina')}
                        className="bg-white border border-black rounded size-4 accent-orange-500"
                    />
                    <span
                        className={`text-sm cursor-pointer transition-colors duration-200 ${filters.masculina ? 'text-orange-500 font-semibold' : 'text-black'}`}
                        onClick={() => toggleFilter('masculina')}
                    >
                        {t('categoryMasculine')}
                    </span>
                </label>

                <label className="flex items-center gap-2 text-black">
                    <input
                        type="checkbox"
                        checked={filters.femenina}
                        onChange={() => toggleFilter('femenina')}
                        className="bg-white border border-black rounded size-4 accent-orange-500"
                    />
                    <span
                        className={`text-sm cursor-pointer transition-colors duration-200 ${filters.femenina ? 'text-orange-500 font-semibold' : 'text-black'}`}
                        onClick={() => toggleFilter('femenina')}
                    >
                        {t('categoryFeminine')}
                    </span>
                </label>

                <label className="flex items-center gap-2 text-black">
                    <input
                        type="checkbox"
                        checked={filters.mixto}
                        onChange={() => toggleFilter('mixto')}
                        className="bg-white border border-black rounded size-4 accent-orange-500"
                    />
                    <span
                        className={`text-sm cursor-pointer transition-colors duration-200 ${filters.mixto ? 'text-orange-500 font-semibold' : 'text-black'}`}
                        onClick={() => toggleFilter('mixto')}
                    >
                        {t('categoryMixed')}
                    </span>
                </label>
            </div>
        </div>
    );
};

export default CategoryFilters;
