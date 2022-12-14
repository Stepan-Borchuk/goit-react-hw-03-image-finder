import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { OverlayModal, ContainerModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImg, tags } = this.props;
    return createPortal(
      <OverlayModal onClick={this.handleBackDropClick}>
        <ContainerModal>
          <img src={selectedImg} alt={tags} />
        </ContainerModal>
      </OverlayModal>,
      modalRoot
    );
  }
}
