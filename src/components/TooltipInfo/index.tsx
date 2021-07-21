import React from "react";
import { Text } from "react-native";
import { Tooltip, TooltipProps } from "react-native-elements";

import colors from "../../styles/colors";
import { styles } from "./styles";

type Props = TooltipProps & {
  info: string;
};

export function TooltipInfo({ info, ...rest }: Props) {
  return (
    <Tooltip
      {...rest}
      popover={<Text>{info}</Text>}
      height={100}
      width={350}
      backgroundColor={colors.yellow}
    >
      <Text style={styles.circle}>?</Text>
    </Tooltip>
  );
}
