import { useContext } from 'react';
import Context from './Context';

export function useHistory() {
  return useContext(Context).history
}

export function useLoaction() {
  return useContext(Context).location
}

export function useRouteMatch() {
  return useContext(Context).match
}

export function useParams() {
  const match = useContext(Context).match
  return match ? match.params : {}
}