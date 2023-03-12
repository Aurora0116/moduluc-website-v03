import { ButtonBase } from "@mui/material";
import { styled } from "@mui/system";

interface StyledButtonBaseProps {
    readonly disableRipple?: boolean;
    readonly focusRipple?: boolean;
}

export const LinkBox = styled(ButtonBase)<StyledButtonBaseProps>(({ theme }) => ({
    display: "block",
    width: 52,
    height: 52,
    borderRadius: 12,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
        cursor: "pointer",
    },
    "&:active": {
        backgroundColor: theme.palette.action.selected,
    },
}));

export const CustomIconButton = styled(ButtonBase)<StyledButtonBaseProps>(({ theme }) => ({
    display: "block",
    width: 52,
    height: 52,
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
        backgroundColor: "rgba(45, 48, 57, 0.8)",
        boxShadow: "0px 0px 2px rgba(47, 50, 55, 0.4), 0 0 0 0.5px #777D88",
        backdropFilter: "blur(10px)"
    },
}));


