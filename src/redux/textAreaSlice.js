import { createSlice } from "@reduxjs/toolkit";

export const textAreaSlice=createSlice({
    name:'texts',
    initialState:{
        text:'this place user input',
        pages:true,
        helptext:`
        Heading
   =======

  Sub-heading
  -----------

  ### Another deeper heading

  Paragraphs are separated
  by a blank line.

  leave 2 spaces at the end of a line to do a
  line break

  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .

  Shopping list:

  * apples
  * oranges
  * pears
  * 
  * 
  * 
  * 

  Numbered list:



  1. apples
  2. oranges
  3. pears

  The rain---not the reign---in
   Spain.



 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`,

    },
    reducers:{
        addMassege:(state,action)=>{
           state.text = action.payload;
        },
        setPage:(state,action)=>{
            state.pages=!state.pages;
            
        }
    }
});
export const { addMassege ,setPage} = textAreaSlice.actions;


export default textAreaSlice.reducer;