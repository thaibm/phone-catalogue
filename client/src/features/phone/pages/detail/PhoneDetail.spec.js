import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import PhoneProfileDetail from './PhoneProfileDetail';

describe("PhoneDetail", () => {
  it("should have form phone", async () => {
    render(<PhoneProfileDetail />);
    expect(screen.getByText('Create new phone')).toBeInTheDocument();
  });

})

