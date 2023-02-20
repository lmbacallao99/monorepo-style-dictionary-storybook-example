import { getColorType, statusType } from './types';

export const getColor: getColorType = (statusProp) => {
  const [status, value]: string[] = Object.entries(statusType)
    .filter((item: string[]): boolean => {
      return item.includes(statusProp);
    })
    .flat();
  return { status: status ?? 'default', color: value ?? statusType.default };
};
