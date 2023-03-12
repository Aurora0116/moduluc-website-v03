import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const IconButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "grid",
    placeContent: "center",
    width: 52,
    minWidth: 0,
    minHight: 0,
    height: 52,
    padding: 0,
    borderRadius: 12,
    border: "0.5px solid rgba(241, 242, 244, 0.2)",
    background: "#F1F2F433",
    // boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4)",
    "&:hover": {
        backgroundColor: "rgba(46, 48, 56, 0.7)",
        cursor: "pointer",
        border: "none",
        boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4),0 0 0 4px rgba(241, 242, 244, 0.1)",
    },
    "&:active": {
        backgroundColor: "#F1F2F433",
        boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4), 0 0 0 0.5px #777D88",
        backdropFilter: "blur(10px)"
    },
    "&:disabled": {
        backgroundColor: " rgba(47, 49, 55, 0.4)",
        boxShadow: "0px 1px 1px rgba(47, 50, 55, 0.4)",
        backdropFilter: "blur(10px)",
        filter: "blur(1.5px)"
    },
}));

export default IconButton;
