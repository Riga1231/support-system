import React, { useState } from "react";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import { Button, MenuItem, Stack, Box, Typography } from "@mui/material";

export default function Form({
  fields,
  onSubmit,
  title = "Form",
  submitLabel = "Submit",
  hasClear = false,
  submitError = "",
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData(
      fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {})
    );
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {submitError != "" && (
        <Typography
          color="error"
          textAlign="center"
          variant="body2"
          gutterBottom
        >
          {submitError}
        </Typography>
      )}
      <Stack spacing={2}>
        {fields.map((field, index) =>
          field.type === "select" ? (
            <SelectValidator
              key={index}
              label={field.label}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              validators={field.validators}
              errorMessages={field.errorMessages}
              fullWidth
            >
              {field.options.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectValidator>
          ) : (
            <TextValidator
              key={index}
              label={field.label}
              name={field.name}
              type={
                field.type === "textarea" ? undefined : field.type || "text"
              }
              placeholder={field.placeholder || ""}
              value={formData[field.name]}
              onChange={(e) => {
                // For number type with maxDigits
                if (field.type === "number" && field.maxDigits) {
                  if (e.target.value.length > field.maxDigits) return; // prevent extra input
                }
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              validators={field.validators}
              errorMessages={field.errorMessages}
              fullWidth
              multiline={field.type === "textarea"}
              minRows={field.type === "textarea" ? 3 : undefined}
              inputProps={{
                ...(field.maxLength ? { maxLength: field.maxLength } : {}),
                ...(field.type === "number" && field.maxDigits
                  ? { inputMode: "numeric", pattern: "[0-9]*" }
                  : {}),
              }}
            />
          )
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          {hasClear && (
            <Button color="inherit" onClick={handleClear}>
              Clear
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth={!hasClear}
          >
            {submitLabel}
          </Button>
        </Box>
      </Stack>
    </ValidatorForm>
  );
}
