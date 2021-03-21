import React from 'react';
import Modal from "./Modal"
import {useState} from "react"
import Button from "./../Button/Button"


// meta data 
export default {
    title: 'Sodium UI/Modal', //mandatory
    component:Modal,
    argsTypes:{

    }
}

export const StaticModalMarkup = () => {

    return(
        <div>
            <Modal>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}}>Close</Button>
                    <Button>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}


export const Small = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }

    return(
        <div>
            <Button onClick={() => showModal()}>Launch Demo Modal</Button>
            <Modal size="small" show={show} onHide={hideModal}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideModal()}>Close</Button>
                    <Button onClick={() => hideModal()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export const Medium = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }

    return(
        <div>
            <Button onClick={() => showModal()}>Launch Demo Modal</Button>
            <Modal size="medium" show={show} onHide={hideModal}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideModal()}>Close</Button>
                    <Button onClick={() => hideModal()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export const Large = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }

    return(
        <div>
            <Button onClick={() => showModal()}>Launch Demo Modal</Button>
            <Modal size="large" show={show} onHide={hideModal}>
                <Modal.Title>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideModal()}>Close</Button>
                    <Button onClick={() => hideModal()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export const ModalWithCloseButton = () => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }

    return(
        <div>
            <Button onClick={() => showModal()}>Launch Demo Modal</Button>
            <Modal size="small" show={show} onHide={hideModal}>
                <Modal.Title closeButton={{show:true, onHide:hideModal}}>
                    Modal Title
                </Modal.Title>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="dark" style={{margin:"0 1rem"}} onClick={() => hideModal()}>Close</Button>
                    <Button onClick={() => hideModal()}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}






