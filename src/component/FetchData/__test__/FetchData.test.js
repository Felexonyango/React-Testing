import { render, screen } from "@testing-library/react";
import FetchData from '../FetchData'
import userEvent from "@testing-library/user-event";

it("renders title", async() => {
  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ({ title: "Fetched" }),
  });

  render(<FetchData />);

  userEvent.click(screen.getByRole("button")); 
       
  expect(await screen.findByText("Fetched")).toBeInTheDocument();
});
