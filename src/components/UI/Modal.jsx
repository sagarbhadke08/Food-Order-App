import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
    }, [open]);

    const dialog = useRef();
    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,

        document.getElementById('modal'));

}