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
    <section
      className={`flex w-full flex-col items-center gap-1.5 self-stretch px-4 py-[50px] laptop:gap-2.5 laptop:px-[250px] laptop:py-[100px] desktop:gap-3.5 desktop:px-[300px] desktop:py-[120px]`}
    >
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
    </section>
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
