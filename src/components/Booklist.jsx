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
                    <b>{x.volumeInfo.title}</b>&emsp;<span style={{color: '#007700'}}>{x.volumeInfo.authors}</span>&ensp;{x.volumeInfo.publishedDate}<br></br>
                    {/* 三項演算子でvueのundefinedを処理 */}
                    {x.volumeInfo.imageLinks === undefined
                        ? <a href={x.volumeInfo.infoLink}>
                          <img src='/No_picture_available.png' alt={x.volumeInfo.title} width="120" height="150"　border="1px solid"></img>
                          </a>
                        : <a href={x.volumeInfo.infoLink}>
                          <img src={x.volumeInfo.imageLinks.thumbnail} alt={x.volumeInfo.title}></img>
                          </a>
                    }
                </p>
                )      
            }
            </ul>
        </div>
    );
}
export default Booklist;