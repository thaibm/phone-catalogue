import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import PhoneCreation from "./PhoneCreation";

describe("PhoneCreation", () => {
  it("should have form phone", async () => {
    render(<PhoneCreation />);
    expect(screen.getByText('Create new phone')).toBeInTheDocument();
  });

})

