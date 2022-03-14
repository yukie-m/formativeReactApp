import React from "react";
import axios from "axios";
import { useRef } from "react";
import Modal from "react-modal";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "90%",
  margin: "auto",
  padding: "0.5rem",
};

function ListItem() {
  const nameRef = useRef();
  const sellerRef = useRef();
  const priceRef = useRef();
  const thumbRef = useRef();
  const descriptionRef = useRef();
  //   const statusRef = useRef();
  const areaRef = useRef();
  const categoryRef = useRef();
  const conditionRef = useRef();
  const itemRef = useRef();
  const sizeRef = useRef();
  const collectingRef = useRef();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  // Modal.setAppElement(el);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Price:", priceRef.current.value);
    console.log("Collecting:", collectingRef.current.value);
    let formdata = {
      name: nameRef.current.value,
      seller: sellerRef.current.value,
      price: priceRef.current.value,
      thumb: thumbRef.current.value,
      //   status: statusRef.current.value,
      area: areaRef.current.value,
      category: categoryRef.current.value,
      condition: conditionRef.current.value,
      item: itemRef.current.value,
      size: sizeRef.current.value,
      collecting: collectingRef.current.value,
      description: descriptionRef.current.value,
    };

    axios
      .post("//localhost:4000/api/create-product", formdata)
      .then((response) => {
        console.log(response);
        console.log(response.statusText);
      });
  };
  return (
    <div>
      <h1>List Your Item</h1>

      <form onSubmit={onSubmit} style={formStyle}>
        <input type="text" placeholder="Your Name" ref={sellerRef} required />
        <input type="text" placeholder="Location" ref={areaRef} required />
        <input type="text" placeholder="Item Name" ref={nameRef} required />
        <input
          type="text"
          placeholder="Collecting Way"
          ref={collectingRef}
          required
        />
        <input type="number" placeholder="Price" ref={priceRef} required />
        <input type="text" placeholder="item" ref={itemRef} required />
        <input type="text" placeholder="Category" ref={categoryRef} required />
        <input type="text" placeholder="Size" ref={sizeRef} required />
        <input
          type="text"
          placeholder="Condition"
          ref={conditionRef}
          required
        />
        <input type="text" placeholder="Image" ref={thumbRef} required />
        <textarea
          name="w3review"
          rows="4"
          cols="50"
          placeholder="Description"
          ref={descriptionRef}
          required
        />
        <button onClick={openModal} className="create-btn">
          SUBMIT
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        // className="modal-thankyou"
      >
        <button onClick={closeModal}>close</button>
        <h1 className="xxxx">Thank you!</h1>
        <p>You listed Item Successfully ♡</p>
      </Modal>
    </div>
  );
}

export default ListItem;
