export const statusType: {
  default: string;
  success: string;
  warning: string;
  info: string;
} = {
  default: 'gray',
  success: 'green',
  info: 'blue',
  warning: 'red',
};

interface statusObject {
  status: string;
  color: string;
}

export type getColorType = (statusProp: string) => statusObject;
