import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { phoneActions, phoneSelectors } from './redux';
import { useCallback } from 'react';

const PhoneCreatePageContext = createContext({
  phone: null,
  error: null,
  loading: null,
  createPhone: null
});
export const PhoneCreatePageProvider = ({ children }) => {
  const phone = useSelector(phoneSelectors.selectPhoneCreateForm);
  const error = useSelector(phoneSelectors.selectPhoneCreationError);
  const loading = useSelector(phoneSelectors.selectPhoneCreationLoading);
  const dispatch = useDispatch();

  const createPhone = useCallback((values) => {
    dispatch(phoneActions.createNewPhone(values));
  });

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
