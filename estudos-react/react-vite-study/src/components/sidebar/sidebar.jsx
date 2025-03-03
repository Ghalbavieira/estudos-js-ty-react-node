import React from "react"
import styles from './sidebar.module.css';
import { PencilLine } from 'phosphor-react';


export default function Sidebar(){
    
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1740676176355-509de9e2654c?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
            />
        
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/ghalbaVieira.png" 
                    alt="Imagem do avatar" 
                
                />

                <h3>Ghalba Vieira</h3>
                <p>Web Developer</p>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}