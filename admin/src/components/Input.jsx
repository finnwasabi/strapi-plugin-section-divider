import { Box, Typography } from "@strapi/design-system";

const Input = (props) => {
  // Debug: log all props to see what contains the label
  console.log("Section Divider Props:", props);

  const { name, attribute, intlLabel, label: propsLabel } = props;

  // Try different sources for label
  const displayLabel =
    propsLabel ||
    intlLabel?.defaultMessage ||
    intlLabel?.id ||
    attribute?.label ||
    name;

  return (
    <Box
      width="100%"
      style={{
        gridColumn: "1 / -1",
      }}
    >
      {/* Top divider separator */}
      <Box
        marginBottom={8}
        style={{
          borderTop: "1px solid var(--strapi-neutral-200)",
        }}
      />

      {/* Section header box */}
      <Box
        marginBottom={0}
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={3}
        paddingRight={3}
        background="neutral100"
        style={{
          borderBottom: "1px solid var(--strapi-neutral-200)",
        }}
      >
        <Typography
          variant="omega"
          textColor="neutral800"
          fontWeight="semiBold"
          as="div"
        >
          {displayLabel}
        </Typography>
      </Box>
    </Box>
  );
};

export default Input;
