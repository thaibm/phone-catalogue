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
  isLoading: null
});
export const PhoneListPageProvider = ({ children }) => {
  const phones = useSelector(phonesSelectors.selectPhonesInPhoneList);
  const error = useSelector(phonesSelectors.selectPhonesError);
  const loading = useSelector(phonesSelectors.selectPhonesLoading);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const contextValue = useMemo(
    () => ({
      phones,
      error,
      loading,
      isLoading
    }),
    [
      phones,
      error,
      loading,
      isLoading
    ]
  );
  useEffect(() => {
    if (loading === 'idle') {
      setTimeout(() => {
        setLoading(false);
        dispatch(phonesActions.fetchPhone());
      }, 500);
    }
  }, [loading]);

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
