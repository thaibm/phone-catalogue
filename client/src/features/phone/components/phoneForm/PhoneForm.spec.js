import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import PhoneForm from './PhoneForm';

describe("PhoneForm", () => {
  it("should show validation on blur", async () => {
    render(<PhoneForm />);
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('manufacturer')).toBeInTheDocument();
    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Processor')).toBeInTheDocument();
    expect(screen.getByText('Ram')).toBeInTheDocument();
    expect(screen.findAllByText('price'));
    expect(screen.getByText('Screen')).toBeInTheDocument();
  });

  it("should show button click submit", async () => {
    render(<PhoneForm />);
    expect(screen.getByText('Save details')).toBeInTheDocument();
  })
})


