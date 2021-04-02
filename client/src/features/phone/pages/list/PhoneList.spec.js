import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import PhoneListToolbar from "./PhoneListToolbar";

describe("PhoneList", () => {
  it("should show button click create phone", async () => {
    render(<PhoneListToolbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('Add phone')).toBeInTheDocument();
  })
})


