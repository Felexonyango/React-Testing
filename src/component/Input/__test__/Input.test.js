import React from "react";
import Input from '../Input'
import { screen,render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'


describe("Input component",()=>{
 it("rendered input",()=>{
        render(<Input showDiv={false}/>)
  
   const input = screen.getByTestId("input-search")
       expect(input).toBeTruthy()
  
   })
  
  it("should render div",()=>{
      render(<Input showDiv={true}/>)
  
      const headerEl= screen.getByTestId("displaySearch")
  
      expect(headerEl).toBeTruthy()
  })
  it("should  not render div",()=>{
      render(<Input showDiv={false}/>)
      const headerEl= screen.queryByTestId("show-div")
  
      expect(headerEl).toBeFalsy()
    
  })
  it("change on input to make change on header",async()=>{
      render(<Input showDiv={true}/>)
      const SearchEl= screen.getByTestId("displaySearch")
      const inputword="Felex"

    await  userEvent.type(SearchEl, inputword);

 
  })









})

