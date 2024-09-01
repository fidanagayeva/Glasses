'use client';

import React, { useState } from 'react';
import { FaPencilAlt, FaTrash, FaEye } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminTable = ({ addNewBlog }) => {
  const initialData = [
    {
      id: 1,
      title: 'Reinterprets the classic bookshelf',
      date: '2023-07-23',
      author: 'S. Rogers',
      category: 'DESIGN TRENDS, INSPIRATION',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUzpyi3Hl2UdDKtdxchbn-UF-Y1BKBOd7hA&s',
      description: 'Aliquet parturient scele risque scele risque nibh pretium parturient suspendisse platea sapien torquent feugiat parturie...'
    },
    {
      id: 2,
      title: 'Minimalist design furniture 2024',
      date: '2023-07-23',
      author: 'S. Rogers',
      category: 'DESIGN TRENDS, FURNITURE',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGz1lyUXS5Jk0AdBScHFkUOlqniCpFZJO5A&s',
      description: 'A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adi...'
    },
    {
      id: 3,
      title: 'Top 10 outdoor furniture trends',
      date: '2023-09-05',
      author: 'L. Brown',
      category: 'DESIGN TRENDS, HANDMADE',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiP0APwnP69z1e2ocPnYzfqX9WyVlKdU_Tw&s',
      description: 'Curabitur bibendum diam vel turpis cursus, ut lacinia nisi suscipit. Maecenas vitae augue sit amet magna consectetur aliquet...'
    }
  ];

  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const openModal = (item = null) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const openViewModal = (item) => {
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    setIsViewModalOpen(false);
  };

  const handleSave = (values, { resetForm }) => {
    const newItem = { ...values, id: data.length + 1 };
    if (values.image) {
      newItem.image = URL.createObjectURL(values.image);
    }
    if (selectedItem && selectedItem.id) {
      const updatedData = data.map(item =>
        item.id === selectedItem.id ? { ...values, id: selectedItem.id } : item
      );
      setData(updatedData);
      toast.success("Article updated successfully!");
    } else {
      setData([...data, newItem]);
      addNewBlog(newItem);
      toast.success("Article created successfully!");
    }
    resetForm();
    closeModal();
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
    toast.success("Article deleted successfully!");
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    date: Yup.date().required('Date is required').nullable(),
    author: Yup.string().required('Author is required'),
    category: Yup.string().required('Category is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Latest Articles</h2>
        <button
          className="bg-black text-white py-2 px-4"
          onClick={() => openModal()}>
          Create
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-8 h-8 object-cover" />
                ) : (
                  <span>No image</span>
                )}
              </td>
              <td className="py-2 px-4 border-b align-middle">{item.title}</td>
              <td className="py-2 px-4 border-b align-middle">{item.date}</td>
              <td className="py-2 px-4 border-b align-middle">{item.author}</td>
              <td className="py-2 px-4 border-b align-middle">{item.category}</td>
              <td className="py-2 px-4 border-b flex items-center justify-around align-middle">
                <button
                  className="text-black p-2"
                  onClick={() => openModal(item)}>
                  <FaPencilAlt />
                </button>
                <button
                  className="text-black p-2"
                  onClick={() => handleDelete(item.id)}>
                  <FaTrash />
                </button>
                <button
                  className="text-black p-2"
                  onClick={() => openViewModal(item)}>
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">{selectedItem?.id ? 'Edit Article' : 'Create Article'}</h2>
            <Formik
              initialValues={{
                title: selectedItem?.title || '',
                date: selectedItem?.date || '',
                author: selectedItem?.author || '',
                category: selectedItem?.category || '',
                image: null,
                description: selectedItem?.description || '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSave}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <Field name="title" className="w-full p-2 border" />
                    <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Date</label>
                    <Field name="date" type="date" className="w-full p-2 border" />
                    <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Author</label>
                    <Field name="author" className="w-full p-2 border" />
                    <ErrorMessage name="author" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <Field name="category" className="w-full p-2 border" />
                    <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                      name="image"
                      type="file"
                      className="w-full p-2 border"
                      onChange={(e) => setFieldValue("image", e.target.files[0])}
                    />
                    <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <Field as="textarea" name="description" className="w-full p-2 border" />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="bg-red-500 text-white py-2 px-4"
                      onClick={closeModal}>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white py-2 px-4">
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {isViewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">View Article</h2>
            {selectedItem?.image && (
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover mb-4" />
            )}
            <p><strong>Title:</strong> {selectedItem?.title}</p>
            <p><strong>Date:</strong> {selectedItem?.date}</p>
            <p><strong>Author:</strong> {selectedItem?.author}</p>
            <p><strong>Category:</strong> {selectedItem?.category}</p>
            <p><strong>Description:</strong> {selectedItem?.description}</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-black text-white py-2 px-4"
                onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default AdminTable;
