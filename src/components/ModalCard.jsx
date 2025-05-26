import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalCard(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{
            fontSize:"18px",
          }}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-3 movie-info-block">
          <img src={props.url} alt="" style={{
            width:"20vw",height:"38vh"
          }}/>
          <p>
            {props.description}
          </p>
          </div>
        </Modal.Body>
      
      </Modal>
    );
  }
export default ModalCard;