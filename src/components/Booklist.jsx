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
                <li key={index}>
                    <b>{x.volumeInfo.title}</b> <br></br>
                       {x.volumeInfo.authors}<br></br>
                    <img src={x.volumeInfo.imageLinks.thumbnail}></img>
                </li>
                )      
            }
            </ul>
        </div>
    );
}
export default Booklist;