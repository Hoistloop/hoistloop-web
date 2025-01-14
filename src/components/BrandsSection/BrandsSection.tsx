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
    <div
      className="relative mx-auto grid w-full max-w-[1596px] gap-6 border border-gray-700/20 p-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" }}
    >
      {brands.map((brand, index) => {
        const IconComponent = getIconComponent(brand.type);
        return (
          <div
            key={index}
            className="flex items-center justify-center  p-4"
          >
            <IconComponent
              size={50}
              color={brand.color || "#fff"}
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
