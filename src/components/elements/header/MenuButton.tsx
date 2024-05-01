import { faBars, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@yamada-ui/fontawesome";
import { Box, Text } from "@yamada-ui/react";

export const MenuButton = () => {

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center" gap="5px">
                <Icon icon={faBars}
                color={["white", "white"]}
            />
                <Text
                    fontSize="xs"
                    isTruncated
                    color={["white", "white"]}
                >
                    MENU
                </Text>
            </Box>
        </>
    );
}