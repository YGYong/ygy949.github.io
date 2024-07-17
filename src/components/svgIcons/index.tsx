import React from "react";

interface SvgIconProps {
  icon: string;
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  className,
  width,
  height,
  color,
}) => {
  const IconComponent = React.lazy(
    () => import(`@/assets/icons/${icon}.svg`)
  ) as React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>;

  return (
    <React.Suspense fallback={null}>
      <IconComponent
        className={className}
        width={width}
        height={height}
        fill={color}
      />
    </React.Suspense>
  );
};

export default SvgIcon;
