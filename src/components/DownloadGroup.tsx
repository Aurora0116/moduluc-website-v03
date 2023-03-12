import { Box, Button, IconButton, Typography } from "@mui/material";
import ModulucLogo from "../assets/img/logo/moduluc.png";
import AiriALogo from "../assets/img/logo/airia@sm.png";
import IslandLogo from "../assets/img/logo/island@sm.png";
import { Link } from "react-router-dom";
import { CornerDownIcon, CornerUpIcon, WindowIcon } from "./SvgIcons";

export default function DownloadGroup(props: {
    id?: string
}) {
    return (
        <Box
            id={props.id ? props.id : ""}
            sx={{
                p: 2,
                borderRadius: "20px",
                dispaly: "flex",
                gap: "10px",
                backgroundColor: "#2f31374d",
                backdropFilter: "blur(5px)",
                boxShadow: "0px 0px 2px 1px rgba(47, 50, 55, 0.4)",
                border: "0.5px solid rgba(241, 242, 244, 0.2)"
            }}
        >
            <Link to="/">
                <IconButton>
                    <Box
                        component={"img"}
                        src={ModulucLogo}
                        borderRadius={"12px"}
                        sx={{
                            width: "42px",
                            height: "42px"
                        }}
                    />
                </IconButton>
            </Link>
            <Button>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                            height: "42px",
                            paddingRight: "18px",
                            ml: 0.5,
                            borderRight: "2px solid rgba(255, 255, 255, 0.25)"
                        }}
                    >
                        <WindowIcon />
                    </Box>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: "24px",
                            letterSpacing: "-0.02px",
                            color: "#fff",
                            ml: "18px",
                            mr: "10px",
                            textTransform: "none"
                        }}
                    >
                        Download for Windows
                    </Typography>
                    <CornerUpIcon />
                </Box>
            </Button>
            <Button
                sx={{
                    ml: "10px"
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                            height: "42px",
                            paddingRight: "18px",
                            ml: 0.5,
                            borderRight: "2px solid rgba(255, 255, 255, 0.25)"
                        }}
                    >
                        <Box
                            component={"img"}
                            src={AiriALogo}
                            borderRadius={"12px"}
                            sx={{
                                width: "42px",
                                height: "42px"
                            }}
                        />
                    </Box>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: "24px",
                            letterSpacing: "-0.02px",
                            color: "#fff",
                            ml: "18px",
                            mr: "10px",
                            textTransform: "none"
                        }}
                    >
                        Upgrade your AiriA gallery
                    </Typography>
                    <CornerDownIcon />
                </Box>
            </Button>
        </Box>
    )
}