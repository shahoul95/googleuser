import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from "../store/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirmation = () => {
    const form = useSelector(
        (state: RootState) => state.form
    );

    const notify = () => toast("Text Copied!", {
        autoClose: 1 // Fermer automatiquement après 2 secondes (2000 millisecondes)
    });

    const handleCopyText = () => {
        // Select the text to be copied
        const textToCopy = document.querySelector('.text-copy');
        if (!textToCopy) {
            console.error('Element with class .copyText not found.');
            return;
        }

        const range = document.createRange();
        range.selectNode(textToCopy);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        document.execCommand('copy');
        window.getSelection()?.removeAllRanges();
        notify();
    };

    const linkUrl = () => {
        window.location.replace(form.link)
    }

    return (
        <div className="appContainer">
            <Container>
                <Row className="justify-content-center align-items-center pt-5">
                    <Col className='pt-5'>
                        <div className='cardCustom p-4 text-center'>
                            <div className='copyText mt-3 p-3'>
                                <p className='text-copy'>
                                    {form.comments}
                                </p>
                                <div className='copyButton mt-2' onClick={handleCopyText}>
                                    Copier
                                    <ToastContainer autoClose={false} />
                                </div>
                            </div>
                            <div className="text-center pt-3">
                                <Button className="buttonCustom text-white" onClick={linkUrl}>
                                    Suivant
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Confirmation;
