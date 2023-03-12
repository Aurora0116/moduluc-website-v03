/* eslint-disable react/display-name */
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const LinkButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "grid",
    placeContent: "center",
    width: 52,
    minWidth: 0,
    minHight: 0,
    height: 52,
    padding: 0,
    borderRadius: 12,
    boxShadow: "none",
    "&:hover": {
        cursor: "pointer",
        boxShadow: "none",
        background: "transparent",
    },
    "&:active": {
        boxShadow: "none",
        background: "transparent",
    },
}));

export default LinkButton;
