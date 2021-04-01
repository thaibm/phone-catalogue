import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  // useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { phoneDetailSelectors, phoneDetailActions } from './redux';

const PhoneDetailPageContext = createContext({
  phone: null,
  error: null,
  loading: null,
  handleUpdate: null
});
export const PhoneDetailPageProvider = ({ children }) => {
  const { id } = useParams();
  const phone = useSelector(phoneDetailSelectors.selectPhoneDetail);
  const error = useSelector(phoneDetailSelectors.selectPhoneDetailError);
  const loading = useSelector(phoneDetailSelectors.selectPhoneDetailLoading);
  const dispatch = useDispatch();

  const handleUpdate = async (values) => {
    await dispatch(phoneDetailActions.UpdatePhone({ id, payload: values }));
  };

  const contextValue = useMemo(
    () => ({
      phone,
      error,
      loading,
      handleUpdate
    }),
    [
      phone,
      error,
      loading,
      handleUpdate
    ]
  );
  useEffect(() => {
    dispatch(phoneDetailActions.fetchPhoneDetail(id));
    return () => {
      dispatch(phoneDetailActions.resetDetail());
    };
  }, [id]);

  return (
    <PhoneDetailPageContext.Provider value={contextValue}>
      {children}
    </PhoneDetailPageContext.Provider>
  );
};

PhoneDetailPageProvider.propTypes = {
  children: PropTypes.any
};

export const usePhoneDetailPage = () => useContext(PhoneDetailPageContext);
export default usePhoneDetailPage;
