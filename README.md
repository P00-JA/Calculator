![Screenshot from 2023-10-26 17-44-04](https://github.com/P00-JA/Calculator/assets/148937443/8c390647-a48d-474c-893b-c691bdf5365f)
![Screenshot from 2023-10-26 16-53-00](https://github.com/P00-JA/Calculator/assets/148937443/518f4d1b-84ae-4e87-bc3c-b85c825021ba)
![Screenshot from 2023-10-26 16-52-54](https://github.com/P00-JA/Calculator/assets/148937443/fc79a381-2904-4ac9-86f8-e9e255cdfa9f)
![Calculator_demo_video.webm](https://github.com/P00-JA/Calculator/assets/148937443/281164d2-35cd-4650-8533-073e6003f3c9)

A basic calculator using HTML,CSS and JavaScript
# Description or purpose
This project is a calculator using HTML,CSS and Javascript.It does basic calculations like addition,subraction,multiplication,division,modulus,power.
# Working of the Calculator
The display screen contains 2 div tag ,one to display current operand and while we press operator after the first number its moved to the above div which is previous operand.Table tag is used to build the structure of calculator
A class named calculator is created which intakes its constructor arguments as the previous operand and current operand.Inside the class there are methods like clear,delete,appendNum,selectOprtn,Calculate and update display.
All the number buttons are taken to numberbutton usind querselector all.All the operator buttons are taken to optrbutton usind querselector all.The delete ,clear and equals buttons are taken to deletebttn,allclrbutton and equalsbuttn respectively usind querselector.Also previous and current numbers are taken into prevOprnd and CurrOprnd.As the user clicks each number , operator key ,delete key, clear key.euals key their respective methods are executed and evry time the updatedisplay method is executed to update values in display. 


