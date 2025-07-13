import React from 'react';
import BasicInfo from './BasicInfo';
import CurrentTournament from './CurrentTournament';
import TournamentHistory from './TournamentHistory';
import TabsBar from './Tabsbar';

const ProfilePage = () => {
    return (
        <div className="relative flex-1 w-full h-full px-8 py-8 overflow-y-auto text-white bg-gray-600">
            <TabsBar />
            <BasicInfo />
            <CurrentTournament />
            <TournamentHistory />
        </div>
    );
};

export default ProfilePage;
