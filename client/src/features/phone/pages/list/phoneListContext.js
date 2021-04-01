import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { phonesActions, phonesSelectors } from './redux';
// import { useRouteMatch } from 'react-router-dom';

const PhoneListPageContext = createContext({
  phones: null,
  error: null,
  loading: null,
  isLoading: null,
  deletePhone: null
});
export const PhoneListPageProvider = ({ children }) => {
  const phones = useSelector(phonesSelectors.selectPhonesInPhoneList);
  const error = useSelector(phonesSelectors.selectPhonesError);
  const loading = useSelector(phonesSelectors.selectPhonesLoading);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const deletePhone = async (id) => {
    await dispatch(phonesActions.deletePhone(id));
  };

  const contextValue = useMemo(
    () => ({
      phones,
      error,
      loading,
      isLoading,
      deletePhone
    }),
    [
      phones,
      error,
      loading,
      isLoading,
      deletePhone
    ]
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch(phonesActions.fetchPhone());
    }, 500);
  }, [dispatch]);

  return (
    <PhoneListPageContext.Provider value={contextValue}>
      {children}
    </PhoneListPageContext.Provider>
  );
};

PhoneListPageProvider.propTypes = {
  children: PropTypes.any
};

export const usePhoneListPage = () => useContext(PhoneListPageContext);
export default usePhoneListPage;
