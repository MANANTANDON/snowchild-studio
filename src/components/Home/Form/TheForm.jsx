import {
  Box,
  Button,
  Grid,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { Typographyone } from "./TypographyOne";
import { CustomInputBase } from "./CustomInputBase";
import axios from "axios";

export const TheForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    website: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState("");

  // Regex patterns
  const patterns = {
    name: /^[a-zA-Z\s]+$/,
    companyName: /^[a-zA-Z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumber: /^[0-9]{1,10}$/,
    website:
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  };

  const handleChange = (field, value) => {
    // Clear submit status when user starts editing again
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }

    let newErrors = { ...errors };

    // Remove error when user starts typing
    if (newErrors[field]) {
      delete newErrors[field];
    }

    // Validation based on field - only restrict input for specific fields
    switch (field) {
      case "name":
        if (value && !patterns.name.test(value)) {
          newErrors[field] = "Name should only contain alphabets";
          setErrors(newErrors);
          return; // Don't update state if invalid
        }
        break;

      case "companyName":
        if (value && !patterns.companyName.test(value)) {
          newErrors[field] = "Company name should only contain alphabets";
          setErrors(newErrors);
          return; // Don't update state if invalid
        }
        break;

      case "phoneNumber":
        if (value && !/^[0-9]*$/.test(value)) {
          newErrors[field] = "Phone number should only contain digits";
          setErrors(newErrors);
          return; // Don't update state if invalid
        }
        if (value.length > 10) {
          return; // Don't update state if more than 10 digits
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);

    // Update form data - email, website, and query can be typed freely
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    // Required field validations
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!patterns.name.test(formData.name)) {
      newErrors.name = "Name should only contain alphabets";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!patterns.email.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.query.trim()) {
      newErrors.query = "Please tell us how we can help you";
    }

    // Optional field validations (only if filled)
    if (
      formData.companyName &&
      !patterns.companyName.test(formData.companyName)
    ) {
      newErrors.companyName = "Company name should only contain alphabets";
    }

    if (formData.phoneNumber && !/^[0-9]{1,10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Phone number should only contain digits (max 10)";
    }

    if (formData.website && !patterns.website.test(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous status
    setSubmitStatus(null);
    setSubmitMessage("");

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const res = await axios.post("/api/send-email", formData);

        if (res.data.success) {
          setSubmitStatus("success");
          setSubmitMessage(
            res.data.message || "Thank you! We'll get back to you soon."
          );

          // Reset form
          setFormData({
            name: "",
            companyName: "",
            email: "",
            phoneNumber: "",
            website: "",
            query: "",
          });
          setErrors({});

          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
            setSubmitMessage("");
          }, 5000);
        } else {
          setSubmitStatus("error");
          setSubmitMessage(
            res.data.message || "Something went wrong. Please try again."
          );
        }
      } catch (err) {
        console.error("Error submitting form:", err);

        // Handle different types of errors
        if (err.response) {
          // Server responded with error status
          setSubmitStatus("error");
          setSubmitMessage(
            err.response.data?.message ||
              `Server error (${err.response.status}). Please try again.`
          );
        } else if (err.request) {
          // Network error
          setSubmitStatus("error");
          setSubmitMessage(
            "Network error. Please check your connection and try again."
          );
        } else {
          // Other error
          setSubmitStatus("error");
          setSubmitMessage("Failed to submit the form. Please try again.");
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        {/* Success/Error Message */}

        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <Box>
            <Typographyone title="Name" />
            <CustomInputBase
              placeholder="Manan Tandon"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              disabled={isSubmitting}
            />
            {errors.name && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.name}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1, mt: { xs: 1, md: 0 } }}>
          <Box>
            <Typographyone title="Company Name" />
            <CustomInputBase
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              disabled={isSubmitting}
            />
            {errors.companyName && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.companyName}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1, mt: { xs: 1, md: 2 } }}>
          <Box>
            <Typographyone title="Email" />
            <CustomInputBase
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={isSubmitting}
            />
            {errors.email && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.email}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1, mt: { xs: 1, md: 2 } }}>
          <Box>
            <Typographyone title="Phone Number" secondaryText="optional" />
            <CustomInputBase
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              disabled={isSubmitting}
            />
            {errors.phoneNumber && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.phoneNumber}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ p: 1, mt: { xs: 1, md: 2 } }}>
          <Box>
            <Typographyone title="Website" secondaryText="optional" />
            <CustomInputBase
              placeholder="http://address.com"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              disabled={isSubmitting}
            />
            {errors.website && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.website}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ p: 1, mt: { xs: 1, md: 2 } }}>
          <Box>
            <Typographyone title="How can we help ?" />
            <CustomInputBase
              placeholder="Your Query"
              multiline={true}
              rows={4}
              maxLength={500}
              value={formData.query}
              onChange={(e) => handleChange("query", e.target.value)}
              disabled={isSubmitting}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 0.5,
              }}
            >
              {errors.query && (
                <Typography sx={{ color: "red", fontSize: "12px" }}>
                  {errors.query}
                </Typography>
              )}
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#666",
                  marginLeft: "auto",
                }}
              >
                {formData.query.length}/500
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={12} sx={{ p: 1, mt: 2 }}>
          {submitStatus && (
            <Grid size={12} sx={{ p: 1, mb: 2 }}>
              <Alert
                severity={submitStatus === "success" ? "success" : "error"}
                sx={{ borderRadius: "8px" }}
              >
                {submitMessage}
              </Alert>
            </Grid>
          )}
          <Button
            type="submit"
            fullWidth
            disabled={isSubmitting}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              bgcolor: isSubmitting ? "#ccc" : "#006BFF",
              color: "#FFFFFF",
              borderRadius: "30px",
              position: "relative",
              "&:hover": {
                bgcolor: isSubmitting ? "#ccc" : "#0056CC",
              },
            }}
            className="sf-pro-display-semibold"
          >
            {isSubmitting ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: "#fff" }} />
                Sending...
              </>
            ) : (
              "Talk to Us"
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
