import React, {
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { phoneActions, phoneSelectors } from './redux';

const PhoneCreatePageContext = createContext({
  phone: null,
  error: null,
  loading: null,
  createPhone: null
});
export const PhoneCreatePageProvider = ({ children }) => {
  const navigate = useNavigate();
  const phone = useSelector(phoneSelectors.selectPhoneCreateForm);
  const error = useSelector(phoneSelectors.selectPhoneCreationError);
  const loading = useSelector(phoneSelectors.selectPhoneCreationLoading);
  const dispatch = useDispatch();

  const createPhone = useCallback(async (values) => {
    const result = await dispatch(phoneActions.createNewPhone(values));
    if (!result.error) {
      navigate('/phones', { replace: true, state: { refresh: true } });
    }
  }, [navigate, dispatch]);

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
