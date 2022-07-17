// Booklist.jsx

// 🔽 追加
import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
  // 🔽 ここから追加
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);

  // 🔼 ここまで追加

  return (
    <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
          <ul
          key={index}><img src = {x.volumeInfo.imageLinks.smallThumbnail} /><br></br>
          {"【タイトル】"}{x.volumeInfo.title}<br></br>
          {"【著者】"}{x.volumeInfo.authors}<br></br><br></br>
          </ul>
        ))
      )}
    </ul>
  );
};