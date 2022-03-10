import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function Products() {
  const [mydata, setData] = useState([]);
  const [name, setName] = useState("ddd");
  const [description, setDescription] = useState("cccc");
  const [seller, setSeller] = useState("eee");
  const [price, setPrice] = useState("aaa");
  const [status, setStatus] = useState("jjj");
  const [thumb, setThumb] = useState("iii");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getSingle = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:4000/api/view-product-by-id/${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setSeller(response.data.seller);
        setPrice(response.data.price);
        setStatus(response.data.status);
        setThumb(response.data.thumb);
        setIsOpen(true);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/view-products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <div className="wrap">
        {mydata.map((item, index) => {
          return (
            <div key={index} className="s-wrap">
              <div>
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <img src={`${"./image/" + item.image}`} />
                <button onClick={() => getSingle(item._id)}>
                  Read More...
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button onClick={closeModal}>close</button>
        <h2 className="xxxx">Details</h2>
        <div>
          <h5>{name}</h5>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>{seller}</p>
        </div>
      </Modal>
    </>
  );
}
