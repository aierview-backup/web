// src/components/Modal.tsx
"use client";

import CloseIcon from "@/shared/ui/icons/close.svg";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import Button from "../Button";
import styles from "./modal.module.css"; // CSS aqui

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    className: string;
}

export default function Modal({children, onClose, className}: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div
                className={`${styles.modal} ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
        <span className={styles.close}>
          <Button type="iconBtn" value={<CloseIcon/>} handleClick={onClose}/>
        </span>
                {children}
            </div>
        </div>,
        document.getElementById("modal")!
    );
}
