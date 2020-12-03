import React from 'react';
import emailjs from 'emailjs-com';

export default function Email() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'upmarkit_test', e.target, 'user_0HrKUy9SpR3At3klSQ5Qc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form enctype="multipart/form-data" method="post" className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Number</label>
            <input type="number" name="number" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <label>Attachments</label>
            <input type="file" name="file" />
            <input type="submit" value="Send" />
        </form>
    );
}