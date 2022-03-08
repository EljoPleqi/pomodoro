import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';

const Button = ({ setOpen, open }) => {
  const button = !open && (
    <div
      className="w-full bg-[#263a44] flex gap-2 p-4 rounded-lg text-white justify-center active:bg-slate-900 active:translate-y-1"
      onClick={() => setOpen(!open)}
    >
      <PlusCircleIcon className="h-6 w-6" /> Add New Task
    </div>
  );
  return button;
};

export default Button;
