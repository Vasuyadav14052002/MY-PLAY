import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import brand from "../logos/brand.png";
import { useTranslation } from 'react-i18next';

const Topbar = ({ currentPage }) => {
    const { i18n, t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang) => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
        setAnchorEl(null);
    };

    const getTitle = (page) => {
        switch (page) {
            case 'profile':
                return t('profile');
            case 'tournament':
                return t('tournament');
            default:
                return t('welcome');
        }
    };

    const flags = {
        en: 'https://flagcdn.com/us.svg',
        es: 'https://flagcdn.com/es.svg'
    };

    const langLabels = {
        en: 'English',
        es: 'Español'
    };

    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    return (
        <AppBar
            position="static"
            className="bg-[#0e0e0e] shadow-none"
            sx={{ zIndex: 1201, height: 64, justifyContent: 'center' }}
        >
            <Toolbar className="flex justify-between px-8 bg-slate-900">
                {/* Left: Title */}
                <Typography variant="h6" className="text-white">
                    {getTitle(currentPage)}
                </Typography>

                {/* Center: Logo */}
                <div className="absolute transform -translate-x-1/2 left-1/2">
                    <img
                        src={brand}
                        alt="Padel Pro Logo"
                        className="h-6 md:h-8 opacity-1"
                    />
                </div>

                {/* Right: Language Switcher */}
                <div>
                    <Button
                        onClick={handleClick}
                        className="text-white normal-case"
                        startIcon={
                            <img
                                src={flags[currentLang]}
                                alt={currentLang}
                                className="w-5 h-5 rounded-full"
                            />
                        }
                    >
                        {langLabels[currentLang]}
                    </Button>
                    <Menu
                        id="lang-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {['en', 'es'].map((lang) => (
                            <MenuItem key={lang} onClick={() => handleClose(lang)}>
                                <img
                                    src={flags[lang]}
                                    alt={lang}
                                    className="w-5 h-5 mr-2 rounded-full"
                                />
                                {langLabels[lang]}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
