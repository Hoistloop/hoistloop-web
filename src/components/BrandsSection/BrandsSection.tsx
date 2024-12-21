import * as Icons from "react-icons/fa"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons
import * as IconsSi from "react-icons/si"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons
import * as IconsRi from "react-icons/ri"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons

export interface Brand {
  type: string;
  size?: number;
  color?: string;
}

export interface BrandsProps {
  brands: Array<Brand>;
}

const BrandsSection: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <div className="relative mx-auto flex h-44 w-full max-w-[1596px] items-center justify-center gap-x-7 overflow-hidden border border-gray-700/20 p-10">
      {brands.map((brand, index) => {
        const IconComponent = getIconComponent(brand.type);
        return (
          <div
            key={index}
            className="flex h-24 w-80 items-center justify-center"
          >
            <IconComponent
              size={40}
              color={brand.color || "#000"}
              aria-label={`icon-${brand.type}`}
            />
          </div>
        );
      })}
    </div>
  );
};

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
export default BrandsSection;
