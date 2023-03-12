import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DownloadButon from "../../../components/buttons/DownloadButton";
import BgImage2 from "../../../assets/img/home/bg-2.png";
import AiriASm from "../../../assets/img/logo/airia@sm.png";

export default function AiriASection() {
    return (
        <Box
            position={"absolute"}
            id="section-2-img-box"
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
                id="section-2-bg"
                left={0}
                top={0}
                zIndex={1}
            />
            <Box
                component={"img"}
                src={BgImage2}
                id="section-2-img"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)"
                }}
                zIndex={3}
                alt=""
            />

            <Box
                position="absolute"
                sx={{
                    bottom: 0,
                }}
                id="section-2-content"
                zIndex={4}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ ml: "12px" }}
                >
                    <Box
                        component={"img"}
                        src={AiriASm}
                        sx={{
                            width: "42px",
                            height: "42px"
                        }}
                        alt=""
                    />
                    <Typography
                        component="span"
                        id="airia-title"
                        sx={{
                            fontSize: "30px",
                            fontWeight: 600,
                            color: "#fff",
                            ml: 1.5
                        }}
                    >
                        AiriA
                    </Typography>
                </Box>

                <Typography
                    component="h2"
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
                    Galleries of<br />
                    tomorrow.
                </Typography>
                <DownloadButon
                    download="#"
                    explore="#"
                    id="airia-download"
                />
            </Box>
        </Box>
    )
}