import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
type Props = {
  children: React.ChildNode;
};

export default function ProjectViewModal({}: Props) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-br from-accent-light-100 to-accent-light-200 bg-fixed">
            <div className="bg-circle">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
              <div className="circle-4"></div>
            </div>
          </div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[60rem] min-h-screen transform overflow-hidden rounded-2xl   bg-light-alpha-25 borer border-light-alpha-40  backdrop-blur-[10px] p-6 text-left align-middle shadow-xl transition-all"></Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
