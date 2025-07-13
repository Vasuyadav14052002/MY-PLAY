import React from 'react';
import TournamentSelector from './TournamentSelector';
import TournamentTabs from './TournamentTabs';
import CategoryFilters from './CategoryFilters';
import TournamentTable from './TournamentTable';

const TournamentsPage = () => {
    return (
        <div className="relative flex-1 w-full h-full px-8 py-8 overflow-y-auto text-white bg-gray-600">
            <TournamentSelector />
            <TournamentTabs />
            <CategoryFilters />
            <TournamentTable />
        </div>
    );
};

export default TournamentsPage;
