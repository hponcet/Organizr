import {
  IconPrefix,
  IconName,
  library,
} from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

type FontIconProps = Omit<FontAwesomeIconProps, "icon"> & {
  icon: IconName;
  prefix?: IconPrefix;
};

export function FontIcon(props: FontIconProps): React.JSX.Element {
  const { icon, prefix, ...rest } = props;
  return <FontAwesomeIcon icon={icon} {...rest} />;
}
