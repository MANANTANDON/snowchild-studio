import { ArrowOutwardRounded } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export const ProjectTopCont = () => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          my: 5,
        }}
      >
        <Box sx={{ pb: 4 }}>
          <Typography
            className="sf-pro-display-bold"
            sx={{
              fontSize: { xs: "30px", sm: "42px", md: "52px" },
              textAlign: "center",
              background: "linear-gradient(135deg,  #171717 0%, #15416C 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "20px" },
              textAlign: "center",
              color: "#666666",
            }}
            className="sf-pro-display-light"
          >
            <i>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </i>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: { xs: "20%", md: "30%" },
            top: { xs: "43%", md: "42%" },
          }}
        >
          <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  flood-color="rgba(0,0,0,0.12)"
                />
              </filter>
            </defs>
            <path
              d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
              fill="#f50022"
              stroke="white"
              stroke-width="1.5"
              filter="url(#shadow)"
            />
          </svg>
        </Box>
        <Typography
          sx={{
            bgcolor: "#F50022",
            color: "#FFFFFF",
            borderRadius: "5px",
            px: 0.7,
            py: 0.3,
            position: "absolute",
            left: { xs: "13%", md: "21%" },
            top: { xs: "47%", md: "45%" },
            fontSize: { xs: "9px", md: "12px" },
          }}
        >
          {isMobile ? "NAI" : "News Arena India"}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: { xs: "18%" },
            top: { xs: "73%", md: "71%" },
          }}
        >
          <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  flood-color="rgba(0,0,0,0.12)"
                />
              </filter>
            </defs>
            <path
              d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
              fill="#F58643"
              stroke="white"
              stroke-width="1.5"
              filter="url(#shadow)"
            />
          </svg>
        </Box>
        <Typography
          sx={{
            bgcolor: "#F58643",
            color: "#FFFFFF",
            borderRadius: "5px",
            px: 0.7,
            py: 0.3,
            position: "absolute",
            left: { xs: "5%", md: "13%" },
            top: { xs: "77%", md: "74%" },
            fontSize: { xs: "9px", md: "12px" },
          }}
        >
          Bri Nandi
        </Typography>

        <Box
          sx={{
            position: "absolute",
            right: { xs: "15%", md: "17%" },
            top: { xs: "73%", md: "71%" },
          }}
        >
          <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  flood-color="rgba(0,0,0,0.12)"
                />
              </filter>
            </defs>
            <path
              d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z"
              fill="#7AC387"
              stroke="white"
              stroke-width="1.5"
              filter="url(#shadow)"
            />
          </svg>
        </Box>
        <Typography
          sx={{
            bgcolor: "#7AC387",
            color: "#FFFFFF",
            borderRadius: "5px",
            px: 0.7,
            py: 0.3,
            position: "absolute",
            right: { xs: "6%", md: "7%" },
            top: { xs: "76%", md: "74%" },
            fontSize: { xs: "9px", md: "12px" },
          }}
        >
          {isMobile ? "OOG" : "Overseas Oil & Gas"}
        </Typography>
        <Image
          src={"/images/project_img.png"}
          width={783}
          height={343}
          layout="intrinsic"
        />
        <Button
          className="sf-pro-display-semibold"
          endIcon={<ArrowOutwardRounded />}
          sx={{
            textTransform: "none",
            zIndex: 100,
            px: { xs: 2, sm: 5 },
            py: 1,
            borderRadius: "30px",
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: 500,
            transition: "all 0.3s ease",
            bgcolor: "#171717",
            color: "#FFFFFF",
            border: "1px solid #171717",
            mt: 5,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              bgcolor: "#2a2a2a",
            },
          }}
          onClick={() => router.push("/projects")}
        >
          View All Projects
        </Button>
      </Box>
    </>
  );
};
