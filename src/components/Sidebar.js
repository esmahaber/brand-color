import { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '5px 0px 30px 5px rgb(204 204 204)',
      border: 'none',
      padding: '60px',
      maxWidth: '720px'
    },
  };

function Sidebar(params) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal (){
        setModalIsOpen(!modalIsOpen);
    }

    function closeModal (){
        setModalIsOpen(false);
    }

    return(
    <>
    <aside className="sidebar">
        <div className="logo">
            <a>Brand<b>Colors</b></a>
        </div>
        <div className="description">
            The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav>
            <ul>
                <li>
                    <a onClick={openModal}>Suggest a Brand</a>
                </li>
            </ul>
        </nav>
    </aside>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="modalHeader">About BrandColors</h2>
        <button className="modalClose" onClick={closeModal}><GrClose/></button>
        <form className="modalBody">
            <p>
                BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.
            </p>
            <br/>
            <p>
                It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.
            </p>
        </form>
      </Modal>
    </>
    )
}

export default Sidebar;