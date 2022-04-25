import { render, screen } from "@testing-library/react";
import FetchData from '../FetchData'
import userEvent from "@testing-library/user-event";

describe("Fetch component",()=>{
it("renders title", async() => {
  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ({ title: "Fetched" }),
  });

  render(<FetchData />);
//insteadusing getByRole
  userEvent.click(screen.getByRole("button")); 
       
  expect(await screen.findByText("Fetched")).toBeInTheDocument();
});
})
