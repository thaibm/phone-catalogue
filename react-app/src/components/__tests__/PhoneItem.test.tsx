import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import PhoneItem from '../PhoneItem';

const phone = {
  id: 8,
  name: 'Iphone X',
  description: 'Lorem ipsum dolor sit',
  price: 250,
  color: 'Red',
  manufacturer: 'Apple',
  imageFileName: '',
  screen: '4.7',
  processor: 'A10 fusion',
  ram: '8',
};

afterEach(cleanup);

describe('PhoneItem Component', () => {
  // Example for text testing, we can implement for other text like description, manufacturer, etc...
  it('has phone name', () => {
    const phoneItem = render(
      <PhoneItem
        phone={phone}
        onClick={(id: number) => {}}
        onDelete={(id: number) => {}}
        onEdit={(id: number) => {}}
      />
    );
    expect(phoneItem.container.textContent).toMatch('Iphone X');
  });

  // Example for event testing
  it('can click on phone item', () => {
    const onClick = jest.fn();
    const phoneItem = render(
      <PhoneItem
        phone={phone}
        onClick={onClick}
        onDelete={(id: number) => {}}
        onEdit={(id: number) => {}}
      />
    );
    fireEvent.click(phoneItem.getByText('Iphone X'));
    expect(onClick).toHaveBeenCalled();
  });

  // Example for menu testing. Show, check menu content
  it('can show actions menu', () => {
    const phoneItem = render(
      <PhoneItem
        phone={phone}
        onClick={(id: number) => {}}
        onDelete={(id: number) => {}}
        onEdit={(id: number) => {}}
      />
    );

    fireEvent.click(phoneItem.getByLabelText('actions'));
    expect(phoneItem.getByLabelText('actions-menu')).toBeTruthy();

    const editItem = phoneItem.getByLabelText('edit-action');
    expect(editItem).toBeTruthy();
    expect(editItem.textContent).toMatch('Edit');

    const deleteItem = phoneItem.getByLabelText('delete-action');
    expect(deleteItem).toBeTruthy();
    expect(deleteItem.textContent).toMatch('Delete');
  });

  // Example for event testing, which has to open the menu before click on Delete, we can do the same as Edit event
  it('can delete phone item', () => {
    const onDelete = jest.fn();
    const phoneItem = render(
      <PhoneItem
        phone={phone}
        onClick={(id: number) => {}}
        onDelete={onDelete}
        onEdit={(id: number) => {}}
      />
    );
    fireEvent.click(phoneItem.getByLabelText('actions'));
    fireEvent.click(phoneItem.getByLabelText('delete-action'));
    expect(onDelete).toHaveBeenCalled();
  });
});
