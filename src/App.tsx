import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import power from '../src/images/power.svg'
import Image from 'react-bootstrap/Image';
import { RootState } from './store';
import RegisterFirstStep from './components/RegisterFirstStep';
import Confirmation from './components/Confirmation';

const App = () => {
  const form = useSelector(
    (state: RootState) => state.form
  );

  return (
    <div>
      <Container className="appContainer">
        {form.step === 'form' && (
          <RegisterFirstStep />
        )}
        {form.step === 'confirmation' && (
          <Confirmation />
        )}
        <Container className='fixed-bottom text-center textFooter mb-5'>
          Powered by <Image src={power}></Image>
        </Container>
      </Container>
    </div>
  );
};

export default App;
