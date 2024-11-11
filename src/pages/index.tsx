import { Button } from '@/components/ui/button';
import { GET_RESERVATIONS } from '@/graphql/query/reservation';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { Reservation } from '../types/booking';

export default function Home() {

  const { loading, error, data } = useQuery<Reservation[]>(GET_RESERVATIONS);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className='flex justify-center items-center'>
      <Button>Button</Button>
    </div>
  );
}
