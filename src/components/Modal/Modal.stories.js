import React from 'react';
import Modal from "./Modal"
import {useState} from "react"


// meta data 
export default {
    title: 'Sodium UI/Modal', //mandatory
    component:Modal,
    argsTypes:{

    }
}

export const SimpleModal = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }

    return(
        <div>
            <button onClick={() => showModal()}>Launch Demo Modal</button>
            <Modal show={show} onHide={hideModal}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                    Lorem Ipsum hahah
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => hideModal()}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

