JavaScript Language Programming

1. JavaScript Declarations
2. JavaScript Objects
   1. Everything is Object
      1. number, string
      2. date, array
      3. {}
      4. boolean
      5. function
   2. Data Structures
      1. Array
         1. 0 index collection
      2. String
         1. character collection
   3. Declarations
      1. var x =[]; // type independent array
      2. var x =[1,2,4]; Type definition as number for array
3. Event-Driven Programming with JavaScript
   1. Objects communicate with each other
      1. Objects knows each other
         1. GUI or UI
            1. UI is an object that has event and once event is raised, it executes some logic and affect other object if any
               1. Button --> Click
   2. window and document
      1. window --> Browser Object
      2. document --> The DOM loaded in Window
         1. getElementById()
            1. Return single DOM element based on 'id' attribute
         2. getElementsByName() --> DOM Array based on 'name' attribute
         3. getElementsByTagName() --> DOM Array based on 'tag' attribute
         4. addEventListener()
            1. Subscribe to an event of an element by the callback method
               1. What is callback method?
   3. JavaScript Function Objects
      1. Reusable Block
      2. Behavioral Objects
         1. Input Parameters
            1. They are read as 'arguments' array by JS Parser provided the parameters are passed using array.
         2. Implementation
         3. No Return Type (one-way function) or return Type (Bi-Directional)
      3. Function subscribing to the Event
         1. Callback Functions
            1. Does not return
      4. The mechanism of implementing Object Oriented Programming (OOPs) in JavaScript
         1. Reference functions
         2. Close Functions
         3. Immediately Invocable Function Expression (IIFE)

#=============================================================================================
Working with HTML UI and UX

1. DOM Element
   1. Attributes & Properties
      1. Static w.r.t. DOM element
         1. <input type="text" id="txt" value="ABC">
            1. value is an attribute which is static for ABC
      2. When manipulated by JSOM, they are known as 'properties'
         1. document.getElementById('txt').value = "PQR";
            1. value of 'txt' is now a property, dynamically changed or manipulated
   2. Events
      1. Behavior of DOM elements
         1. Tunneled as
            1. window -> document -> DOM element
