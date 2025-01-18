import * as Icons from "react-icons/fa"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons
import * as IconsSi from "react-icons/si"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons
import * as IconsRi from "react-icons/ri"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons

export const getIconComponent = (type: string) => {
  const IconComponent =
    Icons[type as keyof typeof Icons] ||
    IconsSi[type as keyof typeof IconsSi] ||
    IconsRi[type as keyof typeof IconsRi];
  if (!IconComponent) {
    throw new Error(`Icon ${type} not found`);
  }
  return IconComponent;
};
