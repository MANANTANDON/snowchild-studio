import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const HEADERMENU = [
  { name: "Projects", link: "/projects" },
  // { name: "About Us", link: "/aboutus" },
];

export const Header = ({ scrollToForm }) => {
  const [showBorder, setShowBorder] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      if (scrolled > 20) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => {
    if (router.asPath !== "/") {
      router.push("/");
      return;
    }
    setOpen(false);
    scrollToForm();
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 0, sm: 4 },
        mx: { xs: 0, sm: 0 },
        borderBottom: showBorder ? "1px solid #EDEDED" : "none",
        transition: "border-bottom 0.3s ease",
        bgcolor: "#fafafa",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }} component={"a"} href="/">
        <Image
          src="/images/studiologo.png"
          height={32}
          width={32}
          alt="Snowchild Studio Logo"
          unoptimized={true}
          style={{ borderRadius: "5px" }}
        />
        <Typography
          className="sf-pro-display-semibold"
          sx={{ fontSize: { xs: "20px", md: "26px" } }}
        >
          Snowchild Studio
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 2,
        }}
      >
        {HEADERMENU.map((item, key) => (
          <Typography
            className="sf-pro-display-regular"
            key={key}
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: router.asPath === item.link ? "#171717" : "#666666",
              bgcolor: router.asPath === item.link && "#ebebeb",
              borderRadius: "7px",
              py: 0.5,
              px: 1,
              "&:hover": { bgcolor: "#ebebeb" },
            }}
            component={"a"}
            href={item.link}
          >
            {item.name}
          </Typography>
        ))}
        <Button
          onClick={() => handleContact()}
          className="sf-pro-display-regular"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#171717",
            textTransform: "none",
            borderRadius: "7px",
            border: "1px solid #e6e6e6",
            bgcolor: "#FFFFFF",
            py: 0.5,
          }}
        >
          Contact us
        </Button>
      </Box>
      <IconButton
        sx={{ border: "1px solid #ebebeb", display: { sm: "none" } }}
        onClick={() => setOpen(true)}
      >
        <MenuRounded fontSize="small" />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="bottom"
        sx={{
          "& .MuiDrawer-paper": {
            height: "calc(100vh - 65px)",
            bgcolor: "#fafafa",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ border: "1px solid #ebebeb" }}
            >
              <CloseRounded />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Button
                onClick={() => handleContact()}
                fullWidth
                className="sf-pro-display-regular"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#171717",
                  textTransform: "none",
                  borderRadius: "7px",
                  border: "1px solid #e6e6e6",
                  bgcolor: "#FFFFFF",
                  py: 0.5,
                }}
              >
                Contact us
              </Button>
              {HEADERMENU.map((item, key) => (
                <Typography
                  className="sf-pro-display-regular"
                  key={key}
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#666666" }}
                  component={"a"}
                  href={item.link}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
