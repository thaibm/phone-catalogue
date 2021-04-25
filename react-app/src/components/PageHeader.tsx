import { experimentalStyled, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

const PageHeaderWrapper = experimentalStyled(Box)(({ theme }) => ({
  marginBottom: 30,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const PageHeader = ({
  title,
  children,
}: {
  title: string;
  children?: JSX.Element;
}) => {
  return (
    <PageHeaderWrapper>
      <Typography variant='h1' sx={{ fontSize: '2rem', fontWeight: 400 }}>
        {title}
      </Typography>
      {children}
    </PageHeaderWrapper>
  );
};
