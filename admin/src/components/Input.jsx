import { Box, Typography, Divider } from "@strapi/design-system";

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
      <Divider marginBottom={8} />

      {/* Section header box */}
      <Box marginBottom={0} padding={3} background="neutral100" hasRadius>
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
