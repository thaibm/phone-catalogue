import { experimentalStyled, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Phone } from '../store/phones/phoneReducer';

const Label = experimentalStyled(Typography)(({ theme }) => ({
  fontWeight: 900,
}));

const PhoneTitle = experimentalStyled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: 10,
  fontWeight: 700,
}));

const PhonePrice = experimentalStyled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  marginBottom: 30,
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const DetailText = experimentalStyled(Typography)(({ theme }) => ({
  color: '#4a4a4a',
}));

const PhoneDetails = ({ phone }: { phone: Phone }) => {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: 'flex' }}
        justifyContent='center'
      >
        <img
          style={{ width: '60%' }}
          alt='Phone'
          src='/static/images/phone-default-details.png'
        ></img>
      </Grid>
      <Grid item xs={12} sm={6}>
        <PhoneTitle variant='h1'>{phone.name}</PhoneTitle>
        <PhonePrice variant='h4'>{phone.price}$</PhonePrice>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Label variant='body1'>Manufacturer</Label>
          </Grid>
          <Grid item xs={8}>
            <DetailText variant='body1'>{phone.manufacturer}</DetailText>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Label variant='body1'>Screen</Label>
          </Grid>
          <Grid item xs={8}>
            <DetailText variant='body1'>{phone.screen}</DetailText>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Label variant='body1'>Ram</Label>
          </Grid>
          <Grid item xs={8}>
            <DetailText variant='body1'>{phone.ram}</DetailText>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Label variant='body1'>Processor</Label>
          </Grid>
          <Grid item xs={8}>
            <DetailText variant='body1'>{phone.processor}</DetailText>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item xs={12}>
            <DetailText variant='body2'>{phone.description}</DetailText>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PhoneDetails;
