import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Search from "./Search"
import Upload from "./Upload"
import UploadBart from './UploadBart';
export default function LayOut() {
  return (
    <Routes>
      <Route element={<Upload />} path="/" />
      <Route element={<UploadBart />} path="/UploadBart" />
      <Route element={<Search />} path="/Search" />
    </Routes>
  );
}
