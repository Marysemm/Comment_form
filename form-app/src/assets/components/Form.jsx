import React, { useState } from 'react';

export default function Form() {

    const [value, setValue] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const arrayComments = [...comments];
        arrayComments.unshift(value.comment);
        setComments(arrayComments);
    };

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.dataset.name]: e.target.value,
        });
    };

    return (
        <div className="comments__wrapper">
            <div className="comments__list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comments__column">
                        <span>{comment}</span>
                    </div>
                ))}
            </div>
            <form className="comments__form-wrapper" onSubmit={handleSubmit}>
                <textarea
                    data-name={"comment"}
                    placeholder=" Введите комментарий..."
                    className="comments__input-comment"
                    onChange={handleChange}
                    value={value.comment}
                ></textarea>
                <input className="comments__button-submit" value="Submit" type="submit" />
            </form>
        </div>
    );
}
