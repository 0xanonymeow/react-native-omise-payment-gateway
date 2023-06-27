import { ToastPosition, toast } from '@backpackapp-io/react-native-toast';
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
    toast.promise(
      data,
      {
        loading: 'Loading...',
        success: () => 'Card has been added',
        error: () => 'Unable to add card',
      },
      {
        position: ToastPosition.TOP,
      },
    );
    return data;
  };
  const createCharge = () => {
    const data = Omise.createCharge({
      email: 'john.doe@example.com',
    });
    toast.promise(
      data,
      {
        loading: 'Loading...',
        success: () => 'Card has been charged',
        error: () => 'Unable to charge the card',
      },
      {
        position: ToastPosition.TOP,
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
