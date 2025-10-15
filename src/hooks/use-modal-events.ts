"use client";

import { useEffect } from 'react';
import { useModal } from '@/components/modals/ModalProvider';

export const useModalEvents = () => {
  const { openModal } = useModal();

  useEffect(() => {
    const handleModalEvent = (event: CustomEvent) => {
      const { type, data } = event.detail;
      openModal(type, data);
    };

    // Listen for custom modal events
    window.addEventListener('openModal', handleModalEvent as EventListener);

    return () => {
      window.removeEventListener('openModal', handleModalEvent as EventListener);
    };
  }, [openModal]);
};

// Global function to trigger modals from anywhere
export const triggerModal = (type: string, data?: any) => {
  window.dispatchEvent(new CustomEvent('openModal', { 
    detail: { type, data } 
  }));
};