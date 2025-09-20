import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Typographyone } from "./TypographyOne";
import { CustomInputBase } from "./CustomInputBase";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // Here you can add your API call or form submission logic
      alert("Form submitted successfully!");

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
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <Box>
            <Typographyone title="Name" />
            <CustomInputBase
              placeholder="Manan Tandon"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
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
          <Button
            type="submit"
            fullWidth
            sx={{
              textTransform: "none",
              fontSize: "16px",
              bgcolor: "#006BFF",
              color: "#FFFFFF",
              borderRadius: "30px",
            }}
            className="sf-pro-display-semibold"
          >
            Talk to Us
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
