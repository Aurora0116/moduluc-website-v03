import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DownloadButon from "../../../components/buttons/DownloadButton";
import BgImage3 from "../../../assets/img/home/bg-3.png";
import IslandSm from "../../../assets/img/logo/island@sm.png";

export default function IslandSection() {
    return (
        <Box
            bgcolor="#0B1418"
            id="section-3"
            sx={{
                height: "100vh"
            }}
        >
            <Box
                position={"absolute"}
                id="section-3-img-box"
                sx={{
                    width: 1200,
                    height: 647,
                    mx: "auto",
                    left: "50%",
                    position: "absolute",
                    top: 750,
                    transform: "translateX(-50%)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    pl: "36px",
                }}
            >
                <Box
                    position="absolute"
                    bgcolor="#26313666"
                    width="100%"
                    height="100%"
                    borderRadius="20px"
                    id="section-3-bg"
                    left={0}
                    top={0}
                    zIndex={1}
                />

                <Box
                    component={"img"}
                    src={BgImage3}
                    id="section-3-img"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 3,
                    }}
                    alt=""
                />

                <Box
                    position="absolute"
                    sx={{
                        bottom: 0,
                    }}
                    zIndex={4}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ ml: "12px" }}
                        id="section-3-content"
                    >
                        <Box
                            component={"img"}
                            src={IslandSm}
                            sx={{
                                width: "42px",
                                height: "42px"
                            }}
                            alt=""
                        />
                        <Typography
                            component="span"
                            sx={{
                                fontSize: "30px",
                                fontWeight: 600,
                                color: "#fff",
                                ml: 1.5
                            }}
                        >
                            island
                        </Typography>
                    </Box>

                    <Typography
                        component="h2"
                        position="relative"
                        id="section-3-title"
                        sx={{
                            fontSize: "72px",
                            fontWeight: 700,
                            color: "#fff",
                            lineHeight: 1,
                            mb: "42px",
                            mt: 3,
                            ml: "12px"
                        }}
                    >
                        Meet Island<br />
                        A place for community grawth.
                    </Typography>
                    <DownloadButon
                        download="#"
                        explore="#"
                        id="isalnd-download"
                    />
                </Box>
            </Box>
        </Box>
    )
}