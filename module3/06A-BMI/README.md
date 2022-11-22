# Instructions
You are to implement a BMI calculator.

You have to add in the code to enable form processing (see lab 6 step 1).
There is no need to use wax-on

Press the Run button to start server, Stop button to stop the server. You may have to reset the server (i.e rerun) for repl.it to process your latest code.

## Tasks
- Extract out the weight from the submitted form
- Extract out the height from the submitted form
- Calculate the BMI
- Use `res.send` to send the BMI back to the browser.

## Additional
Add in a radio button that allows the user to select between metric and imperial units. If it is metric, then use kg and metres. If it is imperial units, then it's pounds and inches. 

**Formula**

- BMI (in SI Units): weight/height**2

- BMI (in imperial units):  (weight/height**2) * 703
