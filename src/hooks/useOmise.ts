import { toast } from '@backpackapp-io/react-native-toast';
import { OMISE_PUBLIC_KEY, OMISE_SECRET_KEY } from '@env';
import Omise from 'omise-react-native';
import { CardProps } from 'store/useCardStore';

export const useOmise = () => {
  const setup = () =>
    Omise.config(OMISE_PUBLIC_KEY, OMISE_SECRET_KEY, '2017-11-12');
  const createToken = ({ number, name, exp }: Omit<CardProps, 'id'>) => {
    const data = Omise.createToken({
      card: {
        name,
        number,
        expiration_month: Number(exp.split('/')[0]),
        expiration_year: Number(exp.split('/')[1]),
      },
    });
    return data;
  };
  const createCharge = (token: string) => {
    const data = Omise.createCharge({
      amount: Math.floor(Math.random() * 100000),
      currency: 'thb',
      card: token,
    });
    toast.promise(
      data,
      {
        loading: 'Loading...',
        success: (data: Record<string, any>) => {
          return `Card ending with ${
            data.card.last_digits
          } has been charged by ${data.amount / 100} THB`;
        },
        error: () => 'Unable to charge the card',
      },
      {
        height: 80,
      },
    );
    return data;
  };

  return {
    setup,
    createToken,
    createCharge,
  };
};
