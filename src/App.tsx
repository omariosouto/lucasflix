import React from 'react';

interface MenuProps {
  name: string;
}

const Menu:React.FC<MenuProps> = ({ name }) => {
  return (
    <div>
      Menu: {name}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      Lucasflix

      <Menu name={'Name'} />
    </div>
  );
}

export default App;
