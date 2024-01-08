import React from 'react'
import addNotification from 'react-push-notification';

const buttonClick = () => {
  addNotification({
      title: 'Welcome to Ashish React App',
      subtitle: 'Welcome to Ashish React app',
      message: 'Message from ashish keep explore the app',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
  });
};


const ContactRight = () => {
  return (
    <div className="contact-right">
      <div className="contact-right-box">
      <h3 className='yellow'>Our Value</h3>

<h1 className='dark-blue'>Value We Give to You</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sit possimus temporibus tenetur harum, nam quos saepe est eius ducimus veniam cumque, voluptatum vero? Perspiciatis consectetur vero expedita nesciunt nemo ea qui in, doloremque neque debitis facere voluptatum fuga at! A voluptatum consequatur temporibus in necessitatibus exercitationem maxime blanditiis tenetur numquam dolorem. Beatae optio suscipit perspiciatis ullam laboriosam laborum pariatur maiores esse exercitationem magnam iusto, recusandae repellendus reiciendis! Deserunt dicta mollitia facilis labore! Esse, soluta laborum tempora doloremque, autem accusantium cum vero distinctio itaque libero alias delectus animi a impedit amet, repellendus officiis enim doloribus sit facilis ad. Aliquid, incidunt! </p>

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quo unde sit. Quibusdam harum inventore aliquid cumque ipsa, minus ab, suscipit modi quod ullam fuga, nihil corporis dolor hic sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem labore nemo, nam reprehenderit perferendis officiis quos? Possimus, quisquam nostrum!</p>

<button onClick={buttonClick} className='button-9 btn'>Get More</button>
      </div>
    </div>
  )
}

export default ContactRight