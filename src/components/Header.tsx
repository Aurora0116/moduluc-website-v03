import { Box, Typography } from "@mui/material";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import IconButton from "./buttons/IconButton";
import LinkButton from "./buttons/LinkButton";
import MenuButton from "./buttons/MenuButton";
import { DownloadIcon } from "./SvgIcons";
import ModulucLogo from "../assets/img/logo/moduluc.png";
import AiriASm from "../assets/img/logo/airia@sm.png";
import IslandSm from "../assets/img/logo/island@sm.png";

export default function Header() {
    const navigate = useNavigate();
    return (
        <Box position="fixed" sx={{ px: 3, py: 0, width: "100%", left: 0, top: 0, zIndex: 99 }}>
            <Box display="flex" justifyContent="space-between">
                <Link to={"/"}>
                    <LinkButton sx={{ mt: 3 }}>
                        <img
                            src={ModulucLogo}
                            width={52}
                            height={52}
                            style={{ borderRadius: 12 }}
                            alt="moduluc logo"
                        />
                    </LinkButton>
                </Link>
                <Box
                    display={"flex"}
                    border="0.5px solid rgba(119, 125, 136, 0.3)"
                    borderRadius={"18px"}
                    gap={1}
                    p={1}
                    bgcolor="rgba(47, 49, 55, 0.4)"
                    sx={{ my: "17px" }}
                >
                    {menuItems.map((item, key) => (
                        <MenuButton
                            key={key}
                            disabled={key > 1}
                            onClick={() => navigate(item.link)}
                        // onClick={() => navigation.push(item.link)}
                        >
                            <Box sx={{ p: 0, m: 0, display: "grid", placeContent: "center", filter: `${key < 2 ? "blur(0)" : "blur(1.5px)"}` }}>{item.icon}</Box>
                            <Typography
                                component={"span"}
                                fontSize={12}
                                lineHeight={1.2}
                                fontWeight={500}
                                textTransform="none"
                                mt={1}
                                sx={{ filter: `${key < 2 ? "blur(0)" : "blur(1.5px)"}` }}
                            >
                                {item.title}
                            </Typography>
                        </MenuButton>
                    ))}
                </Box>
                <Link to={"/"}>
                    <IconButton sx={{ mt: 3 }}>
                        <DownloadIcon />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
}

const menuItems = [
    {
        icon: <img src={AiriASm} alt="AiriA" width={34} height={34} />,
        title: "AiriA",
        link: "/airia"
    },
    {
        icon: <img src={IslandSm} alt="Island" width={34} height={34} />,
        title: "Island",
        link: "/island"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    },
    {
        icon: <Box width={34} height={34} bgcolor="#777" borderRadius={2} />,
        title: "Link",
        link: "#"
    }

]