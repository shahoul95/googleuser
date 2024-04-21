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
        if (form.reference === "ATM1") {
            window.location.replace("https://www.google.com/maps/place/ADS+Groupe/@50.6422257,3.0561905,17z/data=!4m8!3m7!1s0x47c32a7ede5da7e1:0xfdbbb46ad1199d47!8m2!3d50.6422257!4d3.0561905!9m1!1b1!16s%2Fg%2F11gf9pk6cw?entry=ttu")
            window.history.replaceState(null, "", window.location.href);
        }
        if (form.reference === "ATM2") {
            window.location.replace("https://www.google.com/maps/place/ADS+Groupe/@50.6422257,3.0561905,17z/data=!4m8!3m7!1s0x47c32a7ede5da7e1:0xfdbbb46ad1199d47!8m2!3d50.6422257!4d3.0561905!9m1!1b1!16s%2Fg%2F11gf9pk6cw?entry=ttu");
            window.history.replaceState(null, "", window.location.href);
        }
        if (form.reference === "ATM3") {
            window.location.replace("https://www.google.com/maps/place//data=!4m2!3m1!1s0x47ddcffee0d96b9f:0xcf17c0938e388b02?sa=X&ved=2ahUKEwj_1_aa2oKEAxUMRKQEHTAqBMoQ4kB6BAgQEAA");
            window.history.replaceState(null, "", window.location.href);
        }
    };

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
