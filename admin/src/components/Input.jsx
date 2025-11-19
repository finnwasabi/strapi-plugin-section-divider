import React from "react";
import { Box, Typography } from "@strapi/design-system";

const Input = ({ name, attribute, intlLabel }) => {
  // Priority: intlLabel (from metadata) > attribute.label > name
  const label = intlLabel?.defaultMessage || attribute?.label || name;

  return (
    <Box
      width="100%"
      style={{
        gridColumn: "1 / -1",
      }}
    >
      {/* Top border separator */}
      <Box
        marginBottom={6}
        borderColor="neutral200"
        style={{
          borderTop: "1px solid",
        }}
      />

      {/* Section header box */}
      <Box
        marginBottom={0}
        padding={3}
        background="neutral0"
        borderColor="neutral200"
        hasRadius
      >
        <Typography
          variant="omega"
          textColor="neutral800"
          fontWeight="semiBold"
          as="div"
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default Input;
