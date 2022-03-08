import React, { useState } from 'react';
import { SaveIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import axios from 'axios';

const CreateTask = ({ setOpen }) => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [duration, setDuration] = useState(0);
  const [importance, setImportance] = useState('');

  const submitTask = (e) => {
    const task = new FormData();

    task.append('title', title);
    task.append('image', img);
    task.append('duration', duration);
    task.append('importance', importance);

    e.preventDefault();
    axios
      .post('http://localhost:3030/tasks/create', task)
      .then((res) => setOpen(false));
  };

  return (
    <div className="">
      <form
        className="flex flex-col gap-8"
        onSubmit={submitTask}
        method="POST"
        encType="multipart/form-data"
      >
        <div className=" flex justify-between">
          <select
            className="bg-[#E2DDD3] bg-opacity-0 "
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="">Set Priority</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <input
            type="number"
            className="bg-[#E2DDD3]  "
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="flex">
          <textarea
            className="bg-[#CAC1AE] w-full h-24 p-4  rounded-lg placeholder:text-[#857557] placeholder:px-4"
            placeholder="Describe your task..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="file"
            name="image"
            className="bg-[#E2DDD3] py-2 px-4 rounded-lg file:px-4 file:py-2 file:bg-[#857557] file:rounded-full file:text-[#857557] 
            file:mr-4 file:bg-opacity-30 hover:file:bg-opacity-60 file:border-0"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setImg(e.target.files[0]);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-600 flex gap-2 p-4 rounded-lg text-white justify-center active:bg-slate-900 active:translate-y-1"
        >
          {' '}
          <SaveIcon className="h-6 w-6" /> Save Task{' '}
        </button>
      </form>
      <span
        className="flex gap-2 justify-center p-4 border-2 border-slate-500 rounded-lg mt-2"
        onClick={() => setOpen(false)}
      >
        <ArrowLeftIcon className="h-6 w-6" />
        <p>Go Back</p>
      </span>
    </div>
  );
};

export default CreateTask;
