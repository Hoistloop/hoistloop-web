import * as Icons from "react-icons/fa"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons
import * as IconsSi from "react-icons/si"; // Puedes cambiar 'fa' por cualquier otra librería de react-icons

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
    <div className="flex">
      {brands.map((brand, index) => {
        const IconComponent = getIconComponent(brand.type);
        return (
          <IconComponent
            key={index}
            size={brand.size || 40}
            color={brand.color || "#000"}
          />
        );
      })}
    </div>
  );
};
export const getIconComponent = (type: string) => {
  const IconComponent =
    Icons[type as keyof typeof Icons] || IconsSi[type as keyof typeof IconsSi];
  if (!IconComponent) {
    throw new Error(`Icon ${type} not found`);
  }
  return IconComponent;
};
export default BrandsSection;
