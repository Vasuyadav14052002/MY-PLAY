import React, { useState } from 'react';
import logo from "../logos/logo.png";
import play from "../logos/play.svg";
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
import SportsIcon from '@mui/icons-material/Sports';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const Sidebar = ({ onSelectPage }) => {
    const [openProfile, setOpenProfile] = useState(true);
    const [selected, setSelected] = useState({ parent: '', child: '' });
    const { t } = useTranslation();

    const handleParentClick = () => {
        setOpenProfile(!openProfile);
        setSelected({ parent: 'MyPlay', child: 'profile' }); // default to profile
        onSelectPage('profile');
    };

    const handleChildClick = (key) => {
        setSelected({ parent: 'MyPlay', child: key });
        onSelectPage(key);
    };

    const isActive = (key) => selected.child === key;
    const isMyPlayOpen = selected.parent === 'MyPlay';

    return (
        <Box
            className="bg-[#0f0d0d]"
            sx={{
                width: 270,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                overflow: 'hidden',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2b2b2b]">
                <img src={logo} alt="MyPlay" className="h-8" />
                <IconButton edge="end">
                    <KeyboardDoubleArrowLeftTwoToneIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>

            <List className="flex-grow">

                {/* My Play Section */}
                <Box
                    sx={{
                        backgroundColor: isMyPlayOpen ? '#f97316' : 'transparent',
                        borderRadius: '14px',
                        mx: 2,
                        mt: 2,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <ListItem
                        onClick={handleParentClick}
                        sx={{
                            color: 'white',
                            cursor: 'pointer',
                            py: 1.5,
                            px: 2,
                        }}
                    >
                        <ListItemIcon>
                            <img src={play} alt="Myplay" className="w-4 h-4" />
                        </ListItemIcon>
                        <ListItemText
                            primary={t('myPlay') || "My Play"}
                            primaryTypographyProps={{ fontWeight: 600, fontSize: 16 }}
                        />
                        <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 15 }} />
                    </ListItem>
                </Box>

                {/* My Play Sub Items */}
                <Collapse in={openProfile} timeout="auto" unmountOnExit>
                    <Box
                        sx={{
                            borderLeft: isMyPlayOpen ? '3px solid #f97316' : 'none',
                            ml: 4,
                            mt: 2,
                        }}
                    >
                        <List component="div" disablePadding>
                            {/* Mi Perfil */}
                            <ListItem
                                onClick={() => handleChildClick('profile')}
                                sx={{ cursor: 'pointer', py: 1 }}
                            >
                                <ListItemIcon>
                                    <PersonOutlineIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={t('profile') || "Mi perfil"}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: isActive('profile') ? '#f97316' : 'white',
                                            fontWeight: 600,
                                            fontSize: 16,
                                        },
                                    }}
                                />
                            </ListItem>

                            {/* Mis Torneos */}
                            <ListItem
                                onClick={() => handleChildClick('tournament')}
                                sx={{ cursor: 'pointer', py: 1 }}
                            >
                                <ListItemText
                                    primary={t('tournament') || "Mis Torneos"}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: isActive('tournament') ? '#f97316' : 'white',
                                            fontSize: 16,
                                        },
                                    }}
                                    sx={{ pl: 5 }}
                                />
                            </ListItem>

                            {/* Mis Partidos */}
                            <ListItem sx={{ cursor: 'pointer', py: 1 }}>
                                <ListItemText
                                    primary={t('matches') || "Mis Partidos"}
                                    primaryTypographyProps={{
                                        sx: {
                                            color: 'white',
                                            fontSize: 16,
                                        },
                                    }}
                                    sx={{ pl: 5 }}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Collapse>

                {/* Static Item - Torneos */}
                <ListItem
                    sx={{
                        cursor: 'pointer',
                        // px: 1,
                        // mt: 2,
                        // mx: 2,
                        borderRadius: '12px',
                    }}
                >
                    <ListItemIcon>
                        <EmojiEventsIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={t('tournaments') || "Torneos"}
                        primaryTypographyProps={{ sx: { fontSize: 16 } }}
                    />
                    <ArrowForwardIosIcon sx={{ color: 'white', fontSize: 16 }} />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
