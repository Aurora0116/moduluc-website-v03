import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const MenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    placeContent: "center",
    width: 72,
    height: 72,
    minWidth: 0,
    minHight: 0,
    padding: 8,
    color: theme.palette.text.secondary,
    borderRadius: 12,
    background: "rgba(119, 125, 136, 0.2)",
    boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4)",
    backdropFilter: "blur(10px)",
    '&:hover': {
        background: "rgba(119, 125, 136, 0.4)",
        boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4)",
    },
    '&:active': {
        background: "rgba(119, 125, 136, 0.6)",
        boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4)",
    },
    '&:disabled': {
        background: "transparent",
        boxShadow: "none",
        color: theme.palette.text.secondary,
    },
}));

export default MenuButton;
