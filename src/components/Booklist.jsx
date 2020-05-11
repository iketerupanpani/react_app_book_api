import React, { useState, useEffect } from  'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null); //nullはbookDataの初期値
    useEffect(() =>{
        const result = props.getData?.(props.language).then(response => setBookData(response));
    },[props])
    return (
        <div>
            {/* <p>this is {JSON.stringify(bookData)} list component</p>  */}
            <ul>
            {
                bookData === null 
                ? <img src="/loading.gif" alt='now loading' />
                : bookData.data.items.map
                (
                    (x, index) => 
                <p key={index}>
                    <b>{x.volumeInfo.title}</b> <br></br>
                    <a href={x.volumeInfo.infoLink}>
                    <img src={x.volumeInfo.imageLinks.thumbnail} alt={x.volumeInfo.title}></img>
                    </a>
                    {x.volumeInfo.authors}/{x.volumeInfo.publishedDate}
                </p>
                )      
            }
            </ul>
        </div>
    );
}
export default Booklist;