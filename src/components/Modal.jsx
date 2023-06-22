import { useState } from 'react'

const Modal = ({ isVisible, onClose, addItems }) => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (inputValue === '') {
      setErrorMessage('Please provide a valid value')
    } else {
      addItems(inputValue)
      setInputValue('')
      setErrorMessage('')
      onClose()
    }
  }

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-gray-100 bg-opacity-80 flex justify-center items-center'>
      <div className='w-[300px] md:w-[400px]'>
        <div className='bg-white p-6 rounded-lg shadow-xl flex flex-col items-center'>
          <h1 className='font-semibold text-2xl mb-2'>Add item</h1>
          {errorMessage && <p className='text-red-500 mb-2 text-sm'>{errorMessage}</p>}
          <form onSubmit={handleFormSubmit}>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              className='w-full py-2.5 px-3 rounded-sm border border-black focus:outline-blue-500'
            />
            <div className='flex flex-row mt-6 gap-3 md:gap-6'>
              <button
                type='button'
                onClick={onClose}
                className='bg-gray-100 font-medium rounded-md px-10 py-3 hover:bg-gray-200 w-full md:px-16'
              >
                Close
              </button>
              <button
                type='submit'
                className='text-white bg-sky-500 font-medium rounded-md px-10 py-3 hover:bg-sky-600 w-full md:px-16'
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
