export interface Brand {
  icon: React.ReactNode;
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
        return (
          <div
            key={index}
            className="flex items-center justify-center p-4"
          >
            {brand.icon}
          </div>
        );
      })}
    </div>
  );
};
export default BrandsSection;
