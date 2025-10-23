import type { SharedProps } from '@/shared/models';
import type { IThemeTypeProps } from '@/shared/models/ThemedProps';

type WithColorTypeProps = SharedProps<HTMLDivElement> & IThemeTypeProps;

export const WithColorType = (props: WithColorTypeProps) => {
  const { color, className, ...rest } = props;

  const colorClass = color === 'light' ? 'text-black bg-white' : 'text-white bg-black';

  return (
    <div className={`${colorClass} ${className}`} {...rest}>
      {props.children}
    </div>
  );
};

export default WithColorType;
