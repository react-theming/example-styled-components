import React, { useState } from "react";

import { Button }  from './Components/Ui/Button'



const App = () => {
    const [toggleTheme, setToggleTheme ] = useState(false);

    return (
        <Button onClick={() => setToggleTheme(!toggleTheme)}>Toggle theme</Button>
    );
};

export default App;
