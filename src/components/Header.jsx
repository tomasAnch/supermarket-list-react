import { useState, useEffect } from 'react'
import Modal from './Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({ theme, handleThemeSwitch }) => {
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'))
    if (storedItems) {
      setItems(storedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const addItems = (newItem) => {
    setItems([...items, newItem])
  }

  const removeItem = (index) => {
    const updatedItems = [...items]
    updatedItems.splice(index, 1)
    setItems(updatedItems)
  }

  return (
    <>
      <div className='h-screen bg-slate-100 dark:bg-gray-900'>
        <div className='font-poppins bg-slate-100 dark:bg-gray-900'>
          <div className='flex justify-end p-6'>
            <button onClick={handleThemeSwitch}>
              {theme === 'dark'
                ? (
                  <FontAwesomeIcon icon={faSun} className='text-white w-6 h-6' />
                  )
                : (
                  <FontAwesomeIcon icon={faMoon} className='w-6 h-6' />
                  )}
            </button>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[350px] md:w-[600px] mb-16'>
              <div className='flex items-center justify-center flex-col'>
                <h1 className='font-medium text-3xl dark:text-white'>
                  Supermarket list
                </h1>
                <h3 className='font-medium text-2xl my-6 dark:text-white'>
                  {items.length} item(s)
                </h3>
                <ul className='w-full dark:text-white'>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className='w-full flex py-3 mb-6 rounded-md justify-between border shadow-slate-300 shadow-md px-4 dark:border-gray-950 dark:shadow-gray-800'
                    >
                      <span className='font-semibold'>{item}</span>
                      <button
                        className='italic'
                        onClick={() => removeItem(index)}
                      >
                        delete
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowModal(true)}
                  className='bg-sky-500 text-white rounded-md py-3 w-full hover:bg-sky-600'
                >
                  Add item
                </button>
              </div>
            </div>
            <Modal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
              addItems={addItems}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
