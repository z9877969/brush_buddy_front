import { setLoadingAction } from '@redux/loader/loaderSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useLocalRequest = () => {
  const dispatch = useDispatch();

  return useCallback(
    async (cb) => {
      try {
        dispatch(setLoadingAction(true));
        await cb();
      } catch (error) {
        // eslint-disable-next-line
        console.log(error.message);
      } finally {
        dispatch(setLoadingAction(false));
      }
    },
    [dispatch]
  );
};
