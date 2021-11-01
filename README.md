# Welcome to Butternut's Catwalk

### Once Downloaded Run the Following Commands in Order

1. npm install
2. npm run dev
3. (in a separate terminal) npm start

### Using Context

If you would like to use the context id that is in use you will need to do the following in the file you would like use context, as long as it is a child component of Reviews, Questions, or Overview.

1. import {useContext} speciifically from React
    * ex. `import React, {useContext} from 'react';`
2. import the actual conext from the context.jsx folder inside src
    * ex. `import Product_Id_Context from './context.jsx'`
3. In your Functional Component make sure to set a variable to the context using useContext
    * ex. `const FILL_ME_IN = useContext(Product_Id_Context)`

The Variable should now have the value of the current ID and the component should re-render on change.

