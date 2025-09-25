"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { Layout } from "@/components/Layout/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        {/* Header */}
        <Card
          elevation={0}
          sx={{
            mb: 4,
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent sx={{ p: 2, textAlign: "center" }}>
            <Typography
              variant="h2"
              className="sf-pro-display-bold"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#666", fontSize: "0.9rem" }}
            >
              Last Updated: January 2025
            </Typography>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            className="sf-pro-display-semibold"
            sx={{ mb: 3, color: "#1a1a1a" }}
          >
            Welcome to Snowchild Studio
          </Typography>

          <Typography
            className="sf-pro-display-regular"
            sx={{ mb: 4, lineHeight: 1.7, color: "#555" }}
          >
            By using our website and services, you agree to these terms. Simple
            and straightforward.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Services */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Our Services
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555", lineHeight: 1.6 }}
            >
              We build custom websites and digital platforms. We provide demos,
              consultations, and technical support for your projects.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Your Responsibilities */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Your Part
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555", lineHeight: 1.6 }}
            >
              Provide us with accurate information, respond to our requests
              promptly, and make payments on time. Don't share illegal content.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Ownership */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Ownership
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555", lineHeight: 1.6 }}
            >
              Once you pay in full, the work is yours. We keep the right to
              showcase your project in our portfolio (unless you ask us not to).
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Privacy */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Privacy
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555", lineHeight: 1.6 }}
            >
              We respect your privacy and won't share your information with
              others without your permission.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Liability */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Limitations
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555", lineHeight: 1.6 }}
            >
              Our liability is limited to what you paid us. We're not
              responsible for indirect damages or issues beyond our control.
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Contact */}
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              p: 3,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              className="sf-pro-display-medium"
              sx={{ mb: 1, color: "#1a1a1a" }}
            >
              Questions?
            </Typography>
            <Typography
              className="sf-pro-display-regular"
              sx={{ color: "#555" }}
            >
              Visit <strong>snowchildstudio.com</strong> and use our "Talk to
              Us" section
            </Typography>
          </Box>
        </Paper>

        {/* Footer */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography
            className="sf-pro-display-regular"
            sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}
          >
            © 2025 Snowchild Studio. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default TermsAndConditions;
