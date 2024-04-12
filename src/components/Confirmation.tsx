import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from "../store/index";

const Confirmation = () => {
    const form = useSelector(
        (state: RootState) => state.form
    );

    const handleCopyText = () => {
        // Select the text to be copied
        const textToCopy = document.querySelector('.copyText');
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
    };


    return (
        <div className="appContainer">
            <Container>
                <Row className="justify-content-center align-items-center pt-5">
                    <Col className='pt-5'>
                        <div className='cardCustom p-4 text-center'>
                            <div className='copyText mt-3 p-3'>
                                {form.reference}
                            </div>
                            <div className='copyCustom' onClick={handleCopyText}>
                                Copier
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Confirmation;
