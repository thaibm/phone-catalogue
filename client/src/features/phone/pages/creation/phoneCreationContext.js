import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { phoneActions, phoneSelectors } from './redux';

const PhoneCreatePageContext = createContext({
  phone: null,
  error: null,
  loading: null,
  createPhone: null
});
export const PhoneCreatePageProvider = ({ children }) => {
  const phone = useSelector(phoneSelectors.selectPhoneDetail);
  const error = useSelector(phoneSelectors.selectPhoneDetailError);
  const loading = useSelector(phoneSelectors.selectPhoneDetailLoading);
  const dispatch = useDispatch();

  const createPhone = async (phone) => {
    await dispatch(phoneActions.createNewPhone(phone));
  };

  const contextValue = useMemo(
    () => ({
      phone,
      error,
      loading,
      createPhone
    }),
    [
      phone,
      error,
      loading,
      createPhone
    ]
  );

  return (
    <PhoneCreatePageContext.Provider value={contextValue}>
      {children}
    </PhoneCreatePageContext.Provider>
  );
};

PhoneCreatePageProvider.propTypes = {
  children: PropTypes.any
};

export const usePhoneCreatePage = () => useContext(PhoneCreatePageContext);
export default usePhoneCreatePage;
