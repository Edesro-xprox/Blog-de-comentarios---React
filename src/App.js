import Comments from './comments_component/Comments';
import Header from './comments_component/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='containerMain'>
        <Header/>
        <Comments
          imgName = 'Eva'
          name = 'Eva Luna Evangelión'
          charge = 'Ingeniera de Sistemas'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Andres'
          name = 'Andres Bellido Lopez'
          charge = 'Ingeniero Informático'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Carlos'
          name = 'Carlos Alberto Espinoza'
          charge = 'Ingeniero electrónico'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Eduardo'
          name = 'Eduardo Arteaga Paredes'
          charge = 'Administrador de Sistemas'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Nicoll'
          name = 'Nicoll García Bobadilla'
          charge = 'Contabilidad'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Luis'
          name = 'Luis Suarez Mendiola'
          charge = 'Ingeniero en Telecomunicaciones'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <Comments
          imgName = 'Edson'
          name = 'Edson Espinoza Rodríguez'
          charge = 'Ingeniero en Sistemas'
          comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
      </div>
    </div>
  );
}

export default App;
