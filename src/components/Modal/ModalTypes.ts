import { ReactNode, ComponentType } from "react"

export interface ModalProps{
    title: string, 
    isOpen: boolean, 
    children: ReactNode, 
    modalActions: ComponentType, 
    onClose: () => void
}