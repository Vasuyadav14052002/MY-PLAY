import React, { useState } from 'react';
import logo from "../logos/logo.png";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Collapse,
} from '@mui/material';

import { useTranslation } from 'react-i18next';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = ({ onSelectPage }) => {
    const [openProfile, setOpenProfile] = useState(true);
    const [selected, setSelected] = useState({ parent: '', child: '' });
    const { t } = useTranslation();

    const handleParentClick = () => {
        setOpenProfile(!openProfile);
        setSelected({ parent: 'MyPlay', child: '' });
        onSelectPage('');
    };

    const handleChildClick = (key) => {
        setSelected({ parent: 'MyPlay', child: key });
        onSelectPage(key);
    };

    const isActive = (key) => selected.child === key;

    return (
        <Box
            className="bg-[#1a1a1a]"
            sx={{
                width: 240,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
            }}
        >
            {/* Logo */}
            <div className="flex items-center justify-between p-3 border-b border-gray-700">
                <img src={logo} alt="MyPlay" className="h-9 opacity-4" />
                <IconButton edge="end" color="inherit">
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>

            <List className="flex-grow">
                {/* Parent Menu */}
                <ListItem
                    onClick={handleParentClick}
                    sx={{
                        bgcolor: selected.parent === 'MyPlay' ? '#f97316' : 'inherit',
                        color: 'white',
                        cursor: 'pointer',
                        '&:hover': {
                            bgcolor: selected.parent === 'MyPlay' ? '#f97316' : '#2a2a2a',
                        },
                    }}
                >
                    <ListItemIcon>
                        <PersonOutlineIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={t('myPlay')} />
                    {openProfile ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
                </ListItem>

                {/* Sub Items */}
                <Collapse in={openProfile} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem onClick={() => handleChildClick('profile')} sx={{ pl: 4, cursor: 'pointer' }}>
                            <ListItemIcon>
                                <SportsTennisIcon sx={{ color: isActive('profile') ? '#f97316' : 'white' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={t('profile')}
                                primaryTypographyProps={{ sx: { color: isActive('profile') ? '#f97316' : 'white' } }}
                            />
                        </ListItem>

                        <ListItem onClick={() => handleChildClick('tournament')} sx={{ pl: 4, cursor: 'pointer' }}>
                            <ListItemIcon>
                                <EventNoteIcon sx={{ color: isActive('tournament') ? '#f97316' : 'white' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={t('tournament')}
                                primaryTypographyProps={{ sx: { color: isActive('tournament') ? '#f97316' : 'white' } }}
                            />
                        </ListItem>

                        <ListItem sx={{ pl: 4, cursor: 'pointer' }}>
                            <ListItemIcon>
                                <SportsEsportsIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary={t('matches')} />
                        </ListItem>
                    </List>
                </Collapse>

                {/* Static item */}
                <ListItem sx={{ cursor: 'pointer' }}>
                    <ListItemIcon>
                        <EmojiEventsIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={t('tournaments')} />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
