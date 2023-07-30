## CRUD(Create, Read, Update, Delete) 흐름을 프론트엔드에서 구현하는 예시.

이 예시에서는 React와 Axios를 사용하여 API와 통신하고, 로컬 상태를 관리하는 방법을 설명.

### 게시물 목록 가져오기(Read)
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API에서 게시물 목록 가져오기
    axios.get('/api/posts')
      .then((response) => {
        // 응답 데이터를 로컬 상태에 저장
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>게시물 목록</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
```
## 게시물 작성(Create)

```
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    const newPost = { title, content };

    // API로 게시물 작성 요청 보내기
    axios.post('/api/posts', newPost)
      .then((response) => {
        // 작성된 게시물을 로컬 상태에 추가
        setPosts((prevPosts) => [...prevPosts, response.data]);
        // 입력 필드 초기화
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div>
      <h1>새로운 게시물 작성</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleCreatePost}>작성하기</button>
    </div>
  );
}
```
## 게시물 수정(Update)
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditPost({ postId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // API에서 기존 게시물 정보 가져오기
    axios.get(`/api/posts/${postId}`)
      .then((response) => {
        // 응답 데이터로 입력 필드 초기화
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  const handleUpdatePost = () => {
    const updatedPost = { title, content };

    // API로 게시물 수정 요청 보내기
    axios.put(`/api/posts/${postId}`, updatedPost)
      .then((response) => {
        // 수정된 게시물을 로컬 상태에 업데이트
        setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? response.data : post)));
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  };

  return (
    <div>
      <h1>게시물 수정</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleUpdatePost}>수정하기</button>
    </div>
  );
}
```
## 게시물 삭제(Delete)
```
import React from 'react';
import axios from 'axios';

function DeletePost({ postId }) {
  const handleDeletePost = () => {
    // API로 게시물 삭제 요청 보내기
    axios.delete(`/api/posts/${postId}`)
      .then(() => {
        // 로컬 상태에서 해당 게시물 제거
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div>
      <h1>게시물 삭제</h1>
      <button onClick={handleDeletePost}>삭제하기</button>
    </div>
  );
}
```
또한 React의 useEffect 훅을 사용하여 컴포넌트가 마운트되었을 때나 특정 값을 받아왔을 때 작업을 수행하도록 설정합니다. 
이를 통해 사용자가 게시물을 작성, 수정, 삭제할 수 있는 CRUD 흐름을 구현할 수 있습니다.
---

## isloading 변수는 주로 비동기 통신을 통해 데이터를 가져오는 과정에서 사용.

서버로부터 데이터를 조회하는데 시간이 걸릴 수 있으므로, 이때 사용자에게 로딩 상태를 보여주기 위해 isloading 변수를 활용합니다.

예를 들어, 게시물 목록을 가져오는 경우를 생각해봅시다. 서버로부터 게시물 목록을 가져오는 동안 사용자에게 로딩 스피너나 메시지를 보여

프론트엔드에서 API와 통신하여 CRUD 작업을 수행하는 방법을 보여줍니다. 
각각의 기능은 Axios를 사용하여 서버와 비동기 통신하며, 로컬 상태를 이용하여 데이터를 관리합니다. 

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    // API에서 게시물 목록 가져오기
    axios.get('/api/posts')
      .then((response) => {
        // 응답 데이터를 로컬 상태에 저장
        setPosts(response.data);
        // 데이터 가져오기 완료 후 로딩 상태 변경
        setIsloading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        // 에러 발생 시에도 로딩 상태 변경
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>게시물 목록</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
```
위 예시에서 useEffect를 통해 게시물 목록을 가져오는 과정에서 isloading 상태를 true로 설정한 뒤, 데이터를 가져온 후에는 false로 변경합니다. 이로써 데이터를 가져오는 동안 로딩 상태를 보여줄 수 있게 됩니다.
